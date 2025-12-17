import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Snowfall from "@/components/Snowfall";
import ChristmasCard from "@/components/ChristmasCard";
import MusicPlayer from "@/components/MusicPlayer";
import greetingsData from "@/data/greetings.json";
import { Sparkles } from "lucide-react";

interface Greeting {
  id: string;
  name: string;
  message: string;
}

const Index = () => {
  const [searchParams] = useSearchParams();
  const [greeting, setGreeting] = useState<Greeting | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");
    
    if (id) {
      // Find personalized greeting
      const found = greetingsData.greetings.find((g) => g.id === id);
      if (found) {
        setGreeting(found);
        return;
      }
    }
    
    // Default to public greeting
    const publicGreeting = greetingsData.greetings.find((g) => g.id === "public");
    setGreeting(publicGreeting || null);
  }, [searchParams]);

  if (!greeting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* SEO */}
      <title>Merry Christmas - A Special Wish For You</title>
      <meta
        name="description"
        content="Open your special Christmas card and discover a heartfelt message waiting just for you."
      />

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />

      {/* Subtle ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-crimson/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Snowfall */}
      <Snowfall />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-gold animate-twinkle" />
            <span className="text-muted-foreground text-sm uppercase tracking-[0.3em]">
              Season's Greetings
            </span>
            <Sparkles className="w-4 h-4 text-gold animate-twinkle" style={{ animationDelay: "1s" }} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gradient-gold">
            Christmas Wishes
          </h1>
        </header>

        {/* Card */}
        <ChristmasCard name={greeting.name} message={greeting.message} />

        {/* Footer hint */}
        <footer className="mt-12 text-center">
          <p className="text-muted-foreground/60 text-xs">
            Made with ❤️ for the holiday season
          </p>
        </footer>
      </div>

      {/* Music Player */}
      <MusicPlayer />
    </main>
  );
};

export default Index;
