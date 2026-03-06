import { CORE_VALUES } from "../../constants";
import SectionTitle from "../common/SectionTitle";

export default function CoreValues() {
  return (
    <section id="core-values" className="bg-white snap-start h-screen flex flex-col justify-start md:justify-center overflow-hidden pt-[56px] md:pt-[102px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTitle lines={CORE_VALUES.title} />

        {/* 모바일: 카드별 텍스트+이미지 묶음 */}
        <div className="mt-14 md:hidden flex flex-col gap-8">
          {CORE_VALUES.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="py-8">
                <h3 className="text-[24px] font-semibold mb-6">
                  {item.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-[28px] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
              <div className="w-full max-h-[250px] overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 태블릿/PC: 텍스트 카드 3열 */}
        <div className="mt-14 md:mt-20 hidden md:grid md:grid-cols-3 gap-8">
          {CORE_VALUES.items.map((item, i) => (
            <div key={i} className="text-center py-8">
              <h3 className="text-[28px] lg:text-[34px] font-semibold mb-6 md:mb-8">
                {item.title}
              </h3>
              <p className="text-[18px] text-text-secondary leading-[28px] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 태블릿/PC: 하단 사진 스트립 (전폭) */}
      <div className="hidden md:flex w-full mt-8 overflow-hidden">
        {CORE_VALUES.items.map((item, i) => (
          <div key={i} className="flex-1 max-h-[375px] overflow-hidden">
            <img
              src={item.photo}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
