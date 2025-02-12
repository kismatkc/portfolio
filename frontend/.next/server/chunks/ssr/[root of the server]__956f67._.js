module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/components/hero.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// "use client";
// import NameIntro from "./intro";
// import { motion, AnimatePresence, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// // Variants for individual letters (typewriter effect)
// const letterVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };
// // Container variant to stagger the letter animations
// const textContainerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.05 },
//   },
// };
// // Variant for the paragraph fade-in (Item 2)
// const paragraphVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 1 } },
// };
// // Variants for the carousel image (Item 3) using AnimatePresence.
// // When the image mounts it fades in; when it unmounts it fades out.
// const carouselVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 1 } },
//   exit: { opacity: 0, transition: { duration: 1 } },
// };
// // Helper component: renders text with a typewriter effect by splitting into letters.
// type TypewriterTextProps = { text: string };
// const TypewriterText = ({ text }: TypewriterTextProps) => (
//   <motion.div
//     variants={textContainerVariants}
//     initial="hidden"
//     animate="visible"
//     className="text-center text-4xl font-bold"
//   >
//     {text.split("").map((char, index) => (
//       <motion.span key={index} variants={letterVariants}>
//         {char === " " ? "\u00A0" : char}
//       </motion.span>
//     ))}
//   </motion.div>
// );
// const Hero = () => {
//   // Always call hooks in the same order.
//   const [intro, setIntro] = useState(true);
//   const item2Controls = useAnimation();
//   const item3Controls = useAnimation();
//   // Item 1: Typewriter text.
//   const heroText =
//     "This is your multiline hero text that will be typed out one letter at a time. It can span multiple lines as needed.";
//   // Calculate duration: using 0.05s per letter plus an extra buffer.
//   const typewriterDuration = heroText.length * 0.05;
//   const paragraphDelay = typewriterDuration + 0.5;
//   // State to control when the paragraph becomes visible.
//   const [showParagraph, setShowParagraph] = useState(false);
//   // For the carousel (Item 3): track the current image index.
//   const images = ["/macbook.png", "/ipad.png", "/iphone.png"];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   // When intro is dismissed, start the paragraph timer.
//   useEffect(() => {
//     if (!intro) {
//       const timer = setTimeout(
//         () => setShowParagraph(true),
//         paragraphDelay * 1000
//       );
//       return () => clearTimeout(timer);
//     }
//   }, [intro, paragraphDelay]);
//   // Change the carousel image every 3 seconds (only when intro is dismissed).
//   useEffect(() => {
//     if (!intro) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % images.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [intro, images.length]);
//   // Trigger animations for Item 2 and Item 3 when the paragraph becomes visible.
//   useEffect(() => {
//     if (showParagraph) {
//       item2Controls.start("visible");
//       const timer = setTimeout(() => {
//         item3Controls.start("animate");
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [showParagraph, item2Controls, item3Controls]);
//   return (
//     <section className="h-screen flex flex-col justify-center items-center p-4 space-y-8">
//       {intro ? (
//         <NameIntro intro={intro} setIntro={setIntro} />
//       ) : (
//         <>
//           {/* Item 1: Typewriter Text */}
//           <div className="w-full">
//             <TypewriterText text={heroText} />
//           </div>
//           {/* Item 2: Paragraph fade-in */}
//           {showParagraph && (
//             <motion.p
//               className="text-xl text-center"
//               initial="hidden"
//               animate={item2Controls}
//               variants={paragraphVariants}
//             >
//               This paragraph fades in after the typewriter animation is
//               complete.
//             </motion.p>
//           )}
//           {/* Item 3: Carousel showing one image at a time with fade in/out */}
//           <div className="w-40 h-40 relative">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentImageIndex}
//                 className="absolute inset-0"
//                 variants={carouselVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//               >
//                 <Image
//                   src={images[currentImageIndex]}
//                   alt={`Carousel image ${currentImageIndex + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };
// export default Hero;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
// Variants for individual letters (typewriter effect)
const letterVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};
// Container variant to stagger the letter animations
const textContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
};
// Variant for the paragraph fade-in (Item 2)
const paragraphVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};
// Variants for the carousel image (Item 3) using AnimatePresence.
// When the image mounts it fades in; when it unmounts it fades out.
const carouselVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1
        }
    }
};
const TypewriterText = ({ text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: textContainerVariants,
        initial: "hidden",
        animate: "visible",
        className: "text-center text-4xl font-bold",
        children: text.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                variants: letterVariants,
                children: char === " " ? "\u00A0" : char
            }, index, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 194,
        columnNumber: 3
    }, this);
const Hero = ()=>{
    const [intro, setIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {}, void 0, false, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 211,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Hero;
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__956f67._.js.map