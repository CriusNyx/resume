import { interpolate, motion, useScroll, useTransform } from "motion/react";
import "./App.css";
import { Landing } from "./Landing/Landing";
import { WorkHistory } from "./WorkHistory/WorkHistory";
import { useRef } from "react";
import { OtherWork } from "./OtherWork/OtherWork";

function App() {
  const scrollRef = useRef(null);
  const scroll = useScroll({ container: scrollRef });

  const opacity = useTransform(() => {
    return interpolate([500, 1000], [0, 1])(scroll.scrollY.get());
  });

  return (
    <div className="w-screen h-screen overflow-clip">
      <motion.div
        className="absolute w-full h-full body-background"
        style={{ opacity }}
      />
      <div ref={scrollRef} className="absolute w-full h-full overflow-scroll">
        <Landing />
        <div className="flex flex-col mx-auto max-w-300">
          <div className="flex flex-col mx-5 items-stretch bg-black/60 p-5 rounded-2xl m-5">
            <WorkHistory />
            <OtherWork />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
