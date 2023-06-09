import HeroImage from "../components/assets/images/young-african-man.png";
import SoftImg from "../components/assets/images/softwareImg.png";
import HardImg from "../components/assets/images/hardwareImg.png";
import RealImg from "../components/assets/images/realestateImg.png";
import OthersImg from "../components/assets/images/othersImg.png";
import PlayIcon from "../components/assets/images/play_circle_outline.png";

const HeroSection = () => {
  return (
    <section className="text-white body-font bg-[#01313F] ">
      <div className="  w-full text-white container mx-auto flex flex-1 px-5 pt-24 md:flex-row flex-col items-cente">
        <div className=" lg:flex-grow md:w-1/2 basis-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-6xl font-bold mb-4">
            welcome to tenplus
            <br className="hidden lg:inline-block" />
            labs Investment
          </h1>
          <p className="mb-8 text-2xl font-normal md:text-xl ">
            building and refining africa through creativity, innovative
            technology, artificial intelligent.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center text-white bg-[#096DD9] border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Invest now
            </button>
            <img src={PlayIcon} alt="" className="w-14 h-14 ml-2" />
          </div>

          <div className="">
            <p className="mt-16 mb-8 text-3xl font-medium leading-relaxed">Investment Summary</p>
            <div className="pb-24 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <img src={SoftImg} alt="software" />
                  <p className="leading-relaxed text-white text-sm">Software</p>
                  <p className="leading-relaxed text-[#096DD9]">100+</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <img src={HardImg} alt="hardware" />
                  <p className="leading-relaxed text-white text-sm">Hardware</p>
                  <p className="leading-relaxed text-[#096DD9]">50+</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <img src={RealImg} alt="hardware" />
                  <p className="leading-relaxed text-white text-sm">
                    Real estates
                  </p>
                  <p className="leading-relaxed text-[#096DD9]">1000+</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <img src={OthersImg} alt="hardware" />
                  <p className="leading-relaxed text-white text-sm">Others+</p>
                  <p className="leading-relaxed text-[#096DD9]">10+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2 lg:w-full md:w-1/2">
          <img className="object-cover h-full  " alt="hero" src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
