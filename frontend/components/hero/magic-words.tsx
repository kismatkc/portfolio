import { motion, Variants } from "framer-motion";

const magicWordsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};
const magicWordsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const magicWords: string[] = [
  "Hi, I'm",
  " kismat!",
  "I create",
  " websites",
  " and",

  "develop ",
  "cross-platform apps.",
];

const paragraph: string[] = ["Have a look a some of my", "creations."];
const delayForParagraph = magicWords.join("").split("").length * 0.04 + 0.4;
const MagicWords = ({
  setShowCarousal,
}: {
  setShowCarousal: (state: boolean) => void;
}) => {
  return (
    <motion.div
      variants={magicWordsContainerVariants}
      initial="hidden"
      animate="visible"
      className="font-bold text-2xl mt-9 flex flex-col gap-y-3 "
    >
      <p className="text-left w-full pl-10">
        {magicWords[0].split("").map((c, i) => (
          <motion.span variants={magicWordsVariants} key={i}>
            {c}
          </motion.span>
        ))}
        {magicWords[1].split("").map((c, i) => (
          <motion.span
            variants={magicWordsVariants}
            key={i}
            className="text-brand-green font-extrabold "
          >
            {c}
          </motion.span>
        ))}
      </p>
      <p className="text-left w-full pl-10">
        {magicWords[2].split("").map((c, i) => (
          <motion.span variants={magicWordsVariants} key={i}>
            {c}
          </motion.span>
        ))}
        {magicWords[3].split("").map((c, i) => (
          <motion.span
            variants={magicWordsVariants}
            key={i}
            className="text-brand-green font-extrabold"
          >
            {c}
          </motion.span>
        ))}
        {magicWords[4].split("").map((c, i) => (
          <motion.span variants={magicWordsVariants} key={i}>
            {c}
          </motion.span>
        ))}
      </p>
      <p className="text-left w-full pl-10">
        {magicWords[5].split("").map((c, i) => (
          <motion.span variants={magicWordsVariants} key={i}>
            {c}
          </motion.span>
        ))}
        {magicWords[6].split("").map((c, i) => (
          <motion.span
            variants={magicWordsVariants}
            key={i}
            className="text-brand-green font-extrabold"
          >
            {c}
          </motion.span>
        ))}
      </p>
      <motion.p
        className="font-semibold text-xl flex mt-12 pl-10 gap-x-1 flex-nowrap"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: delayForParagraph, duration: 1.3 },
        }}
        onAnimationComplete={() => setShowCarousal(true)}
      >
        <span>{paragraph[0]}</span>
        <span className="underline font-bold text-brand-green ">
          {paragraph[1]}
        </span>
      </motion.p>
    </motion.div>
  );
};

export default MagicWords;
