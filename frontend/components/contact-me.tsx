import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
const ContactMe = ({}) => {
  useEffect(() => {
    if (!navigator.userAgent) return;
    // Get the user agent string (or empty string if not available)
    const ua = navigator.userAgent;
    // Regular expression to detect many common mobile devices (case-insensitive)
    const mobileRegex =
      /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    // Test the user agent string against the regex:
    if (mobileRegex.test(ua)) {
      setPhone(true);
    }
  }, []);
  const [phone, setPhone] = useState(false);
  return (
    <motion.button
      className="fixed bottom-3 right-3 left-2 bg-brand-green p-2 rounded-full size-12 flex items-center justify-center"
      whileTap={{ scale: 0.7, transition: { duration: 0.2 } }}
      whileHover={{
        backgroundColor: "hsl(143, 20%, 40%)",
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      {phone ? (
        <a href="mailto:kismatkc28@gmail.com?subject=Service Inquiry&body=Hi, I would like to know more about your services">
          <Mail />
        </a>
      ) : (
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kismatkc28@gmail.com&su=Service Inquiry&body=Hi, I would like to know more about your services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      )}
    </motion.button>
  );
};

export default ContactMe; // Actualt ContactMe
