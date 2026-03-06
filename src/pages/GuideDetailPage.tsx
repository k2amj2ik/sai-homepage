import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { GUIDE_ITEMS } from "../constants";
import type { GuideSubStep } from "../types";

export default function GuideDetailPage() {
  const { guideId } = useParams<{ guideId: string }>();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const guide = GUIDE_ITEMS.find((g) => g.id === guideId);

  if (!guide) {
    return (
      <>
        <Header isSubPage />
        <main className="pt-[102px] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[24px] font-semibold mb-4">
              가이드를 찾을 수 없습니다
            </h1>
            <button
              onClick={() => navigate("/guide/art-search")}
              className="text-brand-gold hover:underline text-[16px] bg-transparent border-none cursor-pointer"
            >
              이용 가이드로 돌아가기
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header isSubPage />
      <main className="pt-[102px]">
        {/* 상단 타이틀 + 서브 메뉴 */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            {/* 브랜딩 텍스트 */}
            <div className="pt-6 lg:pt-8 pb-8 lg:pb-16">
              <p className="text-black text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.1]">
                SeoulAuction
              </p>
              <p className="text-black text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.1]">
                Intelligence
              </p>
            </div>

            {/* 서브 메뉴 - PC: 가로 탭 */}
            <div className="hidden md:flex items-center max-w-[800px]">
              {GUIDE_ITEMS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => navigate(`/guide/${g.id}`)}
                  className={`flex-1 px-4 py-3 text-[16px] lg:text-[18px] font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    g.id === guideId
                      ? "bg-black text-white border-none"
                      : "bg-transparent text-black border border-[#a9a9a9] border-l-0"
                  } ${g.id === GUIDE_ITEMS[0].id && g.id !== guideId ? "border-l border-[#a9a9a9]" : ""}`}
                >
                  {g.category}
                </button>
              ))}
            </div>

            {/* 서브 메뉴 - 모바일: 드롭다운 */}
            <div className="md:hidden relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full h-[50px] border border-[#a9a9a9] flex items-center justify-between px-4 bg-black cursor-pointer"
              >
                <span className="text-[16px] font-semibold text-white">
                  {guide.category}
                </span>
                {dropdownOpen ? (
                  <ChevronUp size={24} className="text-white/70" />
                ) : (
                  <ChevronDown size={24} className="text-white/70" />
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute top-[50px] left-0 w-full bg-white border border-[#a9a9a9] border-t-0 z-10">
                  {GUIDE_ITEMS.filter((g) => g.id !== guideId).map((g) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        navigate(`/guide/${g.id}`);
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-[16px] font-semibold text-black hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                    >
                      {g.category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 가이드 타이틀 + 배너 이미지 */}
        <section className="bg-white py-8">
          <div className="flex flex-col items-center gap-4 lg:gap-6 mb-8">
            <p className="text-brand-gold text-[18px] lg:text-[24px] font-semibold">
              SAI 이용 가이드
            </p>
            <h1 className="text-black text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.3]">
              {guide.title}
            </h1>
          </div>

          {/* 배너 이미지 */}
          {guide.heroImage && (
            <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
              <img
                src={guide.heroImage}
                alt={guide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </section>

        {/* 단계별 섹션 */}
        {guide.steps.map((step) => (
          <section key={step.step} className="bg-white py-8 lg:py-12">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-16">
              {/* 단계 타이틀 */}
              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-10 lg:mb-16">
                <span className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-brand-gold whitespace-nowrap">
                  {step.step}단계
                </span>
                <span className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-black">
                  {step.title}
                </span>
              </div>

              {/* 카드 레이아웃: 좌측 01+02 쌓기, 우측 03 파란배경 */}
              {step.subSteps && step.subSteps.length > 0 && (
                <StepCards subSteps={step.subSteps} stepNum={step.step} />
              )}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

/** 단계별 카드 레이아웃 컴포넌트 */
function StepCards({ subSteps, stepNum }: { subSteps: GuideSubStep[]; stepNum: number }) {
  // 카드가 3개인 경우: 좌측(01,02 스택) + 우측(03 파란배경)
  // 카드가 2개 이하인 경우: 단순 나열
  if (subSteps.length >= 3) {
    const leftCards = subSteps.slice(0, -1);
    const rightCard = subSteps[subSteps.length - 1];

    return (
      <div className="flex flex-wrap gap-6 lg:gap-8 items-start justify-center">
        {/* 좌측 컬럼: 회색 카드 스택 */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 min-w-[300px] lg:min-w-[432px] max-w-[560px]">
          {leftCards.map((sub, idx) => (
            <GuideCard
              key={idx}
              sub={sub}
              stepNum={stepNum}
              variant="gray"
            />
          ))}
        </div>
        {/* 우측 컬럼: 파란 카드 */}
        <div className="flex-1 min-w-[300px] lg:min-w-[432px] max-w-[560px]">
          <GuideCard
            sub={rightCard}
            stepNum={stepNum}
            variant="blue"
          />
        </div>
      </div>
    );
  }

  // 카드가 2개 이하: 2열 그리드
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1152px] mx-auto">
      {subSteps.map((sub, idx) => (
        <GuideCard
          key={idx}
          sub={sub}
          stepNum={stepNum}
          variant={idx === subSteps.length - 1 ? "blue" : "gray"}
        />
      ))}
    </div>
  );
}

/** 개별 카드 컴포넌트 */
function GuideCard({
  sub,
  stepNum,
  variant,
}: {
  sub: GuideSubStep;
  stepNum: number;
  variant: "gray" | "blue";
}) {
  const bgClass = variant === "blue" ? "bg-sai-guide-blue" : "bg-sai-light";

  return (
    <div className={`${bgClass} rounded-[20px] lg:rounded-[24px] p-6 md:p-8 lg:p-12 flex flex-col gap-8 lg:gap-12`}>
      {/* 번호 + 설명 */}
      <div className="flex gap-4 lg:gap-6 items-center">
        <span className="text-[32px] lg:text-[48px] font-semibold text-[#a1a1a1] shrink-0 leading-none">
          {sub.number}
        </span>
        <p className="text-[16px] lg:text-[24px] font-medium text-black leading-[1.5]">
          {sub.description}
        </p>
      </div>

      {/* 이미지 */}
      {sub.images && sub.images.length > 0 && (
        <div className="flex flex-col gap-6 lg:gap-8 px-2 lg:px-8">
          {sub.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Step ${stepNum}-${sub.number} image ${i + 1}`}
              className="w-full h-auto rounded-lg"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ))}
        </div>
      )}
      {!sub.images && sub.image && (
        <div className="flex justify-center overflow-hidden px-2 lg:px-8">
          <img
            src={sub.image}
            alt={`Step ${stepNum}-${sub.number}`}
            className="w-full max-w-[332px] h-auto rounded-lg"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}
    </div>
  );
}
