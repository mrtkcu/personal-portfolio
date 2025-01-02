import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { language, translations } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get("/data/projectsData.json")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch project data:", error);
      });
  }, []);

  return (
    <section className="dark:bg-gray-800">
      <h4 className="text-4xl leading-snug pt-5 pb-10 font-medium text-center">
        Projects
      </h4>
      <div className="flex flex-row gap-20 max-h-[100%] w-[50%] mx-auto overflow-y-visible p-3 z-0 xl-sm:w-[70%] xl-sm:gap-5 lg-sm2:w-[100%] lg-sm2:gap-5 sm2:w-[100%] sm2:gap-5 xs:p-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" flex flex-col justify-between bg-blue3 dark:bg-projectdark w-[49%] rounded-lg sm2:justify-start sm2:max-h-[500px] xs:max-h-[325px]"
          >
            <div className="p-10 flex flex-col gap-5 font-playfair xs:p-2 xs:gap-3 dark:text-gray-800">
              <h5 className="font-playfair text-3xl font-semibold sm2:text-xl xs:text-base">
                {project.title}
              </h5>
              <div>
                <p className="mb-3 sm2:text-sm xs:text-xs">
                  {language === "en"
                    ? project["description-en"]
                    : project["description-tr"]}
                </p>

                <div className="flex flex-wrap gap-2 w-[60%] sm2:w-[100%] sm2:text-sm xs:text-xs xs:gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white  rounded-full px-3 py-1 sm2:px-2 sm2:py-0 hover:bg-white4 hover:cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between -mb-5 ">
                <a
                  className="hover:underline hover:text-white font-bold text-lg sm2:text-sm xs:text-xs"
                  href={project.githubLink}
                >
                  {translations.githubText}
                </a>
                <a
                  className="hover:underline hover:text-white font-bold text-lg sm2:block sm2:text-sm xs:text-xs"
                  href={project.appLink}
                >
                  {translations.appText} &rarr;
                </a>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-[300px] rounded-lg translate-y-[20%] sm2:mt-[10%] xs:translate-y-[1.2rem]">
              <img
                className="absolute w-[71%]"
                src={project.images[0]}
                alt=""
              />

              <img
                className="absolute right-[.05px]"
                src={project.images[1]}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
