import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const InfiniteCarousel = ({}) => {
  const [macbook, setMacbook] = useState(true);
  const [ipad, setIpad] = useState(false);
  const [iphone, setIphone] = useState(false);

  return (
    <div className="grow relative">
      <AnimatePresence mode="wait">
        {macbook && (
          <motion.div
            key={"macbook"}
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { delay: 0.6, duration: 1 } }}
            onAnimationComplete={() => {
              setMacbook(false);
              setIpad(true);
            }}
          >
            <Image
              src={"/macbook.png"}
              fill
              alt="Device mockups"
              className="object-contain"
              priority
            />
          </motion.div>
        )}
        {ipad && (
          <motion.div
            key={"ipad"}
            className="w-full h-full"
            onAnimationComplete={() => {
              setIphone(true);
              setIpad(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { delay: 0.6, duration: 1 } }}
          >
            <Image
              src={"/ipad.png"}
              fill
              alt="Device mockups"
              className="object-contain"
              priority
            />
          </motion.div>
        )}
        {iphone && (
          <motion.div
            key={"iphone"}
            className="w-full h-full"
            onAnimationComplete={() => {
              setMacbook(true);
              setIphone(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { delay: 0.6, duration: 1 } }}
          >
            <Image
              src={"/iphone.png"}
              fill
              alt="Device mockups"
              className="object-contain"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfiniteCarousel;
