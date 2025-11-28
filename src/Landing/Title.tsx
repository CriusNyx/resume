import { motion, type Transition, useTime, useTransform } from "motion/react";
import type { PropsWithChildren } from "react";
import { Redact } from "../common/Redact";

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
    var value = time.get();
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
  return (
    <div className="flex flex-col">
      <DropIn Component={motion.h1}>
        <Redact>RJ Reynolds</Redact>
        <Dash />
      </DropIn>
      <div className="flex flex-row self-end">
        <DropIn
          className="pl-1"
          Component={motion.div}
          transition={{ delay: .75 }}
        >
          Driven,
        </DropIn>
        <DropIn
          className="pl-1"
          Component={motion.div}
          transition={{ delay: 1.25 }}
        >
          Creative,
        </DropIn>
        <DropIn
          className="pl-1"
          Component={motion.div}
          transition={{ delay: 1.75 }}
        >
          Passionate
        </DropIn>
      </div>
    </div>
  );
}
