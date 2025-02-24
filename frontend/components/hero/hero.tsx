"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MagicWords from "./magic-words";
import InfiniteCarousel from "./infinite-carousel";
import CostMaintainance from "./cost-maintainance";
import { useSections } from "../scrollToSectionWrapper";

const Hero = () => {
  const [showCarousal, setShowCarousal] = useState(false);
  const homeElRef = useRef(null);
  const { setHomeEl } = useSections();
  useEffect(() => {
    if (homeElRef.current) {
      setHomeEl(homeElRef.current);
    }
  }, []);

  return (
    <section className="flex flex-col gap-y-11" ref={homeElRef}>
      <div className="h-screen flex flex-col">
        <div className="flex  justify-center mt-24  ">
          <Image
            className="rounded-full"
            src={"/profilepicture.jpg"}
            alt="KK"
            width={150}
            height={150}
            priority
          />
        </div>
        <MagicWords setShowCarousal={setShowCarousal} />
        {showCarousal && <InfiniteCarousel />}
      </div>
      <CostMaintainance />
    </section>
  );
};

export default Hero;
