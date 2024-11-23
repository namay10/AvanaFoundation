import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-[#a5c1d0]">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-6 py-16 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-4xl font-bold leading-tight text-center text-gray-800 md:text-4xl md:max-w-xl md:text-left">
          See how young minds are reshaping the future.
        </h2>
        {/* Button */}
        <div>
          <Link
            to="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full shadow-md hover:bg-brightRedLight transition duration-300"
          >
            Read Here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
