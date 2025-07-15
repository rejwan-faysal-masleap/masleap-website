"use client";;
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "../../../../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-start justify-between no-visible-scrollbar md:pl-10 [perspective:1000px] relative sm:overflow-visible max-w-full md:max-w-[25%] w-full md:h-1/3 mb-10 md:mb-0 gradient-right-border md:mr-14 mr-0",
          containerClassName
        )}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}>
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )} />
            )}

            <span className="relative block text-black dark:text-white md:text-xl md:font-semibold">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("", contentClassName)} />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="relative w-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            zIndex: tabs.length - idx,
            opacity: isActive(tab) ? 1 : 0,
            position: isActive(tab) ? "relative" : "absolute",
            pointerEvents: isActive(tab) ? "auto" : "none",
          }}
          animate={{
            y: isActive(tab) ? [0, 20, 0] : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn("w-full", className)}
        >
          <div className="grid grid-cols-1 gap-6 w-full">
            {Array.isArray(tab.content) ? (
              tab.content.map((card, cardIdx) => (
                <div key={cardIdx}>{card}</div>
              ))
            ) : (
              <div>{tab.content}</div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
