import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import MobileMenu from "./MobileMenu";

const BASE = import.meta.env.BASE_URL;

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  isSubPage?: boolean;
}

export default function Header({ activeSection, onNavigate, isSubPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 서브페이지에서는 항상 스크롤된 상태 (흰 배경)
  const isOnSubPage = isSubPage || location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteBg = isOnSubPage || isScrolled;

  const handleNav = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.type === "scroll") {
      if (isOnSubPage) {
        // 서브페이지에서는 홈으로 이동 후 해당 섹션으로 스크롤
        navigate(`/#${item.target}`);
      } else if (onNavigate) {
        onNavigate(item.target);
      }
    } else if (item.type === "link") {
      navigate(item.target);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[102px] z-50 flex items-center px-8 transition-all duration-300 ${
          showWhiteBg ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <img
          src={`${BASE}images/logo/sai-header-logo.png`}
          alt="Seoul Auction Intelligence"
          className="w-[152px] h-[36px] object-contain cursor-pointer"
          style={showWhiteBg ? {} : { filter: "brightness(0) invert(1)" }}
          onClick={() => {
            if (isOnSubPage) {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />

        <div className="flex-1 flex items-center justify-center">
          <nav className="hidden md:flex flex-1 items-center justify-between max-w-[700px] min-w-[400px]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`text-[16px] lg:text-[20px] font-semibold whitespace-nowrap bg-transparent border-none cursor-pointer transition-colors ${
                  showWhiteBg ? "text-black" : "text-white"
                } ${activeSection === item.target ? "text-brand-gold" : ""} hover:text-brand-gold`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <button
          className={`md:hidden bg-transparent border-none cursor-pointer ${showWhiteBg ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <Menu size={28} />
        </button>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={(target) => {
          if (onNavigate) onNavigate(target);
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
}
