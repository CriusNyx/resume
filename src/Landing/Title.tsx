import { motion, type Transition, useTime, useTransform } from "motion/react";
import type { PropsWithChildren } from "react";
import { Redact } from "../common/Redact";
import useIsMobile from "../util/useIsMobile";

type AnimatedComponent =
  | typeof motion.h1
  | typeof motion.div
  | typeof motion.span;

interface DropInProps extends PropsWithChildren {
  className?: string;
  Component: AnimatedComponent;
  transition?: Transition;
}

function DropIn(props: DropInProps) {
  return (
    <props.Component
      className={props.className}
      initial={{ transform: "translateY(-10px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ duration: 1, ...props.transition }}
    >
      {props.children}
    </props.Component>
  );
}

function Dash() {
  const time = useTime();
  const opacity = useTransform(() => {
    const value = time.get();
    if (value < 2800) {
      return 0;
    }
    return Math.round(Math.pow(Math.sin(value / 500), 2));
  });
  return (
    <motion.span
      initial={{ opacity: 0 }}
      style={{ opacity }}
    >
      _
    </motion.span>
  );
}

export function Title() {
  const { isMobile } = useIsMobile();

  return (
    <div className="flex flex-col">
      <DropIn Component={motion.h1}>
        <Redact>RJ Reynolds</Redact>
        <Dash />
        <motion.div
          transition={{ delay: 3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute ${isMobile ? "-bottom-20" : "-bottom-10"} ${
            isMobile ? "-left-10" : "-left-25"
          } rotate-12`}
        >
          <p className="text-[20px]">
            <a
              href="mailto:rjreynoldsw@gmail.com"
              style={{ color: "oklch(82.8% 0.189 84.429)" }}
            >
              email: rjreynoldsw@gmail.com
            </a>
          </p>
        </motion.div>
      </DropIn>
      <div className="flex flex-row self-end">
        <DropIn
          className="pl-1"
          Component={motion.div}
          transition={{ delay: .75 }}
        >
          Developer,
        </DropIn>
        <DropIn
          className="pl-1"
          Component={motion.div}
          transition={{ delay: 1.25 }}
        >
          Artist,
        </DropIn>
        <DropIn
          className="pl-1"
          Component={motion.div}
          transition={{ delay: 1.75 }}
        >
          Problem Solver
        </DropIn>
      </div>
    </div>
  );
}
