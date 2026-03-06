import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, GUIDE_ITEMS } from "../../constants";

const BASE = import.meta.env.BASE_URL;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (target: string) => void;
}

const FEATURE_SUB_ITEMS = GUIDE_ITEMS.map((g) => ({
  label: g.category,
  href: `/guide/${g.id}`,
}));

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavClick = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.id === "features") {
      setFeaturesOpen(!featuresOpen);
      return;
    }
    if (item.type === "link") {
      navigate(item.target);
      onClose();
      return;
    }
    onNavigate(item.target);
    onClose();
  };

  const handleSubItemClick = (href: string) => {
    navigate(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      {/* 상단: 로고 + 닫기 버튼 */}
      <div className="flex items-center justify-between h-[102px] px-6">
        <img
          src={`${BASE}images/logo/sai-header-logo.png`}
          alt="Seoul Auction Intelligence"
          className="h-[36px] w-auto"
        />
        <button
          onClick={onClose}
          className="bg-transparent border-none cursor-pointer text-black"
          aria-label="메뉴 닫기"
        >
          <X size={28} />
        </button>
      </div>

      {/* 메뉴 항목 - 좌측 정렬 */}
      <nav className="flex flex-col px-6 pt-4">
        {NAV_ITEMS.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => handleNavClick(item)}
              className="w-full flex items-center justify-between py-5 text-[22px] font-semibold text-black bg-transparent border-none cursor-pointer hover:text-brand-gold transition-colors text-left"
            >
              <span>{item.label}</span>
              {item.id === "features" && (
                featuresOpen ? (
                  <ChevronUp size={24} className="text-[#8c8c8c]" />
                ) : (
                  <ChevronDown size={24} className="text-[#8c8c8c]" />
                )
              )}
            </button>

            {/* 주요기능 서브메뉴 */}
            {item.id === "features" && featuresOpen && (
              <div className="bg-[#f2f2f2] rounded-[12px] mx-0 mb-2 px-5 py-3">
                {FEATURE_SUB_ITEMS.map((sub) => (
                  <button
                    key={sub.href}
                    onClick={() => handleSubItemClick(sub.href)}
                    className="block w-full text-left py-3 text-[16px] text-black bg-transparent border-none cursor-pointer hover:text-brand-gold transition-colors"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
