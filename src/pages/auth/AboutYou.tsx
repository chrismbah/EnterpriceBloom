import AboutYouForm from "./AboutYouForm";
const AboutYou = () => {
  return (
    <div className="w-[80%]">
      <div className="mb-[30px] ">
        <h1 className="font-bold text-3xl mb-[5px] ">Tell us about you</h1>
        <p className="font-semibold text-lg text-neutral-800 ">
          We’ll like to know more about you, this will help us serve you better
        </p>
      </div>
      <AboutYouForm />
    </div>
  );
};

export default AboutYou;
