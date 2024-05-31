import AboutYouForm from "./AboutYouForm";
const AboutYou = () => {
  return (
    <div className=" w-[772px]">
      <div className="mb-[80px] ">
        <h1 className="font-bold text-[48px] leading-[58.09px] mb-[16px] ">
          Tell us about you
        </h1>
        <p className="font-semibold text-[24px] leading-[36px] text-neutral-800 ">
          We’ll like to know more about you, this will help us serve you better
        </p>
      </div>
      <AboutYouForm />
    </div>
  );
};

export default AboutYou;
