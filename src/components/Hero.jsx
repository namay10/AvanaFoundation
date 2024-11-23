import { Link } from "react-router-dom";
import hero from "../assets/images/hero.avif";

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-50 py-10">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-10 md:space-y-0 md:flex-row md:gap-12">
        {/* Left Content */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-5xl md:text-left leading-tight">
            May knowledge reach all and May all become capable.
          </h1>
          <p className="text-lg text-center text-darkGrayishBlue md:text-left leading-relaxed">
            To awaken the inherent curiosity and capability within every young
            mind, empowering them with the tools of AI and technology to
            navigate and shape a future filled with promise and innovation.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="#"
              className="p-4 px-8 text-white bg-brightRed rounded-full shadow-lg hover:bg-brightRedLight transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={hero}
            alt="Hero Illustration"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
