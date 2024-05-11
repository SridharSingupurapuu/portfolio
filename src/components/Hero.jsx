import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanva } from "./canvas";
import TypewriterComponent from "typewriter-effect";
import { sridhar } from "../assets";

const Hero = () => {
  const handleClick = () => {
    window.open("/Sridhar_resume.pdf", "_blank");
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="flex flex-col lg:flex-row justify-end">
        <div
          className={`${styles.paddingX} absolute inset-0 dxs:mt-[125px] xs:mt-[136px] top-[120px] lg:m-auto max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col  justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Sridhar</span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <span className="text-[#915eff]">
                {" "}
                <TypewriterComponent
                  options={{
                    strings: ["Frontend Developer", "Reactjs Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>

            <p className="mt-5 text-[13px] xs:text-[15px] sm:text-[18px]">
              Experienced frontend developer with a passion{" "}
              <br className="sm:block hidden" /> for creating visually stunning
              and user-friendly <br className="sm:block hidden" /> websites.
            </p>

            <button
              className="text-white bg-red-700 mt-4 flex items-center py-1 px-1.5 text-[13px] xs:py-1 xs:px-1.5 sm:py-1.5 xs:text-[15px] sm:px-2 rounded-md"
              onClick={handleClick}
            >
              {" "}
              Resume{" "}
            </button>
          </div>
        </div>

        <div className="lg:mr-72">
          <img
            src={sridhar}
            alt="sridhar"
            className="rounded-full dxs:w-[150px] dxs:h-[150px] dxs:mt-24 dxs:mx-auto lg:mt-36 lg:w-[210px] lg:h-[210px]"
          />
        </div>
      </div>
      {/* <ComputersCanva /> */}
      <div className="hidden lg:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
