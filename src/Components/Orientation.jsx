import { useState, useEffect } from "react";
import mobile from "../Photos/mobile-app-img.78a1fc345bb7168b9dfe.png"; 

const Orientation = () => {
  const textItems = [
    { title: "Seamless Experience", desc: "Enjoy secure and hassle-free insurance services with our app." },
    { title: "Instant Policy Access", desc: "Get your policy details anytime, anywhere, with just one tap." },
    { title: "Fast Claim Settlements", desc: "Quick and smooth claim processing to save you time and effort." }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={mobile} alt="Mobile App" className="w-3/4 md:w-full max-w-sm" />
      </div>

    
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Oriental Insurance: Empowering Your Future, One Tap at a Time!
        </h2>

        
        <div className="mt-4 min-h-[80px] transition-opacity duration-500 ease-in-out">
          <h4 className="text-lg md:text-xl font-semibold text-orange-500">
            {textItems[index].title}
          </h4>
          <p className="text-gray-600 mt-2">{textItems[index].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Orientation;
