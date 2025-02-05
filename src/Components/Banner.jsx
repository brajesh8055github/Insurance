import { FaPhone } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" text-black text-sm">
      <div className="container mx-auto flex flex-wrap items-center  px-4 md:px-8 py-2">
        
        {/* Left Spaced Content */}
        <div className="pl-4 md:pl-8 flex items-center gap-x-4">
          <a href="#" className="text-black hover:underline whitespace-nowrap">
            Skip to main content
          </a>
        </div>

        {/* Toll-Free Contact */}
        <div className="flex items-center gap-x-2">
          <FaPhone className="text-black" />
          <span className="font-bold">1800 118 485</span> <span>(Toll Free)</span>
        </div>

        {/* Font Size Controls */}
        <div className="flex items-center gap-x-2">
          <span>Font Size:</span>
          <button className="border px-2 py-1 bg-white hover:bg-gray-200">A</button>
          <button className="border px-2 py-1 bg-white hover:bg-gray-200">A-</button>
          <button className="border px-2 py-1 bg-white hover:bg-gray-200">A+</button>
        </div>

        {/* Normal Charges Contact */}
        <div className="flex items-center gap-x-2">
          <FaPhone className="text-black" />
          <span className="font-bold">011-33208485</span> <span>(Normal Charges Apply)</span>
        </div>

        {/* Language Selector */}
        <select className="border px-2 py-1 bg-white">
          <option>English</option>
          <option>Hindi</option>
        </select>

      </div>
    </div>
  );
};

export default Banner;
