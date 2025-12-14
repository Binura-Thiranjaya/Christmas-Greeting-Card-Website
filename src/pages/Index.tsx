import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import MusicPlayer from "@/components/MusicPlayer";
import ChristmasCard from "@/components/ChristmasCard";
import greetingsData from "@/data/greetings.json";

interface Greeting {
  id: string;
  name: string;
  message: string;
}

const Index = () => {
  const [searchParams] = useSearchParams();
  const [greeting, setGreeting] = useState<Greeting | null>(null);

  useEffect(() => {
    const id = searchParams.get("id") || "demo";
    const found = greetingsData.greetings.find((g) => g.id === id);
    setGreeting(found || greetingsData.greetings.find((g) => g.id === "demo") || null);
  }, [searchParams]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        {/* Header */}
        <div className="mb-10 text-center animate-fade-in-up" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl">🔔</span>
            <span className="text-3xl">🎄</span>
            <span className="text-3xl">🔔</span>
          </div>
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium">
            Season's Greetings
          </p>
        </div>

        {/* Christmas Card */}
        {greeting && (
          <ChristmasCard name={greeting.name} message={greeting.message} />
        )}

        {/* Footer */}
        <footer className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "1s", opacity: 0 }}>
          <p className="text-muted-foreground/70 text-sm flex items-center justify-center gap-2">
            <span>Share the joy</span>
            <span>•</span>
            <span>Try <code className="text-primary bg-primary/10 px-2 py-0.5 rounded">?id=1</code></span>
          </p>
        </footer>
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
