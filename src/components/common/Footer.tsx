import { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, FOOTER_LINKS, FAMILY_SITES } from "../../constants";

const BASE = import.meta.env.BASE_URL;

export default function Footer() {
  const [familyOpen, setFamilyOpen] = useState(false);

  return (
    <footer className="bg-sai-light snap-start">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-8">
        {/* 상단: 로고 + FAMILY SITE */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-[72px]">
          {/* SAB 로고 */}
          <img
            src={`${BASE}images/logo/sab-footer-logo.svg`}
            alt="Seoul Auction blue"
            className="h-[60px] md:h-[91px] md:w-[240px] w-auto object-contain"
          />

          {/* FAMILY SITE 드롭다운 */}
          <div className="relative w-full md:w-[320px]">
            <button
              onClick={() => setFamilyOpen(!familyOpen)}
              className="w-full h-[50px] border border-text-footer flex items-center justify-between px-5 bg-transparent cursor-pointer"
            >
              <span className="text-[16px] font-[500] text-[#303030]">
                FAMILY SITE
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform ${familyOpen ? "rotate-45" : ""}`}
              >
                <line x1="12" y1="5" x2="12" y2="19" stroke="#8c8c8c" strokeWidth="1.5" />
                <line x1="5" y1="12" x2="19" y2="12" stroke="#8c8c8c" strokeWidth="1.5" />
              </svg>
            </button>
            {familyOpen && (
              <div className="absolute top-[50px] left-0 w-full bg-white border border-text-footer border-t-0 z-10">
                {FAMILY_SITES.map((site, i) => (
                  <a
                    key={i}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-[14px] text-[#303030] hover:bg-gray-50 transition-colors"
                  >
                    {site.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 중단: 회사 정보 + CONTACT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[96px] text-[14px] text-text-tertiary leading-[24px] mb-8">
          {/* 회사 정보 */}
          <div className="space-y-0">
            <p>상호 : {COMPANY_INFO.name}</p>
            <p>대표이사 : {COMPANY_INFO.ceo}</p>
            <p>사업자등록번호 : {COMPANY_INFO.businessNumber}</p>
            <p>통신판매업신고 : {COMPANY_INFO.salesNumber}</p>
          </div>

          {/* CONTACT */}
          <div className="space-y-0">
            <p className="font-bold uppercase">CONTACT</p>
            <p>{COMPANY_INFO.phone}</p>
            <p>{COMPANY_INFO.address}</p>
          </div>
        </div>
      </div>

      {/* 하단 구분선 + Copyright + 링크 */}
      <div className="border-t border-[#303030]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-8 min-h-[89px] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[14px] text-text-tertiary">
            {COMPANY_INFO.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[13px]">
            {FOOTER_LINKS.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="text-text-tertiary hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
