import { useState, useEffect } from "react";

interface LoveLetterProps {
  onContinue: () => void;
}

export function LoveLetter({ onContinue }: LoveLetterProps) {
  const [showLines, setShowLines] = useState<boolean[]>([]);
  const [showButton, setShowButton] = useState(false);

  const lines = [
    "My Dearest Valentine,",
    "",
    "Every moment with you feels like a beautiful dream",
    "that I never want to wake up from.",
    "",
    "You are the reason my heart beats faster,",
    "the reason my smile grows wider,",
    "and the reason my world is so much brighter.",
    "",
    "Thank you for being you — perfectly,",
    "wonderfully, incredibly you.",
    "",
    "Happy Valentine's Day, my love. 💕",
  ];

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => {
        setShowLines((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 400 * (i + 1));
    });
    setTimeout(() => setShowButton(true), 400 * (lines.length + 2));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Letter paper */}
        <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative corner hearts */}
          <div className="absolute top-4 right-4 text-rose-200 text-2xl">♥</div>
          <div className="absolute bottom-4 left-4 text-rose-200 text-2xl">♥</div>

          {/* Decorative top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300" />

          <div className="space-y-1 font-serif">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`transition-all duration-700 ${
                  showLines[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${
                  i === 0
                    ? "text-2xl md:text-3xl text-rose-600 font-bold mb-4"
                    : line === ""
                    ? "h-4"
                    : "text-gray-700 text-lg md:text-xl leading-relaxed"
                } ${
                  i === lines.length - 1 ? "text-rose-500 font-semibold text-xl md:text-2xl mt-4" : ""
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Signature area */}
          <div
            className={`mt-8 text-right transition-all duration-700 ${
              showButton ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-rose-400 font-serif italic text-xl">
              Forever & Always Yours
            </p>
            <p className="text-3xl mt-2">💝</p>
          </div>
        </div>

        {/* Continue button */}
        <div
          className={`text-center mt-10 transition-all duration-700 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={onContinue}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            There's more... 💕
          </button>
        </div>
      </div>
    </div>
  );
}
