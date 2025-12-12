import type { PropsWithChildren } from "react";
import TommysBulletPoints from "../data/TommysBulletPoints";
import WOFBulletPoints from "../data/WOFBulletPoints";
import { PlayVideoOnEnter } from "../common/PlayVideoOnEnter";
import React from "react";
import carAnimation from "../assets/Carwash.webm";
import boardsAnimation from "../assets/Boards.webm";
import useIsMobile from "../util/useIsMobile";

interface BadgeProps extends PropsWithChildren {
  color?: string;
}

function Badge(props: BadgeProps) {
  return (
    <div
      className="p-2 px-4 bg-rose-800 rounded-full font-medium text-white"
      style={{ backgroundColor: props.color }}
    >
      <p className="text-shadow-md/30">
        {props.children}
      </p>
    </div>
  );
}

interface BulletItemProps {
  items: string[];
}

export function BulletList(props: BulletItemProps) {
  return (
    <div className="mt-5 ml-4">
      {props.items.map((bullet, i) => (
        <Bullet key={`bullet-${i}`} text={bullet} />
      ))}
    </div>
  );
}

interface BulletProps {
  text: string;
}

export function Bullet(props: BulletProps) {
  const { text } = props;
  const indented = text.startsWith("  ");
  const label = text.trimStart();
  return <li className={`${indented ? "ml-5" : ""}`}>{label}</li>;
}

const tommysTools = [
  { name: "React Native", color: "#2d79c7" },
  { name: "JavaScript", color: "#cc9020" },
  { name: "TypeScript", color: "#2d79c7" },
  { name: "Kotlin", color: "#cc6f06" },
  { name: "Swift", color: "#b23e2c" },
] satisfies Tools[];

const wofTools = [
  { name: "React", color: "#2d79c7" },
  { name: "JavaScript", color: "#cc9020" },
  { name: "TypeScript", color: "#2d79c7" },
  { name: "C#", color: "#611e73" },
  { name: "Xamarin", color: "#2d79c7" },
  { name: "ASP.NET", color: "#5c2d91" },
] satisfies Tools[];

export function WorkHistory() {
  return (
    <div className="flex flex-col">
      <Work
        companyName="Tommy's Express"
        jobName="App Developer"
        tools={tommysTools}
        bullets={TommysBulletPoints}
        GraphicComponent={() => (
          <PlayVideoOnEnter
            src={carAnimation}
            blenderBadgeText={"I created this in Blender."}
          />
        )}
      />
      <Work
        companyName="World of Floors"
        jobName="Full Stack Developer"
        tools={wofTools}
        bullets={WOFBulletPoints}
        GraphicComponent={() => (
          <PlayVideoOnEnter
            src={boardsAnimation}
            blenderBadgeText={"I also created this in Blender."}
          />
        )}
      />
    </div>
  );
}

interface Tools {
  name: string;
  color?: string;
}

interface WorkProps {
  companyName: string;
  jobName: string;
  tools: Tools[];
  bullets: string;
  GraphicComponent?: React.ComponentType<object>;
}

function Work(props: WorkProps) {
  const { isMobile } = useIsMobile();

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col" : "flex-row"
      } justify-between text-left`}
    >
      <div className="flex flex-1 flex-col">
        <h2>{props.companyName}</h2>
        <h2 className="pb-5">&emsp;{props.jobName}</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {props.tools.map((tool, i) => (
            <Badge key={i} color={tool.color}>{tool.name}</Badge>
          ))}
        </div>
        {isMobile && (
          <div className="flex flex-1 flex-col justify-center">
            {props.GraphicComponent && <props.GraphicComponent />}
          </div>
        )}
        <BulletList items={props.bullets.split("\n")} />
      </div>
      {!isMobile && (
        <div className="flex flex-1 flex-col justify-center">
          {props.GraphicComponent && <props.GraphicComponent />}
        </div>
      )}
    </div>
  );
}
