"use client";

import * as React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Clip = {
  name: string;
  role: string;
  /** Drop real files in /public/videos and set the path here. */
  src?: string;
};

const clips: Clip[] = [
  { name: "Brian", role: "client", src: "/hero-video-mobile.mp4" },
  { name: "Ayesha", role: "client", src: "/videos/testimonial-2.mp4" },
  { name: "Daniel", role: "client", src: "/videos/testimonial-3.mp4" },
];

export function HeroVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [index, setIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [muted, setMuted] = React.useState(true);

  const clip = clips[index];

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + clips.length) % clips.length);

  return (
    <div className="relative w-full min-h-[520px] max-w-[440px] overflow-hidden rounded-3xl bg-card shadow-xl">
      {/* Fallback poster — shows until a real video is added */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand/25 via-brand-2/15 to-secondary">
        <span className="font-heading text-7xl font-semibold text-brand/40">
          {clip.name.charAt(0)}
        </span>
      </div>

      {/* Video */}
      <video
        key={clip.src}
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted={muted}
        loop
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {clip.src ? <source src={clip.src} type="video/mp4" /> : null}
      </video>

      {/* Bottom gradient for control legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

      {/* Top-left client badge */}
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium shadow backdrop-blur">
        <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
        {clip.name} — {clip.role}
      </div>

      {/* Top-right mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium shadow backdrop-blur transition-colors hover:bg-background"
      >
        {muted ? (
          <VolumeX className="size-3.5" />
        ) : (
          <Volume2 className="size-3.5" />
        )}
        {muted ? "Unmute" : "Mute"}
      </button>

      {/* Pagination dots */}
      <div className="absolute inset-x-0 bottom-[4.5rem] flex justify-center gap-1.5">
        {clips.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full bg-white/60 transition-all",
              i === index ? "w-6 bg-white" : "w-1.5 hover:bg-white/80",
            )}
          />
        ))}
      </div>

      {/* Playback controls */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="grid size-9 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur transition-colors hover:bg-background"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="grid size-12 place-items-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
        >
          {playing ? (
            <Pause className="size-5 fill-current" />
          ) : (
            <Play className="size-5 fill-current" />
          )}
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="grid size-9 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur transition-colors hover:bg-background"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
