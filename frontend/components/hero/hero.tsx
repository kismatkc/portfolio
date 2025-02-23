"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MagicWords from "./magic-words";
import InfiniteCarousel from "./infinite-carousel";
import CostMaintainance from "./cost-maintainance";
import { memoizeComponent } from "@/lib/utils";
import useScrollToSection from "@/hooks/scroll-to-section";

const Hero = () => {
  const [showCarousal, setShowCarousal] = useState(false);
  const { setHomePosotion, setHomePosotionEl } = useScrollToSection();
  const homeElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let flag = false;

    if (homeElRef.current?.offsetTop && !flag) {
      flag = true;

      setHomePosotion(homeElRef.current.offsetTop);
      setHomePosotionEl(homeElRef.current);
    }
  }, [homeElRef.current?.offsetTop, setHomePosotion]);
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

const memoizedHero = memoizeComponent(Hero);
export default memoizedHero;
