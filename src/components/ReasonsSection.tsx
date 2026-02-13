import { useState, useEffect, useRef } from "react";

interface ReasonsSectionProps {
  onContinue: () => void;
}

const reasons = [
  { emoji: "😊", text: "Your beautiful smile that lights up my entire world" },
  { emoji: "😂", text: "The way you laugh — it's my favorite sound" },
  { emoji: "🤗", text: "Your warm hugs that make everything feel okay" },
  { emoji: "💪", text: "How strong and brave you are, even on tough days" },
  { emoji: "🧠", text: "Your brilliant mind that never stops amazing me" },
  { emoji: "💖", text: "The kindness you show to everyone around you" },
  { emoji: "🌟", text: "How you make ordinary moments feel extraordinary" },
  { emoji: "🎵", text: "The little songs you hum when you think no one's listening" },
  { emoji: "👀", text: "The way your eyes sparkle when you're excited" },
  { emoji: "🫂", text: "How safe and loved you make me feel every single day" },
];

export function ReasonsSection({ onContinue }: ReasonsSectionProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(reasons.length).fill(false));
  const [showButton, setShowButton] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reasons.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 300 * (i + 1));
    });
    setTimeout(() => setShowButton(true), 300 * (reasons.length + 2));
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen relative z-10 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            10 Reasons I Love You
          </h2>
          <p className="text-rose-300/70 text-lg">
            (There are millions more, but here's a start...)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 transition-all duration-700 hover:scale-[1.03] hover:bg-white/20 ${
                visibleCards[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 mt-1">{reason.emoji}</span>
                <div>
                  <span className="text-rose-300 font-bold text-sm">#{i + 1}</span>
                  <p className="text-white/90 text-lg mt-1">{reason.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={onContinue}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            One last surprise... ✨
          </button>
        </div>
      </div>
    </div>
  );
}
