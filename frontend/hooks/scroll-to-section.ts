import { useState } from "react";
const useScrollToSection = () => {
  const rootTotalHeight =
    document.body.getElementsByTagName("main")[0]?.scrollHeight;
  const [homePosition, setHomePosotion] = useState<number | null>(null);
  const [projectPosition, setProjectPosition] = useState<number | null>(null);
  const [aboutMePosition, setAboutMePosition] = useState<number | null>(null);
  const [homePositionEl, setHomePosotionEl] = useState<HTMLDivElement | null>(
    null
  );

  if (rootTotalHeight && homePosition && projectPosition && aboutMePosition) {
    console.log(
      rootTotalHeight,
      homePosition,
      projectPosition,
      aboutMePosition
    );
  }
  console.log(rootTotalHeight, homePosition, projectPosition, aboutMePosition);

  return {
    setHomePosotion,
    setProjectPosition,
    setAboutMePosition,
    setHomePosotionEl,
  };
};

export default useScrollToSection;
