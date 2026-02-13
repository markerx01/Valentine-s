import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
      <div className="animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
        <p className="text-rose-200 text-lg md:text-xl mb-8 tracking-wide font-light">
          You have a special message...
        </p>
      </div>

      <button
        onClick={handleClick}
        disabled={isOpening}
        className="group relative cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
      >
        {/* Envelope body */}
        <div
          className={`relative w-72 h-48 md:w-96 md:h-64 rounded-lg transition-all duration-500 ${
            isOpening ? "bg-rose-300" : "bg-gradient-to-b from-rose-400 to-rose-500"
          } shadow-2xl animate-pulse-glow`}
        >
          {/* Envelope flap */}
          <div
            className="absolute top-0 left-0 w-full origin-top"
            style={{
              animation: isOpening ? "slideOpen 1s ease-in-out forwards" : "none",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="w-0 h-0 mx-auto"
              style={{
                borderLeft: "144px solid transparent",
                borderRight: "144px solid transparent",
                borderTop: "96px solid #fb7185",
              }}
            />
          </div>

          {/* Bottom triangle */}
          <div className="absolute bottom-0 left-0 w-full">
            <div
              className="w-0 h-0 mx-auto"
              style={{
                borderLeft: "144px solid transparent",
                borderRight: "144px solid transparent",
                borderBottom: "80px solid #e11d48",
              }}
            />
          </div>

          {/* Letter inside */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-md shadow-inner flex items-center justify-center"
            style={{
              height: "80%",
              bottom: "10%",
              animation: isOpening ? "letterRise 1s ease-out 0.5s forwards" : "none",
            }}
          >
            <div className="text-center p-4">
              <span className="text-4xl md:text-5xl">💌</span>
              <p className="text-rose-500 text-sm md:text-base mt-2 font-medium">Open Me!</p>
            </div>
          </div>

          {/* Heart seal */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-500 ${
              isOpening ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="animate-heartbeat">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff" className="drop-shadow-lg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <div className="animate-fade-in-up mt-8" style={{ animationDelay: "0.8s", opacity: 0 }}>
        <p className="text-rose-300/60 text-sm animate-float">
          ✨ Click the envelope ✨
        </p>
      </div>
    </div>
  );
}
