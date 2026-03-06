import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { FAQ_CONTACT, FAQ_KEYWORDS, FAQ_ITEMS } from "../constants";

export default function FaqPage() {
  const [activeKeyword, setActiveKeyword] = useState("전체");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeKeyword === "전체"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.keywords.includes(activeKeyword));

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header isSubPage />
      <main className="pt-[102px]">
        {/* 상단 타이틀 + 문의 안내 */}
        <section className="bg-white py-8 lg:py-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.2] lg:leading-[64px] mb-4 lg:mb-6">
              고객지원
            </h1>
            <p className="text-[14px] md:text-[16px] text-black leading-[24px] mb-4 lg:mb-6">
              문의 사항은 이메일 또는 고객센터로 연락주세요.
            </p>

            {/* 문의 안내 텍스트 */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[14px] md:text-[16px]">
              <span className="shrink-0 text-black">고객센터</span>
              <div className="flex flex-col gap-1">
                <p className="text-black">
                  {FAQ_CONTACT.phone} ({FAQ_CONTACT.hours})
                </p>
                <a
                  href={`mailto:${FAQ_CONTACT.email}`}
                  className="text-black hover:text-brand-gold transition-colors"
                >
                  {FAQ_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 키워드 탭 + FAQ 목록 */}
        <section className="bg-white pb-12 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            {/* 키워드 탭 */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-8 lg:mb-10 py-4 lg:py-8">
              {FAQ_KEYWORDS.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => {
                    setActiveKeyword(keyword);
                    setOpenIndex(null);
                  }}
                  className={`px-4 lg:px-8 py-2 lg:py-6 text-[16px] lg:text-[20px] border cursor-pointer transition-colors ${
                    activeKeyword === keyword
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-border-card hover:border-black"
                  }`}
                >
                  #{keyword}
                </button>
              ))}
            </div>

            {/* TOTAL 카운트 + 구분선 */}
            <div className="py-4">
              <div className="flex items-center gap-2 text-[14px] lg:text-[16px]">
                <span className="text-black">TOTAL</span>
                <span className="text-brand-gold font-medium">{filtered.length}</span>
              </div>
            </div>

            {/* 구분선 */}
            <div className="border-t border-black" />

            {/* FAQ 아코디언 */}
            <div>
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-border-card"
                >
                  {/* 질문 */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-4 py-6 lg:py-8 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-black leading-[1.4]">
                      {item.question}
                    </span>
                    <div className="flex items-center gap-4 shrink-0 ml-4">
                      {item.date && (
                        <span className="hidden md:inline text-[14px] text-text-tertiary whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                      <ChevronDown
                        size={20}
                        className={`text-text-tertiary transition-transform duration-300 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* 답변 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-6 lg:pb-8">
                      <p className="text-[14px] text-black leading-[24px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-[16px] text-text-tertiary">
                    해당 키워드에 대한 질문이 없습니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
