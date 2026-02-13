import { useState, useEffect } from "react";

export function FinalSection() {
  const [showContent, setShowContent] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    left: number;
    color: string;
    size: number;
    duration: number;
    delay: number;
  }>>([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowHeart(true), 1000);
  }, []);

  const handleHeartClick = () => {
    setClickCount((c) => c + 1);

    // Burst confetti
    const colors = ["#f43f5e", "#ec4899", "#fb7185", "#fbbf24", "#a78bfa", "#34d399", "#f472b6", "#ff6b9d"];
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 0.5,
    }));
    setConfetti((prev) => [...prev, ...newConfetti]);

    // Clean up old confetti
    setTimeout(() => {
      setConfetti((prev) => prev.filter((c) => !newConfetti.includes(c)));
    }, 4000);
  };

  const messages = [
    "I love you! 💕",
    "You mean everything to me! 🌹",
    "You're my favorite person! 🥰",
    "My heart is yours forever! 💝",
    "You're absolutely perfect! ✨",
    "I'm so lucky to have you! 🍀",
    "You + Me = Forever 💞",
    "You make my heart sing! 🎶",
    "I love you more each day! 💗",
    "You're my whole universe! 🌌",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4 py-16">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${c.left}%`,
            top: "-20px",
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animation: `confetti-fall ${c.duration}s ease-in ${c.delay}s forwards`,
          }}
        />
      ))}

      <div className="max-w-2xl w-full text-center">
        <div
          className={`transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Happy Valentine's Day
          </h2>
          <p className="text-2xl md:text-3xl text-gradient font-bold mb-2">
            My Love
          </p>
          <p className="text-rose-300/70 text-lg mt-4 mb-12">
            Today, tomorrow, and every day after — you are my everything.
          </p>
        </div>

        {/* Interactive heart */}
        <div
          className={`transition-all duration-1000 ${
            showHeart ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <button
            onClick={handleHeartClick}
            className="group relative cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-90"
          >
            <div className="animate-heartbeat heart-shadow">
              <svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                className="text-rose-500 group-hover:text-rose-400 transition-colors"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Click counter */}
            {clickCount > 0 && (
              <div className="absolute -top-4 -right-4 bg-rose-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg animate-scale-in">
                {clickCount}
              </div>
            )}
          </button>

          <p className="text-rose-300/50 text-sm mt-6 animate-float">
            Tap the heart! 💕
          </p>

          {/* Dynamic message based on clicks */}
          {clickCount > 0 && (
            <div className="mt-6 animate-scale-in">
              <p className="text-white text-xl md:text-2xl font-medium glass rounded-2xl px-8 py-4 inline-block">
                {messages[(clickCount - 1) % messages.length]}
              </p>
            </div>
          )}
        </div>

        {/* Forever counter */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <p className="text-rose-300/70 text-sm uppercase tracking-widest mb-2">
              My love for you
            </p>
            <p className="text-white text-4xl md:text-5xl font-bold">
              ∞
            </p>
            <p className="text-rose-300 text-lg mt-2">
              Infinite & Beyond
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-rose-400/40 text-sm">
            Made with all my love, just for you 💕
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {["💕", "💖", "💗", "💝", "💘"].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
