import AboutYouForm from "./AboutYouForm";
const AboutYou = () => {
  return (
    <div className=" w-full lg:w-[80%] xl:w-[85%]">
      <div className="mb-[28px] ">
        <h1 className="font-bold text-2xl md:text-3xl mb-0.5 md:mb-[5px]">Tell us about you</h1>
        <p className="font-semibold text-base md:text-[1.05rem] leading-6 text-[#36474F] ">
          We’ll like to know more about you, this will help us serve you better
        </p>
      </div>
      <AboutYouForm />
    </div>
  );
};

export default AboutYou;
