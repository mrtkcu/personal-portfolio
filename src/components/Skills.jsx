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
    <>
      <section className="mt-10 flex flex-col items-center justify-center mb-10 h-[400px] ">
        <h3 className="text-5xl leading-snug mb-10 font-medium ">Skills</h3>
        <div className="flex flex-row gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="">
              <div className="mb-3 lg-sm2:w-[100px] lg-sm2:h-[100px] sm2:w-[50px] sm2:h-[50px] ">
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  className="rounded"
                />
              </div>
              <p className="text-2xl text-grey text-center tracking-wide lg-sm2:text-lg  sm2:text-xs ">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
