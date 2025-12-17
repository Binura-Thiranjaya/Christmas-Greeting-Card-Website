import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a royalty-free Christmas music URL
    audioRef.current = new Audio(
      "/audio.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-full px-6 py-3 flex items-center gap-4 glow-gold">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-accent" />
          ) : (
            <Play className="w-5 h-5 text-accent ml-0.5" />
          )}
        </button>

        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Christmas Music</span>
          <span className="text-sm text-foreground font-medium">
            {isPlaying ? "Now Playing" : "Click to Play"}
          </span>
        </div>

        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full hover:bg-accent/10 flex items-center justify-center transition-all duration-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-accent" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
