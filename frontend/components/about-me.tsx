import Arsenal from "./arsenal";
import { motion, Variants } from "framer-motion";
const aboutMeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const summaryParaphraphOne =
  "Whether it's a website that mirrors your brand's character or a mobile solution designed for effortless interaction, every element is crafted with care and purpose, blending simplicity with artistry to create lasting impressions.Welcome to a digital space where creativity meets clarity.";

const summaryParaphraphTwo =
  "I believe every brand has a story worth sharing, and I am passionate about bridging your vision with the online world through engaging experiences that capture attention. I specialize in building digital platforms that combine simplicity with a touch of artistry, ensuring that your website or mobile solution resonates with your audience while reflecting who you are.";
const summaryParaphraphThree =
  "Whether it's a website that mirrors your brand's character or a mobile solution designed for effortless interaction, By focusing on clarity, quality, and detail, I create inviting environments that not only inform but also inspire trust and lasting connections. Let’s work together to transform your ideas into a compelling digital presence that truly embodies your unique story";

const AboutMe = ({}) => {
  return (
    <motion.section className="flex flex-col pl-3 pr-1 mt-10"  
        initial="hidden"
        whileInView="visible"
      variants={aboutMeVariants}
        viewport={{ once: true, amount: 0.2 }} >
      <div className="flex flex-col mb-6 gap-y-.5">
        <span className="text-5xl font-bold">kismat kc</span>
        <span className="text-xl font-medium">Toronto,Canada</span>
      </div>
      <div className="flex flex-col gap-y-2 font-medium">
        <p>{summaryParaphraphOne}</p>
        <p>{summaryParaphraphTwo}</p>
        <p>{summaryParaphraphThree}</p>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center py-3 mb-4">
          <p className="font-bold  text-2xl">Arsenal</p>
        </div>
        <Arsenal />
      </div>
    </motion.section>
  );
};

export default AboutMe;
