import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export interface PlayVideoOnEnterProps {
  src: string;
}

export function PlayVideoOnEnter(props: PlayVideoOnEnterProps) {
  const inViewRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(inViewRef, { once: true, amount: 0.75 });

  useEffect(() => {
    if(inView){
      videoRef.current?.play();
    }
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <video ref={videoRef} src={props.src} />
    </div>
  );
}
