import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Snowfall from "@/components/Snowfall";
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-christmas-dark via-background to-secondary/20 pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Snowfall */}
      <Snowfall />

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        {/* Header decoration */}
        <div className="mb-12 text-center animate-fade-in-up" style={{ opacity: 0 }}>
          <div className="text-6xl md:text-7xl mb-4">🎄</div>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Season's Greetings
          </p>
        </div>

        {/* Christmas Card */}
        {greeting && (
          <ChristmasCard name={greeting.name} message={greeting.message} />
        )}

        {/* Footer */}
        <footer className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "1s", opacity: 0 }}>
          <p className="text-muted-foreground/60 text-sm">
            Share the joy • Change <code className="text-primary/70">?id=1</code> in URL for different messages
          </p>
        </footer>
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
