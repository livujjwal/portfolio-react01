import pic from "../assets/pic.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <div
      name="hero"
      className="h-screen w-full flex items-center justify-center max-md:flex-col"
    >
      <div className="flex items-center justify-center">
        <img className="w-96 h-96 rounded-full p-4" src={pic} alt="pic" />
      </div>
      <div className="max-w-screen-lg max-md:mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="flex flex-col items-center justify-center">
          <h4 className="font-semibold -mb-2 text-gray-600 text-lg">
            Hello, I'm
          </h4>
          <h1 className="font-semibold py-4 text-5xl">Ujjwal Singh</h1>
          <h2 className="font-semibold py-2 text-gray-600 text-3xl">
            Frontend Developer
          </h2>
          <div className="max-md:flex">
            <button className="rounded-3xl border-2 border-black px-4 py-3 m-2 font-lg hover:bg-[#353535] hover:text-white hover:border-gray-700">
              Download Resume
            </button>
            <button className="rounded-3xl border-2 px-10 py-3 m-2 font-lg bg-[#353535] text-white hover:bg-black hover:text-white">
              Contact Info
            </button>
          </div>
          <div className="flex items-center gap-4 py-2">
            <AiFillLinkedin className="w-10 h-10 rounded-full" />
            <AiFillGithub className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
