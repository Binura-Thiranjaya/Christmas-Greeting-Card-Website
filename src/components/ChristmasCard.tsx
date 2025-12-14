import { Sparkles } from "lucide-react";

interface ChristmasCardProps {
  name: string;
  message: string;
}

const ChristmasCard = ({ name, message }: ChristmasCardProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto px-4">
      {/* Decorative holly */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-float" style={{ animationDuration: "4s" }}>
        🎄
      </div>

      {/* Main card */}
      <div className="card-glass rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 text-2xl opacity-60">❄️</div>
        <div className="absolute top-4 right-4 text-2xl opacity-60">❄️</div>
        <div className="absolute bottom-4 left-4 text-2xl opacity-60">🌟</div>
        <div className="absolute bottom-4 right-4 text-2xl opacity-60">🌟</div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-6">
          {/* Greeting header */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-secondary font-medium text-sm tracking-[0.3em] uppercase">
              ✨ Merry Christmas ✨
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-festive font-bold">
              {name}
            </h1>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-xl">🎅</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          {/* Message */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            {message}
          </p>

          {/* Footer decorations */}
          <div className="pt-4 flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
            <span className="text-2xl">🎁</span>
            <span className="font-display text-lg text-primary font-medium">2024</span>
            <span className="text-2xl">🎄</span>
          </div>
        </div>
      </div>

      {/* Bottom sparkles */}
      <div className="flex justify-center mt-6 gap-3">
        {["❄️", "⭐", "❄️", "⭐", "❄️"].map((emoji, i) => (
          <span
            key={i}
            className="text-lg animate-twinkle"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChristmasCard;
