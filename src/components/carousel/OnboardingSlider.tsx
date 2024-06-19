import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onboardingSlides } from "../../data/onboarding";
export const OnboardingSlider = () => {
  const config = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...config} className="w-[286px] h-[286px] lg:h-[384px] lg:w-[336px]">
      {onboardingSlides.map(({ img, title, desc }, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-full gap-12 "
        >
          <div className="w-full flex items-center justify-center">
            <img
              src={img}
              alt={title}
              className="w-[300px] h-[250px] object-cover"
            />
          </div>
          <div className="flex items-center flex-col justify-center w-full gap-[12px] ">
            <h1 className="font-bold text-2xl tracking-[0.5px] text-center text-white">
              {title}
            </h1>
            <p className="font-medium text-center text-[#F8D4D2] text-sm">{desc}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
