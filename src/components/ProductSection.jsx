import SoftImg from "../components/assets/images/softwareImg.png";
import HardImg from "../components/assets/images/hardwareImg.png";
import RealImg from "../components/assets/images/realestateImg.png";
import OthersImg from "../components/assets/images/othersImg.png";
import ProductImg from "../components/assets/images/ProductImg.png";
import { BsArrowRightShort } from "react-icons/bs";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const ProductSection = () => {
  const productItems = [
    {
      id: 1,
      details:
        "TLIS is revolutionizing battery technology from the ground up with the world's first AMV Cube Cell",
      image: ProductImg,
    },
    {
      id: 2,
      details:
        "TLIS is revolutionizing battery technology from the ground up with the world's first AMV Cube Cell",
      image: ProductImg,
      style: "-mt-24",
    },
    {
      id: 3,
      details:
        "TLIS is revolutionizing battery technology from the ground up with the world's first AMV Cube Cell",
      image: ProductImg,
    },
    {
      id: 4,
      details:
        "TLIS is revolutionizing battery technology from the ground up with the world's first AMV Cube Cell",
      image: ProductImg,
    },
    {
      id: 5,
      details:
        "TLIS is revolutionizing battery technology from the ground up with the world's first AMV Cube Cell",
      image: ProductImg,
      style: "-mt-24",
    },
    {
      id: 6,
      details:
        "TLIS is revolutionizing battery technology from the ground up with the world's first AMV Cube Cell",
      image: ProductImg,
    },
  ];

  const services = [
    { id: 1, image: SoftImg, title: "Software" },
    { id: 2, image: HardImg, title: "Hardware" },
    { id: 3, image: RealImg, title: "Real estates" },
    { id: 4, image: OthersImg, title: "Others+" },
  ];

  return (
    <section class="text-gray-600 body-font bg-[#F3F4F5]">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-16">
          <h1 class="sm:text-3xl text-2xl md:text-4xl font-semibold title-font mb-4 text-gray-900">
            Our Products
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            TLIS is revolutionizing battery technology from the ground up with
            the world’s first AMV Cube Cell, capable of charging from 0-100% in
            less than 15 minutes and
          </p>
        </div>

        <div className="w-1/2 mx-auto text-gray-600 body-font">
          <div className="container ">
            <div className="flex flex-wrap mx-auto -m-4 text-center">
              {services.map(({ id, image, title }) => (
                <div key={id} className="p-4 sm:w-1/4 w-1/2">
                  <img src={image} alt="software" />
                  <p className="leading-relaxed text-black text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 bg-white rounded-3xl justify-between mt-28 ">
          <button className="hover:bg-[#76D7FA] bg-[#76D7FA] py-2 px-10 text-black rounded-3xl">Active</button>
            <button className=" py-2 px-10 text-black rounded-3xl">Hotlist</button>
            <button className=" py-2 px-10 text-black rounded-3xl">Missed</button>
          </div>
        </div>
        <div class="flex flex-wrap mt-24">
          {productItems.map(({ id, image, details, style }) => (
            <div
              key={id}
              className={`lg:w-1/3 sm:w-1/2 p-4 flex flex-col items-center justify-center ${style}`}
            >
              <div class="flex relative">
                <div class="px-8 pt-10 pb-5 w-full">
                  <img src={image} alt="product" />
                </div>
              </div>
              <p className="px-8 text-xl">{details} </p>
              <button className="inline-flex items-center mt-5 text-white bg-[#096DD9] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Invest now{" "}
                <span className="ml-2">
                  <BsArrowRightShort />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center pb-20 justify-center gap-4">
        <HiOutlineArrowNarrowLeft size={30} />
        <HiOutlineArrowNarrowRight size={30} />
      </div>
    </section>
  );
};

export default ProductSection;
