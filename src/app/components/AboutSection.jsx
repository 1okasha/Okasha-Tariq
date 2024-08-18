"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { getIntroData } from "./data";
import Link from "next/link";
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [data, setIntro] = useState([]);
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const introData = await getIntroData();
        setIntro(introData);
        console.log(introData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data.length) return <p>Loading...</p>; // Loading state

  return (
    <section className="text-white" id="about">
      {data.map((item, i) => (
        <div key={i} className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about-image.png" width={500} height={500} alt="" />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              {item.about}
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>

            <div className="mt-8">
              {tab === "skills" && (
                <ul className="list-disc pl-2">
                  {item.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}

              {tab === "education" && (
                <ul className="list-disc pl-2">
                  {item.education.map((education, index) => (
                    <li key={index}>{education}</li>
                  ))}
                  
                </ul>
              )}

              {tab === "certifications" && (
                <>
                <ul className="list-disc pl-2">
                  {item.cerList.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
                { item.certLinks && (
                 <>
                <p className="pt-2">Certifications Links</p>
                {
                  item.certLinks.map((item, index) => (
                    <>
                    <div className="truncate ... ">
                    <Link key={index} href={item} target="_blank" rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline truncate ...  ">{item}</Link>

                    </div>
                       </>
                  ))
                }
                </>
                )
                }

                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
