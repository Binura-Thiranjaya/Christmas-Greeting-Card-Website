import { Sparkles } from "lucide-react";

interface ChristmasCardProps {
  name: string;
  message: string;
}

const ChristmasCard = ({ name, message }: ChristmasCardProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto px-4">
      {/* Decorative elements */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <Sparkles className="w-8 h-8 text-primary animate-twinkle" />
      </div>

      {/* Main card */}
      <div className="card-festive rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-8">
          {/* Greeting header */}
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-muted-foreground text-lg tracking-widest uppercase">
              Merry Christmas
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold font-semibold">
              {name}
            </h1>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary/50 to-primary/50" />
          </div>

          {/* Message */}
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            {message}
          </p>

          {/* Footer */}
          <div className="pt-6 animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
            <div className="flex items-center justify-center gap-2 text-primary/80">
              <span className="text-2xl">❄</span>
              <span className="font-display text-lg tracking-wide">2024</span>
              <span className="text-2xl">❄</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/60 animate-twinkle"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChristmasCard;
