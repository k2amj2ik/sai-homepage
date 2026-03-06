import { PARTNERSHIP } from "../../constants";
import SectionTitle from "../common/SectionTitle";

export default function Partnership() {
  return (
    <section id="partnership">
      {/* 파트1: B2B 섹션 (흰색 배경 통합) */}
      <div className="bg-white snap-start h-screen flex flex-col justify-start md:justify-center overflow-hidden pt-[56px] md:pt-[102px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* 골드 인트로 텍스트 */}
          <p className="text-[16px] md:text-[24px] font-semibold text-brand-gold text-center mb-6">
            {PARTNERSHIP.intro}
          </p>

          {/* 메인 타이틀 */}
          <SectionTitle lines={PARTNERSHIP.b2bTitle} />

          {/* B2B 카드 2x2 */}
          <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERSHIP.cards.map((card, i) => (
              <div
                key={i}
                className="border border-border-card bg-white px-6 py-8 md:py-10 text-center"
              >
                <h3 className="text-[20px] md:text-[34px] font-semibold mb-4 md:mb-6">
                  {card.title}
                </h3>
                <p className="text-[14px] md:text-[18px] text-text-secondary leading-[28px] whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 파트2: CTA (갤러리 배경 + 흰 카드 오버레이 + 골드 버튼) */}
      <div
        className="relative w-full flex items-center justify-center snap-start h-screen"
        style={{
          backgroundImage: `url(${PARTNERSHIP.cta.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 흰색 카드 오버레이 (액자 프레임 느낌) */}
        <div className="relative z-10 bg-white/95 mx-6 px-10 py-16 md:px-20 md:py-20 max-w-[800px] w-full text-center shadow-lg">
          <p className="text-[24px] md:text-[36px] lg:text-[40px] font-semibold text-black mb-8 md:mb-10">
            {PARTNERSHIP.cta.text}
          </p>

          <a
            href={PARTNERSHIP.cta.buttonHref}
            className="inline-flex items-center justify-center px-16 py-4 bg-brand-gold text-white text-[18px] md:text-[24px] leading-[38px] transition-colors hover:bg-[#8a7642] cursor-pointer"
          >
            {PARTNERSHIP.cta.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
