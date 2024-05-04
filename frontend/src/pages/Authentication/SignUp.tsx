// import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

function SignUp() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };
  return (
    <div className="min-h-screen flex">
      <button
        className="w-full flex items-center justify-start font-poppins text-primary font-medium hover:text-secondary"
        onClick={handleGoBack}
      >
        <MdChevronLeft className="h-6 w-6" />
        Back
      </button>
      <div className="hidden md:block md:w-1/2">
        <div className="relative w-full h-full">
          <img
            src="../../offer2.jpg"
            alt="Wedding"
            className="w-full h-full object-cover rounded-tl-32 rounded-bl-32"
          />
        </div>
      </div>
    </div>
  );
}
export default SignUp;
