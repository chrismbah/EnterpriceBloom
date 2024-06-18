import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import expert1 from "../../../assets/img/feed/user1.png";
import expert2 from "../../../assets/img/feed/user2.png";
import expert3 from "../../../assets/img/feed/user.png";
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

const FeaturedExperts = () => {
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
  const experts = [
    {
      id: 1,
      name: "Leonard Victor",
      title: "SEO Expert",
      img: expert1,
    },
    {
      id: 2,
      name: "Kalu Dillion",
      title: "Marketing Strategist",
      img: expert2,
    },
    {
      id: 3,
      name: "Alex Hamilton",
      title: "AI Engineer",
      img: expert3,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full text-left">
        <h1 className="font-bold text-black text-2xl">
          Featured Experts Of The Week{" "}
        </h1>
        <p className="text-xs text-[#576B74] font-semibold ">
          Explore what the world is searching for right now
        </p>
      </div>
      <div className="w-full">
        <div className="max-w-[600px] mx-auto overflow-visible">
          <Carousel {...carouselProps} customButtonGroup={<ButtonGroup />}>
            {experts.map(({ img, title, name, id }) => (
              <div
                key={id}
                className="overflow-hidden flex flex-col w-[230px] h-[250px] rounded-lg"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-[70%] object-cover "
                />
                <div className="w-full h-[30%] bg-white px-2 py-3 flex flex-row-reverse justify-between items-center ">
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-sm text-left">{name}</h1>
                    <h2 className="text-xs font-semibold text-[#36474F] text-left">
                      {title}
                    </h2>
                  </div>
                  <button className="py-[4px] px-[10px] h-fit bg-primary-500 text-white rounded text-xs font-semibold">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturedExperts;
