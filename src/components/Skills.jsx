import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://mellow-mooncake-458546.netlify.app/skillsData.json")
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Error fetching skills data:",
          error.response || error.message
        );
        setError("Failed to load skills.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative">
      <section className="mt-10 flex flex-col items-center justify-center mb-10 h-[400px] relative dark:bg-gray-800 dark:z-[-10]">
        <h3 className="text-5xl leading-snug mb-10 font-medium ">Skills</h3>
        <div className="flex flex-row gap-10 xs:grid xs:grid-cols-3 xs:gap-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="">
              <div className="mb-3 lg-sm2:w-[100px] lg-sm2:h-[100px] sm2:w-[50px] sm2:h-[50px] xs:mb-2">
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  className="rounded"
                />
              </div>
              <p className="text-2xl  text-center tracking-wide lg-sm2:text-lg  sm2:text-xs xs:text-center xs:text-[0.5rem]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <span className="absolute w-[217px] h-[59px] bg-grey rounded-full left-[-5%] bottom-[5%] xl-sm:w-[60px] h-[60px] sm2:w-[100px] sm2:h-[30px] xs:left-[-35%] xs:h-[30px]"></span>
      <span className="absolute w-[121px] h-[121px] border-[1.3rem] border-lightblue rounded-full right-[-2%] bottom-[-8rem]  sm2:w-[60px] sm2:h-[60px] sm2:border-[.5rem] xs:w-[60px] xs:h-[60px] xs:border-[0.6rem] xs:bottom-[-4.5rem]"></span>
    </div>
  );
}

export default Skills;
