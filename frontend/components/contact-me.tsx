import { motion } from "framer-motion";
import { Mail } from "lucide-react";
const ContactMe = ({}) => {
  return (
    <motion.button
      className="fixed bottom-3 right-3 left-2 bg-brand-green p-2 rounded-full size-10"
      whileTap={{ scale: 0.7, transition: { duration: 0.2 } }}
      whileHover={{
        backgroundColor: "hsl(143, 20%, 40%)",
        scale: 1.1,

        transition: { duration: 0.2 },
      }}
    >
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com&su=${subject}&body=${body}">
        <Mail />
      </a>
      {/* <a href="mailto:kismatkc28@gmail.com?subject=Service Inquiry&body=Hi, I would like to know more about your services">
        <Mail />
      </a> */}
    </motion.button>
  );
};

export default ContactMe; // Actualt ContactMe
