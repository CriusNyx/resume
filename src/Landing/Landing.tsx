import { motion, useTime, useTransform } from "motion/react";
import { Title } from "./Title";
import { ChevronDown } from "react-feather";

const bounceSpeed = 1000;
const bounceDistance = -5;
const bouncePower = 50;

export function Landing() {
  const time = useTime();
  const pos = useTransform(() => time.get() / 50);
  const y = useTransform(() =>
    Math.pow(Math.sin(time.get() / bounceSpeed), bouncePower) * bounceDistance
  );
  return (
    <div className="flex h-full w-full bg-zinc-900">
      <motion.div
        className="title-background flex h-full w-full "
        style={{ backgroundPositionX: pos, backgroundPositionY: pos }}
      >
        <div className="flex flex-col bg-radial from-transparent via-transparent via-20% to-black/30 w-full h-full justify-center items-center">
          <Title />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end p-5 bg-linear-0 from-black to-transparent h-50">
          <motion.div
            className="flex items-center flex-col"
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ delay: 3, duration: 1 }}
          >
            <h2>See more</h2>
            <motion.div
              style={{ translateY: y }}
              transition={{ type: "spring" }}
            >
              <ChevronDown size={100} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
