import { Menu, X } from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const menuItems = ["HOME", "PROJECTS", "ABOUT"];
const HamBurger = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen || !navRef.current) return;
    const navElement = navRef.current;
    const handleClick = (e: MouseEvent) => {
      const clickedElement = e.target;
      if (!clickedElement) return;
      if (navElement.contains(clickedElement as Node)) return;
      setIsMenuOpen(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex flex-col absolute top-0 right-0 z-10">
      <div className="flex justify-end">
        <AnimatePresence>
          <motion.button
            className="hover:shadow-xl p-1 rounded-md block"
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          ref={navRef}
          initial={{ y: "-125%" }}
          animate={{
            y: isMenuOpen ? "0%" : "-125%",
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <ul className="font-bold">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className=" py-3 text-right pr-2  hover:text-brand-green hover:cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default HamBurger;
