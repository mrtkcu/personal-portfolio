import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-darkwhite -z-20">
      <section className="p-16 w-[80%] mx-auto relative">
        <span className="absolute w-[111px] h-[111px] bg-lightgrey rounded-full top-[-6%] left-[30%]"></span>

        <div className="mb-48 flex justify-end gap-6 lg-sm:justify-center xs:mb-24">
          <DarkModeToggle />
          <span className="mx-3 block">|</span>
          <a className="block" href="">
            <span className="text-lightblue">TÜRKÇE </span> 'YE GEÇ
          </a>
        </div>
        <div>
          <div className="flex justify-center gap-20 items-center lg-sm:flex lg-sm:flex-col lg-sm:items-start lg-sm:gap-12">
            <div className="w-[45%] lg-sm:w-[100%] lg-sm:mb-10">
              <p className="text-3xl mb-8 font-light">
                {" "}
                <span className="tracking-wider xs:text-md">Hi!&#128075;</span>
              </p>
              <h3 className="text-5xl xl-sm:text-4xl leading-snug mb-20 font-medium xs:text-3xl">
                <span className=" relative z-0">
                  I'm Mur
                  <span className="absolute right-3 top-9 w-full h-[30px] bg-lightblue rounded -z-10 xl-sm:h-[20px] xl-sm: right-2 top-7 lg-sm:top-6"></span>
                </span>
                at. I'm a full-stack developer. I can craft solid and scalable
                frontend products. Let's meet!
              </h3>
              <div className="mb-4 ">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 "
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600 text-4xl xs:text-3xl"
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className=" text-4xl xs:text-3xl"
                  />
                </a>
              </div>
              <p className="text-lg font-light mb-1 xs:text-sm">
                Currently{" "}
                <span className="text-lightblue hover:text-blue3 ">
                  Freelancing
                </span>{" "}
                for{" "}
                <span className="text-lightblue hover:text-blue3">
                  UX, UI, & Web Design
                </span>{" "}
                Project.
              </p>
              <p className="text-lg font-light xs:text-sm">
                Invite me to join your team &rarr;
                <span className="text-lightblue underline tracking-wider ml-2 ">
                  <a
                    className="hover:text-blue3 xs:text-xs"
                    href="mailto:mrtkcu0101@gmail.com"
                  >
                    mrtkcu0101@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div className="relative z-0 ">
              <span className="absolute bg-lightblue w-[341px] h-[341px] bottom-4 right-4 xl-sm:w-[241px] xl-sm:h-[241px] lg-sm:w-[141px] lg-sm:h-[141px] lg-sm:bottom-1 lg-sm:right-1 lg-sm: sm2:w-[141px] sm2:h-[141px] sm2:right-1 sm2:bottom-1 xs:w-[141px] xs:h-[141px] -z-10 rounded-3xl"></span>
              <img
                src="https://avatars.githubusercontent.com/u/53698763?v=4"
                className="rounded-3xl w-[341px] h-[341px] xl-sm:w-[241px] xl-sm:h-[241px] lg-sm:w-[141px] lg-sm:h-[141px] xs:w-[141px] xs:h-[141px]"
                alt="a"
              />
            </div>
          </div>
        </div>
        <span className="absolute w-[121px] h-[121px] border-[1.3rem] border-lightgrey rounded-full right-[23%] top-[93%] sm2:top-[97%] sm2:w-[60px] sm2:h-[60px] sm2:border-[.5rem]  xs:border-[.5rem] xs:top-[97%] xs:w-[75px] xs:h-[75px]"></span>
        <span className="absolute w-[217px] h-[59px] bg-lightblue rounded-full right-[-18%] top-[85%] sm2:right-[-50%] sm2:h-[30px] xs:right-[-60%] xs:w-[150px] xs:h-[25px]"></span>
      </section>
    </header>
  );
};

export default Header;
