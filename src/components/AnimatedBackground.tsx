import { useEffect, useState } from "react";

interface Ornament {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  type: "ball" | "star" | "gift" | "candy";
}

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

const AnimatedBackground = () => {
  const [ornaments, setOrnaments] = useState<Ornament[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(350 75% 50%)", // Red
      "hsl(145 55% 40%)", // Green
      "hsl(40 95% 55%)",  // Gold
      "hsl(350 70% 60%)", // Light red
      "hsl(145 45% 50%)", // Light green
    ];

    const types: ("ball" | "star" | "gift" | "candy")[] = ["ball", "star", "gift", "candy"];

    const orns: Ornament[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 30,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setOrnaments(orns);

    const sparks: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 3,
    }));
    setSparkles(sparks);
  }, []);

  const renderOrnament = (ornament: Ornament) => {
    switch (ornament.type) {
      case "ball":
        return (
          <div
            className="rounded-full"
            style={{
              width: ornament.size,
              height: ornament.size,
              background: `radial-gradient(circle at 30% 30%, hsl(0 0% 100% / 0.4), ${ornament.color})`,
              boxShadow: `0 8px 20px ${ornament.color}40`,
            }}
          />
        );
      case "star":
        return (
          <span style={{ fontSize: ornament.size, filter: `drop-shadow(0 4px 8px ${ornament.color}40)` }}>
            ⭐
          </span>
        );
      case "gift":
        return (
          <span style={{ fontSize: ornament.size, filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.1))" }}>
            🎁
          </span>
        );
      case "candy":
        return (
          <span style={{ fontSize: ornament.size, filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.1))" }}>
            🍬
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(30 30% 98%) 0%, hsl(350 40% 96%) 30%, hsl(145 30% 96%) 70%, hsl(35 50% 96%) 100%)",
        }}
      />

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, hsl(350 70% 85% / 0.5) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(145 60% 85% / 0.5) 0%, transparent 50%)",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* Floating ornaments */}
      {ornaments.map((ornament) => (
        <div
          key={ornament.id}
          className="absolute"
          style={{
            left: `${ornament.left}%`,
            top: `${ornament.top}%`,
            animation: `float ${ornament.duration}s ease-in-out infinite`,
            animationDelay: `${ornament.delay}s`,
            opacity: 0.6,
          }}
        >
          {renderOrnament(ornament)}
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: "hsl(40 95% 70%)",
            boxShadow: "0 0 10px hsl(40 95% 60%), 0 0 20px hsl(40 95% 60% / 0.5)",
            animation: `twinkle 2s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}

      {/* Light strings at top */}
      <div className="absolute top-0 left-0 right-0 h-20 flex justify-around items-start">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="relative"
            style={{
              animation: "sway 3s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="w-px h-8 bg-christmas-green/30" />
            <div
              className="w-4 h-5 rounded-full -mt-1"
              style={{
                background: i % 3 === 0 
                  ? "radial-gradient(circle at 30% 30%, hsl(0 0% 100% / 0.6), hsl(350 75% 50%))"
                  : i % 3 === 1
                  ? "radial-gradient(circle at 30% 30%, hsl(0 0% 100% / 0.6), hsl(145 55% 45%))"
                  : "radial-gradient(circle at 30% 30%, hsl(0 0% 100% / 0.6), hsl(40 95% 55%))",
                boxShadow: i % 3 === 0 
                  ? "0 0 15px hsl(350 75% 50% / 0.6)"
                  : i % 3 === 1
                  ? "0 0 15px hsl(145 55% 45% / 0.6)"
                  : "0 0 15px hsl(40 95% 55% / 0.6)",
                animation: "twinkle 1.5s ease-in-out infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
