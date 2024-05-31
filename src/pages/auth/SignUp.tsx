import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.";
const SignUp = () => {
  return (
    <div className="w-[90%]">
      <div className="mb-[30px] ">
        <h1 className="font-bold text-3xl mb-[5px] ">Create your account</h1>
        <p className="font-semibold text-lg text-[#36474F] ">
          Already have an account?{" "}
          <Link to="/login" className="text-[#DA281C]">
            Log In
          </Link>
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
