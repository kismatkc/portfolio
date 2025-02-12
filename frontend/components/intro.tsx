import { Pacifico } from "next/font/google";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PacificoFont = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});
const NameIntro = ({
  intro,
  setIntro,
}: {
  intro: boolean;
  setIntro: (state: boolean) => void;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!controls || !intro) return;

    const startAnimation = async () => {
      await controls.start({
        x: "0%",
        transition: { duration: 2 },
      });
      await controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
      setIntro(false);
    };
    startAnimation();
  }, [controls, intro, setIntro]);

  if (intro) {
    return (
      <section className="h-screen flex justify-center items-center">
        <motion.span
          initial={{ x: "110%" }}
          animate={controls}
          className={`text-5xl w-full text-[#4c6440] text-center ${PacificoFont.className}`}
        >
          Kismat creates
        </motion.span>
      </section>
    );
  }

  return <section>Hero</section>;
};

export default NameIntro;
