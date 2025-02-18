import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
const arsenalContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
const arsenalContainerChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

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
    tip: "React/Nativewind",
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
  const MotionImage = motion(Image);
  return (
    <motion.div
      className="flex gap-x-3  px-3 mt-3 flex-wrap gap-y-6 py-3"
      initial="hidden"
      whileInView="visible"
      variants={arsenalContainerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      {webTools.map((tool, i) => (
        <TooltipProvider key={i} delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <MotionImage
                src={tool.src}
                alt={tool.tip}
                width={50}
                height={50}
                variants={arsenalContainerChildrenVariants}
              />
            </TooltipTrigger>

            <TooltipContent className="mb-2 mr-1 ml-1">
              <p>{tool.tip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </motion.div>
  );
};

export default Arsenal;
