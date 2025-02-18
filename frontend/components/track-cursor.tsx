import { motion } from "framer-motion";
const TrackCursor = ({ cursorPosition }: { cursorPosition: number }) => {
  return (
    <motion.div
      className="bg-brand-green h-[.5vh] sticky top-0 left-0 right-0"
      initial={{ width: "0" }}
      animate={{ width: `${cursorPosition}%`, transition: { duration: 0.5 } }}
    ></motion.div>
  );
};

export default TrackCursor;
