import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import group1 from "../../../assets/img/feed/group1.png";
import group2 from "../../../assets/img/feed/group2.png";
import group3 from "../../../assets/img/feed/group3.png";
import arrowLeft from "../../../assets/icons/home/arrowLeft.svg";
import arrowRight from "../../../assets/icons/home/arrowRight.svg";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <div className="carousel-button-group absolute w-full flex flex-row-reverse items-center justify-between">
      <button
        className=" h-10 w-10 flex items-center justify-center rounded-full bg-white"
        onClick={() => previous && previous()}
      >
        <img src={arrowLeft} alt="" className="w-[8px] h-[13px] " />
      </button>{" "}
      <button
        className=" h-10 w-10 flex items-center justify-center rounded-full bg-white"
        onClick={() => next && next()}
      >
        <img src={arrowRight} alt="" className="w-[8px] h-[13px] " />
      </button>
    </div>
  );
};

const InterestGroups = () => {
  //! TODO: Refactor Responsiveness
  const responsiveCarousel = {
    lg: {
      breakpoint: { max: 3000, min: 1250 },
      items: 2.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 1250, min: 900 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    xmd: {
      breakpoint: { max: 900, min: 664 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    sm: {
      breakpoint: { max: 664, min: 450 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    xsm: {
      breakpoint: { max: 360, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // Carousel props
  const carouselProps = {
    swipeable: true,
    draggable: false,
    responsive: responsiveCarousel,
    infinite: true,
    autoPlay: true,
    arrows: false,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    pauseOnHover: true,
    customTransition: "transform 600ms ease-in-out",
    transitionDuration: 600,
    removeArrowOnDeviceType: ["tablet", "mobile"],
    rtl: true,
  };
  const interestGroups = [
    {
      id: 1,
      name: "SEO Specialists",
      members: 1000,
      img: group1,
    },
    {
      id: 2,
      name: "SEO Analysts",
      members: 438,
      img: group2,
    },
    {
      id: 3,
      name: "AI Enthusiasts",
      members: 906,
      img: group3,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full text-left">
        <h1 className="font-bold text-black text-2xl">
          Groups That Match Your Interest
        </h1>
        <p className="text-xs text-[#576B74] font-semibold ">
          Hi Victor, these are suggested groups that matches your interest
        </p>
      </div>
      <div className="w-full">
        <div className="max-w-[600px] mx-auto overflow-visible">
          <Carousel {...carouselProps} customButtonGroup={<ButtonGroup />}>
            {interestGroups.map(({ img, members, name, id }) => (
              <div
                key={id}
                className="overflow-hidden flex flex-col w-[230px] h-[230px] rounded-lg"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-[60%] object-cover "
                />
                <div className="w-full h-[40%] bg-white px-2 py-3 flex flex-col">
                  <div className="flex flex-col gap-0.5 mb-3">
                    <h1 className="font-semibold text-sm text-left">{name}</h1>
                    <p className="font-semibold text-xs text-[#36474F] text-left flex items-center gap-1 flex-row-reverse">
                      <span>{members.toLocaleString()}</span> Group Members
                    </p>
                  </div>
                  <div className="flex items-center flex-row-reverse justify-between gap-2 w-full">
                    <button className="py-[4px] px-[10px] h-7 w-[60%] bg-primary-500 text-white rounded text-xs font-semibold">
                      Follow
                    </button>{" "}
                    <button className="py-[4px] px-[10px] h-7 w-[40%] bg-[#E7EAEB] text-[#262520] rounded text-xs font-semibold">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default InterestGroups;
