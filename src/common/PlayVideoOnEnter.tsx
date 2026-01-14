import { useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CornerLeftUp, Play } from "react-feather";

export interface PlayVideoOnEnterProps {
  src: string;
  blenderBadgeText?: string;
}

export function PlayVideoOnEnter(props: PlayVideoOnEnterProps) {
  const inViewRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(inViewRef, { once: true, amount: 0.75 });
  const [showPlay, setShowPlay] = useState(false);

  const play = useCallback(() => {
    videoRef.current?.play().then(() => setShowPlay(false)).catch(() =>
      setShowPlay(true)
    );
  }, []);

  useEffect(() => {
    if (inView) {
      play();
    }
  }, [inView, play]);

  return (
    <div className="flex flex-col items-center" ref={inViewRef}>
      <div
        className="relative"
        style={{ cursor: showPlay ? "pointer" : undefined }}
        onClick={play}
      >
        <video ref={videoRef} src={props.src} />
        {showPlay && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <Play size={64} />
          </div>
        )}
      </div>
      {props.blenderBadgeText && (
        <p className="text-red-400 flex flex-row items-center shadow-2xl">
          <CornerLeftUp size={14} /> &nbsp; {props.blenderBadgeText}
        </p>
      )}
    </div>
  );
}
