import { Link } from "react-router-dom";
import { FEATURES } from "../../constants";
import type { FeatureItem } from "../../types";

function FeatureSection({
  item,
  index,
  total,
}: {
  item: FeatureItem;
  index: number;
  total: number;
}) {
  // 기능4: sai-warm 배경 + 검정 텍스트 상단 + 이미지 하단 (overflow-clip)
  if (item.layout === "center") {
    return (
      <div className="bg-sai-warm w-full overflow-hidden snap-start h-screen flex flex-col pt-[56px] md:pt-[102px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex-1 flex flex-col justify-center text-center">
          <p className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-black mb-6">
            {item.category}
          </p>
          <h3 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.1] lg:leading-[64px] whitespace-pre-line text-black">
            {item.title}
          </h3>
          <p className="mt-8 text-[14px] md:text-[16px] lg:text-[18px] leading-[28px] whitespace-pre-line text-text-secondary max-w-[600px] mx-auto">
            {item.description}
          </p>
        </div>
        <div className="w-full h-[35vh] md:h-[40vh] shrink-0 mt-4 lg:mt-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.category}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // 기능1~3: 좌우 교차 레이아웃
  const isLeft = item.layout === "left";

  return (
    <div className="bg-white snap-start h-screen flex flex-col justify-start md:justify-center overflow-hidden pt-[56px] md:pt-[102px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div
          className={`flex flex-col ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-8 lg:gap-[32px]`}
        >
          {/* 텍스트 */}
          <div className="flex-1 w-full lg:max-w-[480px] text-center lg:text-left">
            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-black mb-6">
              {item.category}
            </p>
            <h3 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.1] lg:leading-[64px] whitespace-pre-line mb-8">
              {item.title}
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-text-secondary leading-[28px] whitespace-pre-line mb-8">
              {item.description}
            </p>
            {/* 자세히 보기 버튼 */}
            {item.guideHref && (
              <Link
                to={item.guideHref}
                className="inline-flex items-center justify-center px-12 py-2 border border-black text-[18px] leading-[38px] text-black bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                자세히 보기
              </Link>
            )}
          </div>

          {/* 폰 목업 이미지 + 페이지 네비게이션 */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div className="flex items-center justify-center h-[500px] md:h-[622px]">
              <img
                src={item.image}
                alt={item.category}
                className="max-w-[260px] md:max-w-[300px] lg:max-w-[332px] w-full h-auto drop-shadow-xl"
                loading="lazy"
              />
            </div>
            {/* 페이지 네비게이션 */}
            <div className="flex items-center justify-center gap-8 py-4">
              <button
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors cursor-pointer"
                aria-label="이전"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="text-[18px] leading-[28px]">
                <span className="text-black font-medium">{index + 1}</span>
                <span className="text-[#7e7e7e]"> / {total}</span>
              </span>
              <button
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors cursor-pointer"
                aria-label="다음"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const leftRightFeatures = FEATURES.filter((f) => f.layout !== "center");

  return (
    <section id="features">
      {FEATURES.map((item) => {
        const lrIndex = leftRightFeatures.indexOf(item);
        return (
          <FeatureSection
            key={item.id}
            item={item}
            index={lrIndex >= 0 ? lrIndex : 0}
            total={leftRightFeatures.length}
          />
        );
      })}
    </section>
  );
}
