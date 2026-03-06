import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import CoreValues from "../components/home/CoreValues";
import Roadmap from "../components/home/Roadmap";
import Features from "../components/home/Features";
import Partnership from "../components/home/Partnership";

const SECTION_IDS = ["hero", "core-values", "features", "partnership"];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();

  // URL hash가 있으면 해당 섹션으로 스크롤
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveSection(sorted[0].target.id);
        }
      },
      { rootMargin: "-102px 0px -50% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="h-screen overflow-y-auto snap-y snap-mandatory">
        <Hero />
        <CoreValues />
        <Roadmap />
        <Features />
        <Partnership />
        <Footer />
      </main>
    </>
  );
}
