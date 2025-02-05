import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import post1 from '../Photos/post01_f09c2e6b7e.png';
import post2 from '../Photos/post02_5bfdb18991.png';

const Hero = () => {
  const [vehicleType, setVehicleType] = useState("existing");
  const images = [post1, post2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
        
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left border-r pr-2">
              <h1 className="text-5xl font-bold text-orange-500">Oriental</h1>
              <h2 className="text-4xl font-bold text-blue-500 mt-2">Insurance</h2>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-600">Prithvi, Agni, Jal, Aakash</p>
              <p className="text-lg text-orange-500 font-semibold">Sab ki suraksha hamare paas</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">
              Insure Your Vehicle <span className="text-blue-600 font-bold">NOW!</span>
            </h2>

            <div className="flex space-x-4 mt-4">
              {["Existing Vehicle", "Brand New Vehicle", "OICL Renewal"].map((type, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="vehicleType"
                    value={type.toLowerCase()}
                    checked={vehicleType === type.toLowerCase()}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="accent-orange-500"
                  />
                  <span className={`${index === 0 ? "text-orange-500 font-semibold" : ""}`}>{type}</span>
                </label>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block font-semibold">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border-b-2 p-2 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border-b-2 p-2">
                  <input
                    type="tel"
                    placeholder="+91 - Mobile Number"
                    className="w-full outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-orange-500" />
                <span>
                  I accept <a href="#" className="text-orange-500 underline">Terms & Conditions</a>
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-orange-500" />
                <span className="flex items-center">
                  Get updates on WhatsApp <FaWhatsapp className="text-green-500 ml-1" />
                </span>
              </label>
            </div>

            <div className="mt-6">
              <button className="bg-orange-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-orange-600 w-full md:w-auto">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-w-[80%] lg:max-w-[100%] h-auto transition-opacity duration-1000 ease-in-out"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
