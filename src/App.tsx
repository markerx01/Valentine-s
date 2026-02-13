import { useState } from "react";
import { FloatingHearts } from "./components/FloatingHearts";
import { Sparkles } from "./components/Sparkles";
import { Envelope } from "./components/Envelope";
import { LoveLetter } from "./components/LoveLetter";
import { ReasonsSection } from "./components/ReasonsSection";
import { FinalSection } from "./components/FinalSection";

type Stage = "envelope" | "letter" | "reasons" | "final";

export function App() {
  const [stage, setStage] = useState<Stage>("envelope");
  const [transitioning, setTransitioning] = useState(false);

  const transitionTo = (next: Stage) => {
    setTransitioning(true);
    setTimeout(() => {
      setStage(next);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a10] via-[#2d0a1e] to-[#0f0618] relative overflow-hidden" style={{ fontFamily: "'Heebo', sans-serif" }} dir="rtl">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-3xl" />
      </div>

      <FloatingHearts />
      <Sparkles />

      {/* Main content with transition */}
      <div
        className={`transition-all duration-600 ${
          transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {stage === "envelope" && (
          <Envelope onOpen={() => transitionTo("letter")} />
        )}
        {stage === "letter" && (
          <LoveLetter onContinue={() => transitionTo("reasons")} />
        )}
        {stage === "reasons" && (
          <ReasonsSection onContinue={() => transitionTo("final")} />
        )}
        {stage === "final" && <FinalSection />}
      </div>

      {/* Music note decoration */}
      <div className="fixed bottom-4 right-4 z-50 text-rose-400/30 text-2xl animate-float">
        🎵
      </div>
    </div>
  );
}
