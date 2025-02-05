import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../Photos/global_india_03336ead15.png';
import s2 from '../Photos/gramcover_b8d2b50ac9.png';
import s3 from '../Photos/logo_5_072aa5d4bf.png';
import s4 from '../Photos/mahindra_ff06d41e53.png';
import s5 from '../Photos/Paytm_21f0f48882.png';
import s6 from '../Photos/Policy_Bazar_e58a25e84d.png';
import s7 from '../Photos/risk_care_f3ac0537cd.png';

const partners = [s1, s2, s3, s4, s5, s6, s7];

const Partner = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    appendDots: dots => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full bg-amber-50 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Trusted Partners
      </h2>
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {partners.map((logo, index) => (
            <div key={index} className="px-4">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-full h-20 md:h-24 lg:h-28 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
