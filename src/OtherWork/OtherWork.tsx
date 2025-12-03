import useIsMobile from "../util/useIsMobile";

const WorkRole = {
  "Creator": "Creator",
  "Artist": "Artist",
  "Contributor": "Contributor",
} as const;

type WorkRole = typeof WorkRole[keyof typeof WorkRole];

const otherWorks: WorkCardProps[] = [
  {
    title: "XDoc",
    role: WorkRole.Contributor,
    description:
      "Open source library for loading and parsing .NET support. I contributed support for configuring the framework and dependency injecting certain features.",
  },
  {
    title: "Notify",
    role: WorkRole.Creator,
    description:
      "App for creating DnD notes in markdown, with support for embeded component plugins.",
  },
  {
    title: "DnD Character Sheet",
    role: WorkRole.Creator,
    description:
      "Web app for creating DnD characters. I created it because I wanted an app with good UX and cloud saving.",
  },
  {
    title: "Render",
    role: WorkRole.Creator,
    description:
      "Command line app for scheduling and running render jobs for Blender.",
  },
  {
    title: "Grepline",
    role: WorkRole.Creator,
    description:
      "Like grep, but uses the regex to filter the contents of the line instead of matching lines.",
  },
  {
    title: "Factory",
    role: WorkRole.Creator,
    description:
      "Domain specific programming language for solving logistics problems. Created for the video game Satisfactory, " +
      "but the language can be configured to solve any logistics problem involving production balancing. " +
      "Factory includes a language server that provides syntax highlighting, code completion, symbol documentation, and type checking.",
  },
  {
    title: "CriusNyxUtil",
    role: WorkRole.Creator,
    description:
      ".NET library I maintain with utilty functions I find myself using over and over again. Automatically deploys on Nuget using Github Actions.",
  },
  {
    title: "CI/CD",
    role: WorkRole.Creator,
    description:
      "I create CI/CD pipelines for automatic deployment for all my new projects.",
  },
  {
    title: "Blender Art",
    role: WorkRole.Artist,
    description:
      "I create 3D art, models, materials, shaders, and animation in Blender. Sometimes with procedural generation elements. " +
      "The animations on this website were created in Blender.",
  },
  {
    title: "Strudel Music",
    role: WorkRole.Artist,
    description:
      "I create my own music using the music coding software Strudel.",
  },
  {
    title: "Resume Site",
    role: WorkRole.Creator,
    description:
      "The resume site you're looking at. I created this using React, Motion, Tailwind, and some other bits and bobs. The 3D animations were created by me in Blender.",
  },
];

const roleBadgeStyle: Record<WorkRole, React.CSSProperties> = {
  "Artist": { backgroundColor: "oklch(66.6% 0.179 58.318)" },
  "Contributor": { backgroundColor: "oklch(44.3% 0.11 240.79)" },
  "Creator": { backgroundColor: "oklch(45.5% 0.188 13.697)" },
};

interface WorkCardProps {
  title: string;
  role: WorkRole;
  description: string;
}

export function WorkCard(props: WorkCardProps) {
  return (
    <div className="flex flex-col items-start bg-blue-900/20 gap-5 p-5 rounded-3xl">
      <div className="flex flex-row items-center justify-between w-full">
        <h3>{props.title}</h3>
        <p
          className="p-1 px-2 rounded-md text-white"
          style={roleBadgeStyle[props.role]}
        >
          {props.role}
        </p>
      </div>
      <p className="text-left">
        {props.description}
      </p>
    </div>
  );
}

export function OtherWork() {
  const { isMobile } = useIsMobile();

  return (
    <div className="flex flex-col items-start my-5 w-full ">
      <h2>Other Work</h2>
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-5`}>
        <div className="flex flex-col gap-5 flex-1">
          {otherWorks.filter((_x, i) => i % 2 === 0).map((x, i) => (
            <WorkCard key={`work-item-${i}`} {...x} />
          ))}
        </div>
        <div className="flex flex-col gap-5 flex-1">
          {otherWorks.filter((_x, i) => i % 2 === 1).map((x, i) => (
            <WorkCard key={`work-item-${i}`} {...x} />
          ))}
        </div>
      </div>
    </div>
  );
}
