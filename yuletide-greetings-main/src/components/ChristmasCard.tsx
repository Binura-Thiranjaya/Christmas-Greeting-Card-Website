import { useState } from "react";
import { Gift, Sparkles, TreePine, Star, X } from "lucide-react";

interface ChristmasCardProps {
  name: string;
  message: string;
}

const ChristmasCard = ({ name, message }: ChristmasCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="w-full max-w-xs sm:max-w-sm mx-auto px-4" 
      style={{ perspective: "1500px" }}
    >
      {/* Card container with realistic proportions (5:7 ratio like real cards) */}
      <div
        onClick={toggleCard}
        className="relative cursor-pointer transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transformStyle: "preserve-3d",
          transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
          width: "100%",
          aspectRatio: "5 / 7",
        }}
      >
        {/* Front of card (closed) */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden border-2 border-gold/20"
          style={{
            backfaceVisibility: "hidden",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Card background with paper texture feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-crimson to-primary" />
          
          {/* Subtle paper texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Decorative embossed circles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-white/50 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 border-2 border-white/50 rounded-full" />
            <div className="absolute top-1/3 -right-10 w-20 h-20 border border-white/30 rounded-full" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
            {/* Top stars */}
            <div className="absolute top-4 flex gap-3">
              <Star className="w-3 h-3 text-gold animate-twinkle" style={{ animationDelay: "0s" }} />
              <Star className="w-4 h-4 text-gold animate-twinkle fill-gold/30" style={{ animationDelay: "0.5s" }} />
              <Star className="w-3 h-3 text-gold animate-twinkle" style={{ animationDelay: "1s" }} />
            </div>

            {/* Main gift icon with glow */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl animate-pulse-glow scale-150" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 flex items-center justify-center border-2 border-gold/40 shadow-lg">
                <Gift className="w-10 h-10 text-gold drop-shadow-lg" />
              </div>
            </div>

            {/* Title with embossed effect */}
            <h2 className="font-serif text-2xl sm:text-3xl text-primary-foreground mb-1 tracking-wide drop-shadow-md">
              Merry Christmas {name && ` ${name}`}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-3 h-3 text-forest" />
              <span className="text-primary-foreground/80 text-xs sm:text-sm">A Special Wish For You</span>
              <TreePine className="w-3 h-3 text-forest" />
            </div>

            {/* Click hint */}
            <div className="absolute bottom-5 flex flex-col items-center gap-1.5 animate-pulse">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-primary-foreground/70 text-xs font-medium tracking-wider uppercase">
                Tap to Open
              </span>
            </div>

            {/* Corner decorations - like real card embossing */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold/40 rounded-tl" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-gold/40 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-gold/40 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold/40 rounded-br" />
            
            {/* Edge highlight for 3D effect */}
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-white/10 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-white/10 to-transparent" />
          </div>
        </div>

        {/* Back of card (inside message) */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden border border-gold/10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Card interior - cream paper look */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#f5f0e8] to-[#faf8f5]" />
          
          {/* Paper texture */}
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Decorative border */}
          <div className="absolute inset-2 border border-crimson/15 rounded" />
          <div className="absolute inset-4 border border-gold/10 rounded-sm" />

          {/* Close button hint */}
          <button 
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-crimson/10 hover:bg-crimson/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X className="w-4 h-4 text-crimson/60" />
          </button>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
            {/* Top decoration */}
            <div className="absolute top-5 flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-crimson/30" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-crimson/30" />
            </div>

            {/* Message content */}
            <div
              className={`space-y-4 transition-all duration-700 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isOpen ? "0.5s" : "0s" }}
            >
              {name && (
                <p className="text-crimson/50 text-xs uppercase tracking-[0.2em]">
                  Dear {name}
                </p>
              )}
              
              <h3 className="font-serif text-xl sm:text-2xl text-crimson">
                Merry Christmas!
              </h3>

              <p className="text-card-foreground/70 text-sm sm:text-base leading-relaxed max-w-[220px] mx-auto whitespace-pre-wrap">
                {message
                    .split("\n")
                    .map((line, lineIndex) => (
                        <span key={lineIndex}>
                      {line.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, index) => {
                        // Bold
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                              <strong key={index} className="text-card-foreground">
                                {part.replace(/\*\*/g, "")}
                              </strong>
                          );
                        }

                  // Italic
                  if (part.startsWith("*") && part.endsWith("*")) {
                    return (
                        <em key={index}>
                          {part.replace(/\*/g, "")}
                        </em>
                    );
                  }

                  return part;
                })}
                          {lineIndex < message.split("\n").length - 1 && <br />}
                  </span>
                ))}
              
              </p>



              <div className="flex items-center justify-center gap-2 pt-2">
                <TreePine className="w-4 h-4 text-forest" />
                <Sparkles className="w-3 h-3 text-gold" />
                <TreePine className="w-4 h-4 text-forest" />
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-5 flex items-center gap-2">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-[10px] text-card-foreground/30 tracking-wider">
                ❄️ {new Date().getFullYear()} ❄️
              </span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            
            {/* Tap to close hint */}
            <p className="absolute bottom-12 text-[10px] text-card-foreground/30 tracking-wider">
              Tap card to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasCard;
