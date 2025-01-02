import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Profile() {
  const { translations } = useContext(LanguageContext);

  return (
    <>
      <div className="bg-darkwhite dark:bg-gray-900 dark:text-white">
        <section className=" mt-10 mb-10 h-[500px] xl-sm:h-[600px] mx-auto">
          <h4 className="text-4xl leading-snug pt-10 pb-10 font-medium text-center">
            {translations.profile}
          </h4>

          <div className="flex justify-center gap-10 xs:gap-0">
            <div className="bg-white dark:bg-gray-800 w-[25%] xl-sm:w-[50%] xl-sm:max-h-[500px] xs:p-4 flex flex-col gap-4 p-10 rounded-lg border-b-8 border-r-8 dark:border-gray-500 ">
              <h5 className="text-3xl text-pink mb-5 font-playfair xs:text-xl">
                {translations["basic-info"]}
              </h5>
              <div className="grid grid-cols-2 gap-y-4 font-light sm2:text-sm xs:text-xs xs:gap-x-2">
                <span className="font-semibold ">
                  {translations["birthdate"]}
                </span>
                <span>09.11.1999</span>
                <span className="font-semibold">{translations["city"]}</span>
                <span>Eskişehir</span>
                <span className="font-semibold">
                  {translations["education-status"]}
                </span>
                <span>{translations["education"]}</span>
                <span className="font-semibold">
                  {translations["role-preference"]}
                </span>
                <span>Frontend, UI</span>
              </div>
            </div>
            <div className="w-[25%] xl-sm:w-[50%] p-6 xs:p-4">
              <h5 className="text-3xl mb-5 font-playfair xs:text-xl">
                <span className="relative z-0">
                  {translations["about-title"]}
                  <span className="absolute right-5 top-7 w-[100px] h-[20px] rounded-lg bg-lightblue -z-10 xs:w-[60px] xs:h-[10px] "></span>
                </span>
              </h5>
              <div className="flex flex-col gap-5 font-light text-xl mt-10 sm2:text-[1rem] xs:text-xs">
                <p>{translations["about-1"]}</p>
                <p>{translations["about-2"]}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
