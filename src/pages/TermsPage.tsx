import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const TERMS_VERSIONS = [
  { label: "개정일 : 2026-01-06", value: "2026-01-06" },
  { label: "시행일 : 2026-01-01", value: "2026-01-01" },
];

const TERMS_CONTENT = [
  {
    title: "제1조 (목적)",
    content: `본 이용약관(이하 "약관")은 주식회사 서울옥션블루(이하 "회사")가 운영, 제공하는 SAI(Seoul Auction Intelligence) 서비스(이하 "서비스")와 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.`,
  },
  {
    title: "제2조 (용어의 정의)",
    content: `1. 서비스: 회사가 모바일 및 PC 환경에서 제공하는 AI 미술품 시세 분석, 아트 정보 검색, 1:1 미술 전문 컨설팅 및 관련 제반 서비스를 말합니다.
2. 회원: 서비스에 접속하여 이 약관에 동의함으로써 회사와 이용계약을 체결하고, 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
3. 파트너사: 회사와 제휴를 맺고 자사 서비스 내에 SAI 기능을 연동하여 제공하는 법인 또는 단체를 말합니다.
4. AI 시세 분석: 회사가 보유한 미술 시장 데이터를 기반으로 AI 알고리즘이 도출한 미술품의 추정 가격 정보를 말합니다.
5. 1:1 미술 컨설팅: 회원이 신청한 특정 작품의 관리, 판매, 구매 등을 위해 전문 컨설턴트가 제공하는 맞춤형 상담 서비스를 말합니다.`,
  },
  {
    title: "제3조 (약관의 명시와 개정)",
    content: `(원문 제3조 준용: 회사는 약관 개정 시 적용일 7일 전 공지하며, 회원에게 불리한 변경은 30일 전 공지 및 개별 통지합니다.)`,
  },
  {
    title: "제5조 (서비스 이용계약의 체결 및 회원 연동)",
    content: `1. 이용계약은 가입신청자가 약관에 동의하고 회원가입 신청을 하여 회사가 이를 승낙함으로써 체결됩니다.
2. 회원 연동: 파트너사 앱/웹을 통해 진입한 회원은 최초 1회 회원 연동 동의를 거쳐 별도의 추가 가입 없이 자동 로그인 방식으로 서비스를 이용할 수 있습니다.
3. 회사는 만 19세 미만의 자가 신청하거나 타인의 명의를 도용한 경우 승낙을 거절하거나 이용계약을 해지할 수 있습니다.`,
  },
  {
    title: "제7조 (회원 정보의 관리)",
    content: `1. 회원은 계정 접근 정보를 안전하게 관리할 책임이 있으며, 분실 또는 도용 인지 시 즉시 회사에 통지해야 합니다.
2. 회원의 계정 접근정보가 분실, 도용 혹은 공개되어 회원에게 발생한 손해에 대하여 회사는 책임을 부담하지 아니합니다. 다만, 회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.`,
  },
  {
    title: "제8조 (개인정보 보호 등)",
    content: `1. 회사는 관련 법령에 따라 회원의 개인정보를 보호하며, 민감정보는 암호화하여 별도 DB에 안전하게 저장·관리합니다.
2. 회원은 언제든지 자신의 개인정보에 대한 열람 및 정정을 요구하거나 동의를 철회할 수 있습니다.`,
  },
];

export default function TermsPage() {
  const [selectedVersion, setSelectedVersion] = useState(TERMS_VERSIONS[0].value);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentVersion = TERMS_VERSIONS.find((v) => v.value === selectedVersion) || TERMS_VERSIONS[0];

  return (
    <>
      <Header isSubPage />
      <main className="pt-[102px]">
        <section className="bg-white py-8 lg:py-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            {/* 타이틀 */}
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.2] lg:leading-[64px] mb-8 lg:mb-12">
              서비스 이용약관
            </h1>

            {/* 개정일 드롭다운 */}
            <div className="relative inline-block mb-8 lg:mb-12">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-5 py-3 border border-border-card bg-white cursor-pointer min-w-[200px]"
              >
                <span className="text-[14px] md:text-[16px] text-black">
                  {currentVersion.label}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-text-tertiary transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-border-card border-t-0 z-10">
                  {TERMS_VERSIONS.map((v) => (
                    <button
                      key={v.value}
                      onClick={() => {
                        setSelectedVersion(v.value);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-5 py-3 text-[14px] md:text-[16px] hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer ${
                        v.value === selectedVersion ? "text-black font-medium" : "text-text-secondary"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 구분선 */}
            <div className="border-t border-border-card mb-8 lg:mb-10" />

            {/* 약관 본문 */}
            <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-12">
              {TERMS_CONTENT.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[16px] md:text-[18px] font-bold text-black mb-3 leading-[1.6]">
                    {section.title}
                  </h2>
                  <p className="text-[14px] md:text-[16px] text-black leading-[28px] whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
