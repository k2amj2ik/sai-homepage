import { ROADMAP } from "../../constants";
import SectionTitle from "../common/SectionTitle";

const BASE = import.meta.env.BASE_URL;

export default function Roadmap() {
  return (
    <section className="bg-sai-light snap-start h-screen flex flex-col justify-start md:justify-center overflow-hidden pt-[56px] md:pt-[102px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTitle lines={ROADMAP.title} />

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROADMAP.items.map((item) => (
            <div
              key={item.phase}
              className="bg-white flex flex-col items-center gap-12 px-8 py-16 text-center"
            >
              {/* 단계 라벨 + 타이틀 */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-text-inactive">
                  {item.phase}단계
                </span>
                <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-tight whitespace-pre-line min-h-[68px] md:min-h-[90px] flex items-center">
                  {item.title}
                </h3>
              </div>

              {/* 아이콘 */}
              <div className="h-[66px] flex items-center justify-center gap-2">
                {item.phase === 1 ? (
                  <>
                    {/* AI 칩 아이콘 (외곽 + 내부 AI 텍스트) */}
                    <div className="relative w-[66px] h-[66px]">
                      <img
                        src={`${BASE}images/icons/roadmap-step1-a.svg`}
                        alt=""
                        className="absolute inset-0 w-full h-full"
                      />
                      <img
                        src={`${BASE}images/icons/step1-ai-text.svg`}
                        alt=""
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[23px]"
                      />
                    </div>
                    {/* + 기호 */}
                    <span className="text-[19px] text-black leading-none">+</span>
                    {/* 사람 아이콘 */}
                    <img
                      src={`${BASE}images/icons/step1-person.svg`}
                      alt="1단계"
                      className="h-[66px] w-[66px]"
                    />
                  </>
                ) : (
                  <img
                    src={`${BASE}images/icons/roadmap-step${item.phase}.svg`}
                    alt={`${item.phase}단계`}
                    className="h-[66px] w-auto"
                  />
                )}
              </div>

              {/* 설명 */}
              <p className="text-[14px] md:text-[18px] text-text-secondary leading-[28px] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
