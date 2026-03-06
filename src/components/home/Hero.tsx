import { useState, useEffect, useCallback, useRef } from "react";
import { HERO_SLIDES } from "../../constants";

const SLIDE_INTERVAL = 3000; // 3초 자동 전환

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // 자동 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // 슬라이드 전환 시 해당 동영상 재생 (1회)
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-between overflow-hidden snap-start"
    >
      {/* 배경 레이어 (이미지 + 동영상) */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* 정적 배경 이미지 (fallback / 포스터) */}
          <img
            src={s.backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 배경 동영상 (파일이 있으면 이미지 위에 재생) */}
          {s.backgroundVideo && (
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={s.backgroundVideo}
              muted
              playsInline
              preload="auto"
              poster={s.backgroundImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: s.overlayColor || "rgba(0,0,0,0.4)",
            }}
          />
        </div>
      ))}

      {/* 상단 여백 (헤더 공간) */}
      <div className="shrink-0 h-[102px] w-full" />

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-16">
        {/* 서브 텍스트 */}
        <div className="mb-6">
          {slide.label.map((line, i) => (
            <p
              key={i}
              className="text-[16px] md:text-[20px] lg:text-[28px] font-semibold leading-normal"
            >
              {line}
            </p>
          ))}
        </div>

        {/* 메인 타이틀 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4">
          {slide.title.map((line, i) => (
            <h1
              key={i}
              className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-[44px] md:leading-[1.1] lg:leading-[64px]"
            >
              {line}
            </h1>
          ))}
        </div>
      </div>

      {/* 페이지네이션 dots */}
      <div className="relative z-10 flex items-center justify-center gap-2 py-8 shrink-0">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`relative cursor-pointer border-none bg-transparent flex items-center justify-center transition-all duration-300 ${
              i === current ? "w-[56px] h-[24px]" : "w-[24px] h-[24px]"
            }`}
          >
            <span
              className={`block transition-all duration-300 ${
                i === current
                  ? "w-[48px] h-[16px] rounded-[8px] bg-white"
                  : "w-[16px] h-[16px] rounded-full bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
