import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const webTools = [
  {
    src: "/arsenal/next.svg",
    tip: "Next js",
  },
  {
    src: "/arsenal/expo.svg",
    tip: "Expo",
  },
  {
    src: "/arsenal/typescript.svg",
    tip: "Typescript",
  },
  {
    src: "/arsenal/nativewind.svg",
    tip: "Nativewind",
  },

  {
    src: "/arsenal/tailwind.svg",
    tip: "Tailwind CSS",
  },

  {
    src: "/arsenal/socketio.svg",
    tip: "Socket IO",
  },
  {
    src: "/arsenal/postgres.svg",
    tip: "Postgres",
  },
  {
    src: "/arsenal/express.svg",
    tip: "Express",
  },
  {
    src: "/arsenal/node.svg",
    tip: "Node",
  },
  {
    src: "/arsenal/mongodb.svg",
    tip: "Mongo db",
  },
];

const Arsenal = ({}) => {
  return (
    <div className="flex gap-x-3  px-3 mt-3 flex-wrap gap-y-6 py-3">
      {webTools.map((tool, i) => (
        <TooltipProvider key={i} delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image src={tool.src} alt={tool.tip} width={50} height={50} />
            </TooltipTrigger>

            <TooltipContent className="mb-2 mr-1 ml-1">
              <p>{tool.tip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Arsenal;
