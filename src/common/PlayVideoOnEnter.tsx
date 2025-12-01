import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { ChevronUp } from "react-feather";

export interface PlayVideoOnEnterProps {
  src: string;
  includeBlenderNote?: boolean;
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
      {props.includeBlenderNote && (
        <p className="text-red-500 flex flex-row items-center">
          <ChevronUp /> &nbsp; I created this in Blender
        </p>
      )}
    </div>
  );
}
