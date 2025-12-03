import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { CornerLeftUp } from "react-feather";

export interface PlayVideoOnEnterProps {
  src: string;
  blenderBadgeText?: string;
}

export function PlayVideoOnEnter(props: PlayVideoOnEnterProps) {
  const inViewRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(inViewRef, { once: true, amount: 0.75 });

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    }
  }, [inView]);

  return (
    <div className="flex flex-col items-center" ref={inViewRef}>
      <video ref={videoRef} src={props.src} />
      {props.blenderBadgeText && (
        <p className="text-red-500 flex flex-row items-center">
          <CornerLeftUp size={14} /> &nbsp; {props.blenderBadgeText}
        </p>
      )}
    </div>
  );
}
