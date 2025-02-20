// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FileX, Home, Mail, Menu, User } from "lucide-react";

import { Menu } from "lucide-react";

import { useEffect, useRef, useState } from "react";

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { id: 1, label: "Home", icon: <Home /> },
//     { id: 2, label: "About Me", icon: <User /> },
//     { id: 3, label: "Contact", icon: <Mail /> },
//   ];

//   const overlayVariants = {
//     open: { opacity: 1 },
//     closed: { opacity: 0 },
//   };

//   const menuVariants = {
//     open: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 300, damping: 30 },
//     },
//     closed: {
//       x: "100%",
//       y: "-100%",
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       {/* Hamburger Button */}
//       <motion.button
//         aria-label="Toggle menu"
//         className="p-2 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <motion.div animate={isOpen ? "open" : "closed"}>
//           {isOpen ? <FileX size={24} /> : <Menu size={24} />}
//         </motion.div>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/10" // Lighter overlay without blur
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={overlayVariants}
//             onClick={() => setIsOpen(false)}
//           >
//             {/* Menu Content with Cone-shaped items */}
//             <motion.div
//               className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-2xl" // Increased shadow
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <nav>
//                 <ul className="space-y-3">
//                   {menuItems.map((item) => (
//                     <motion.li
//                       key={item.id}
//                       whileHover={{
//                         x: 5,
//                         scale: 1.05,
//                       }}
//                       className="group relative flex items-center gap-3 px-4 py-3
//                         text-gray-600 hover:text-indigo-600 cursor-pointer
//                         before:content-[''] before:absolute before:-inset-1
//                         before:bg-gradient-to-r before:from-transparent before:to-indigo-100
//                         before:opacity-0 before:transition-opacity before:rounded-lg
//                         hover:before:opacity-100"
//                     >
//                       {/* Cone shape indicator */}
//                       <span
//                         className="absolute -left-2 w-0 h-0
//                         border-t-[12px] border-b-[12px] border-r-[12px]
//                         border-t-transparent border-b-transparent border-r-indigo-600
//                         opacity-0 group-hover:opacity-100 transition-opacity"
//                       />

//                       <span className="text-xl z-10">{item.icon}</span>
//                       <span className="font-medium z-10">{item.label}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </nav>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HamburgerMenu;

const HamBurger = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null)
  

  useEffect(() =>{
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if(target === buttonRef.current) return
      setIsMenuOpen(false)
    }
    
    
  window.addEventListener("click",handleClick)
  },[])

  return (
    <nav className="flex justify-end">
      {!isMenuOpen ? (
        <button
          className="bg-white shadow-md hover:shadow-xl p-1 transition:shadow mr-3 mt-3 rounded-md"
          onClick={() => setIsMenuOpen(true)}
          ref={buttonRef}
        >
          <Menu className="" />
        </button>
      ) : (
        <div className="size-30 bg-red">Hello</div>
      )}
    </nav>
  );
};

export default HamBurger;
