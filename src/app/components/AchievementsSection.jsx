"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getIntroData } from "./data";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const AchievementsSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const introData = await getIntroData();
      setData(introData);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>; // Loading state

  const achievementsList = [
    {
      metric: "Projects",
      value: data[0].projects,  // Dynamically fetched from Sanity
      postfix: "+",
    },
    {
      metric: "Certifications",
      value: data[0].certifications,  // Dynamically fetched from Sanity
    },
    {
      metric: "Years of Experience",
      value: data[0].years,  // Dynamically fetched from Sanity
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
