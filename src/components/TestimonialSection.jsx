import UserImg from "../components/assets/images/UserImg.png";
import TestimonialImg from "../components/assets/images/TestimonialImg.png";
import DiverseStudents from "../components/assets/images/diverse-students.png";
import { BsArrowRightShort } from "react-icons/bs";
import {
  BsDot
} from "react-icons/bs";

const TestimonialSection = () => {
  const testimonialItems = [
    {
      id: 1,
      title: "Fast and reliable",
      icon: UserImg,
      text: "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
      bgColor: "bg-[#01313F]",
    },
    {
      id: 2,
      title: "Secure Payments",
      icon: UserImg,
      text: "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
      bgColor: "bg-[#E2B140]",
    },
    {
      id: 3,
      title: "Bank Level Security",
      icon: UserImg,
      text: "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
      bgColor: "bg-[#2E58C2]",
    },
  ];

  const Testimonial = [
    {
      id: 1,
      name: "Morris Joan",
      message:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings  and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      image: TestimonialImg,
    },
    {
      id: 2,
      name: "Morris Joan",
      message:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings  and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      image: TestimonialImg,
    },
    {
      id: 3,
      name: "Morris Joan",
      message:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings  and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      image: TestimonialImg,
    },
  ];

  return (
    <div className="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        {testimonialItems.map(({ id, icon, text, bgColor, title }) => (
          <div
            key={id}
            class="lg:w-1/3 sm:w-1/2 p-4 flex flex-col items-center justify-center"
          >
            <div class={`flex relative ${bgColor} rounded-xl`}>
              <div class=" pt-10 pb-5 w-full flex flex-col items-center font-medium justify-center  px-8 py-10">
                <img src={icon} alt="" />
                <h2 class=" title-font mt-10 mb-5 font-medium text-3xl text-white">
                  {title}
                </h2>
                <p class=" text-white text-lg font-normal">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex items-center justify-center mt-20 gap-4">
          <BsDot size={30} />
          <BsDot size={30} />
          <BsDot size={30} />
        </div>
      <section class="text-gray-600 body-font">
        <div class="container px-10 py-24 mx-auto">
          <h1 class="text-5xl font-semibold title-font mb-12 text-center">
            Hear from our past investors
          </h1>
          <p class=" mb-12 text-center">
            Our mission at TenPlus Investment Lab is to empower more people just
            like you to achieve your personal financial goals.
          </p>
          <div class="flex flex-wrap -m-4">
            {Testimonial.map(({ id, message, name, image }) => (
              <div key={id} class="p-4 md:w-1/3 w-full">
                <div class="h-full p-8 border border-[#636060]">
                  <p class="text-lg mb-6">{message}</p>
                  <a class="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src={image}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="text-xl font-medium text-gray-900">
                        {name}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Join The TenPlus Lab Community
            </h1>
            <p class="mb-8 leading-relaxed">
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It's completely
              free and open to new and seasoned investors.
            </p>
            <div class="flex justify-center">
              <button class="ml- inline-flex text-white items-center justify-center bg-[#096DD9] border-0 py-2 px-6 focus:outline-none hover:bg-[#027afc] rounded text-lg">
                Invest now{" "}
                <span className="ml-2">
                  <BsArrowRightShort />
                </span>
              </button>
            </div>
          </div>
          <div class=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={DiverseStudents}
            />
            <div className="w-36 h-36 absolute -left-8 -bottom-8 -z-40 bg-[#096DD9]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
