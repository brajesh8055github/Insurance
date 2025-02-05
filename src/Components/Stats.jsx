import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaFileAlt, FaHandHoldingUsd, FaTools, FaHospital, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: <FaFileAlt className="text-orange-500 text-4xl" />, value: 7160034, label: "Policies Issued" },
  { icon: <FaHandHoldingUsd className="text-orange-500 text-4xl" />, value: 3220573, label: "Claims Settled" },
  { icon: <FaTools className="text-orange-500 text-4xl" />, value: 7926, label: "Cashless Workshops", link: "View Network Garages" },
  { icon: <FaHospital className="text-orange-500 text-4xl" />, value: 4000, label: "Network Hospitals", link: "View Network Hospitals" },
  { icon: <FaGlobe className="text-orange-500 text-4xl" />, value: 1000, label: "Offices", link: "View Offices" },
  { icon: <FaFileAlt className="text-orange-500 text-4xl" />, value: 95.49, label: "Settlement Ratio", decimals: 2 }
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            {item.icon}
            <h2 className="text-2xl font-bold mt-2">
              {inView ? (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  separator=","
                  decimals={item.decimals || 0}
                  className="text-black"
                />
              ) : (
                "0"
              )}
            </h2>
            <p className="text-gray-600">{item.label}</p>
            {item.link && <a href="#" className="text-orange-500 mt-2 hover:underline">{item.link}</a>}
          </div>
        ))}
      </div>
    </div>
  );
}
