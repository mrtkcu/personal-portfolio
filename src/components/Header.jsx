import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="bg-darkwhite -z-20">
      <section className="p-16 w-[80%] mx-auto ">
        <div className="mb-48 flex justify-end gap-6 lg-sm:justify-center">
          <button className="relative inline-flex items-center h-6 rounded-full w-12 bg-lightblue transition-all duration-300 ease-in-out hover:bg-skyblue">
            <span className="absolute left-0 h-4 w-4 bg-yellow rounded-full shadow transform transition-transform duration-300 ease-in-out"></span>
          </button>
          <a className="block" href="">
            DARK MODE
          </a>
          <span className="mx-3 block">|</span>
          <a className="block" href="">
            <span className="text-lightblue">TÜRKÇE </span> 'YE GEÇ
          </a>
        </div>
        <div>
          <div className="flex justify-between items-center lg-sm:flex lg-sm:flex-col lg-sm:items-start lg-sm:gap-12">
            <div className="w-[45%] lg-sm:w-[100%] lg-sm:mb-10">
              <p className="text-3xl mb-8 font-light ">
                {" "}
                <span className="tracking-wider">Hi!</span> &#128075;
              </p>
              <h3 className="text-5xl xl-sm:text-4xl leading-snug mb-20 font-medium">
                <span className="text-black relative z-0">
                  I'm Mur
                  <span className="absolute right-3 top-9 w-full h-[30px] bg-lightblue rounded -z-10 xl-sm:h-[20px] xl-sm: right-2 top-7 lg-sm:top-6"></span>
                </span>
                at. I'm a full-stack developer. I can craft solid and scalable
                frontend products. Let's meet!
              </h3>
              <div className="mb-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 "
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600 text-4xl"
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-black text-4xl"
                  />
                </a>
              </div>
              <p className="text-lg font-light mb-1">
                Currently{" "}
                <span className="text-lightblue hover:text-blue3">
                  Freelancing
                </span>{" "}
                for{" "}
                <span className="text-lightblue hover:text-blue3">
                  UX, UI, & Web Design
                </span>{" "}
                Project.
              </p>
              <p className="text-lg font-light">
                Invite me to join your team &rarr;
                <span className="text-lightblue underline tracking-wider ml-2">
                  <a
                    className="hover:text-blue3"
                    href="mailto:mrtkcu0101@gmail.com"
                  >
                    mrtkcu0101@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div className="relative z-0 ">
              <span className="absolute bg-lightblue w-[500px] h-[500px] xl-sm:w-[400px] xl-sm:h-[400px] lg-sm:w-[300px] lg-sm:h-[300px] -z-10 right-5 bottom-5 rounded-3xl"></span>
              <img
                src="https://avatars.githubusercontent.com/u/53698763?v=4"
                className="rounded-3xl w-[500px] h-[500px] xl-sm:w-[400px] xl-sm:h-[400px] lg-sm:w-[300px] lg-sm:h-[300px] object-cover"
                alt="a"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
