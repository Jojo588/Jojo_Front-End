import { useRef, useState, useEffect } from "react"

const ReactWithCss3 = ({ Reactwithcsslist }) => {
  const scrollRef = useRef(null)
  const totalProjects = Reactwithcsslist.length
  const repeats = 5
  const infiniteProjects = Array.from({ length: totalProjects * repeats }, (_, i) => i % totalProjects)

  const middleSetStart = Math.floor(repeats / 2) * totalProjects
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const [cardWidth, setCardWidth] = useState(350);



 useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

    const getCardWidth = () => cardWidth ?? 350;

    const scrollToProject = (index) => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    const spacing = 16;
    const targetCardIndex = middleSetStart + index;
    const newScrollLeft =
      targetCardIndex * (cardWidth + spacing) -
      containerWidth / 2 +
      (cardWidth + spacing) / 2;

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
    };

  const handleLeftButton = () => {
    const newIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects
    setCurrentProjectIndex(newIndex)
    scrollToProject(newIndex)
  }

  const handleRightButton = () => {
    const newIndex = (currentProjectIndex + 1) % totalProjects
    setCurrentProjectIndex(newIndex)
    scrollToProject(newIndex)
  }

useEffect(() => {
    const updateCardWidth = () => {
  if (!scrollRef.current) return;
  const containerWidth = scrollRef.current.clientWidth;
  const spacing = 16;

  let newWidth;

  if (containerWidth >= 1024) {
    newWidth = (containerWidth - 2 * spacing) / 3;
  } else if (containerWidth >= 640) {
    newWidth = (containerWidth - 1.5 * spacing) / 2.5;
  } else {
    newWidth = (containerWidth - spacing) / 1.2;
  }

  const minCard = 260;
  const maxCard = 450;

  setCardWidth(Math.min(maxCard, Math.max(minCard, newWidth)));
};

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);


   useEffect(() => {
  if (!scrollRef.current || cardWidth === null) return;

  const container = scrollRef.current;
  let animationFrame;

  const onScroll = () => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      const scrollLeft = container.scrollLeft;
      const spacing = 16;
      const cardSize = getCardWidth() + spacing;
      const centerOffset =
        scrollLeft + container.clientWidth / 2 - cardSize / 2;

      let approxIndex = Math.round(centerOffset / cardSize) - middleSetStart;
      approxIndex = Math.max(0, Math.min(totalProjects - 1, approxIndex));

      // Clamp scroll when at bounds on mobile
      if (isMobile) {
        const minScrollLeft =
          middleSetStart * cardSize -
          container.clientWidth / 2 +
          cardSize / 2;
        const maxScrollLeft =
          (middleSetStart + totalProjects - 1) * cardSize -
          container.clientWidth / 2 +
          cardSize / 2;

        if (scrollLeft < minScrollLeft - 1) {
          container.scrollTo({
            left: minScrollLeft,
            behavior: "smooth",
          });
          return;
        }

        if (scrollLeft > maxScrollLeft + 1) {
          container.scrollTo({
            left: maxScrollLeft,
            behavior: "smooth",
          });
          return;
        }
      }

      if (approxIndex !== currentProjectIndex) {
        setCurrentProjectIndex(approxIndex);
      }
    });
  };

  container.addEventListener("scroll", onScroll);
  return () => {
    container.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(animationFrame);
  };
}, [isMobile, cardWidth, currentProjectIndex]);


useEffect(() => {
    scrollToProject(currentProjectIndex);
  }, [cardWidth]);

   return (
<div className="items-center flex relative bg-gray-100 dark:bg-[#1A1A2E] transition-all duration-500">
  {!isMobile && (
    <button
      className={`bg-[#FCA311] hover:bg-[#ffb733] text-white p-3 rounded-full shadow-md absolute -left-4 z-10 transition-all duration-300 ${
        currentProjectIndex === 0
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
      onClick={handleLeftButton}
    >
      &lt;
    </button>
  )}

  <div
    ref={scrollRef}
    className="w-full overflow-x-auto scroll-smooth scroll-px-6"
    style={{
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      overscrollBehaviorX: "contain",
    }}
  >
    <style>
      {`
        div::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

    <div
      className="flex flex-nowrap py-8"
      style={{
        scrollSnapType: "x mandatory",
        gap: "16px",
      }}
    >
      {infiniteProjects.map((i, index) => {
        const project = Reactwithcsslist[i];
        const isActive = index === middleSetStart + currentProjectIndex;

        return (
          <div
            key={`${project.title}-${index}`}
            className={`bg-gray-200 dark:bg-[#16213E] p-5 rounded-xl shrink-0 transition-all duration-500 ease-in-out ${
              isActive
                ? "scale-105 shadow-xl opacity-100 z-10"
                : "scale-95 shadow-md opacity-60 blur-sm"
            }`}
            style={{
              width: `${cardWidth}px`,
              scrollSnapAlign: "center",
              ...(isMobile
                ? {}
                : {
                    pointerEvents: isActive ? "auto" : "none",
                    opacity: isActive ? 1 : 0.6,
                  }),
            }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={project.projectImage || "/placeholder.svg"}
                alt="project img"
                className="w-full object-cover rounded-md h-48"
              />
            </div>
            <h1 className="font-semibold text-[#FCA311] capitalize mb-2 text-lg md:text-xl">
              {project.title}
            </h1>
            <p className="text-gray-700 dark:text-[#C5C5C5] mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex justify-between">
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#FCA311] text-white rounded-md hover:bg-[#e89c0f] transition px-4 py-1 text-sm">
                  Live Demo
                </button>
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#0F3460] text-white rounded-md hover:bg-[#0b2c52] transition px-4 py-1 text-sm">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {!isMobile && (
    <button
      className={`bg-[#FCA311] hover:bg-[#ffb733] text-white p-3 rounded-full shadow-md absolute -right-4 z-10 transition-all duration-300 ${
        currentProjectIndex === totalProjects - 1
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
      onClick={handleRightButton}
    >
      &gt;
    </button>
  )}
</div>

  );
};
export default ReactWithCss3
