import { interpolate, motion, useScroll, useTransform } from "motion/react";
import "./App.css";
import { Landing } from "./Landing/Landing";
import { WorkHistory } from "./WorkHistory/WorkHistory";
import { useRef } from "react";

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
        <WorkHistory />
      </div>
    </div>
  );
}

export default App;
