"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HLSPlayerProps = {
  src: string;
  autoPlay?: boolean;
};

export default function HLSPlayer({ src, autoPlay = true }: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    // Safari (native HLS support)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;

      if (autoPlay) {
        video.play().catch(() => {
          console.log("Autoplay blocked");
        });
      }
    } 
    // Other browsers (Chrome, Edge, Firefox)
    else if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch(() => {
            console.log("Autoplay blocked");
          });
        }
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS error:", data);
      });
    } else {
      console.error("HLS not supported in this browser");
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay={autoPlay}
      muted   // REQUIRED for autoplay in most browsers
      playsInline
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "16/9",
        backgroundColor: "black",
      }}
    />
  );
}