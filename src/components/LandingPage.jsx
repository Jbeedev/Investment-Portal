import React from "react";
import HeroSection from "./HeroSection";
import TradingImg_2 from "../components/assets/images/TradingImg_2.png";
import TradingImg from "../components/assets/images/TradingImg.png";
import { SiGmail, SiSlack, SiResearchgate } from "react-icons/si";
import { FcComboChart } from "react-icons/fc";
import { FaArchway, FaCalendarCheck } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import ProductSection from "./ProductSection";
import TestimonialSection from "./TestimonialSection";
import Faq from "./Faq";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />

      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
              TRUSTED BY
            </h1>

            <section class="text-gray-600 body-font">
              <div class="container px-5 py-16 mx-auto">
                <div class="flex flex-wrap -m-4 text-center">
                  <div class="p-4 sm:w-1/6 w-1/2">
                    <SiGmail size={60} />
                  </div>
                  <div class="p-4 sm:w-1/6 w-1/2">
                    <SiSlack size={60} />
                  </div>
                  <div class="p-4 sm:w-1/6 w-1/2">
                    <FcComboChart size={60} />
                  </div>
                  <div class="p-4 sm:w-1/6 w-1/2">
                    <FaArchway size={60} />
                  </div>
                  <div class="p-4 sm:w-1/6 w-1/2">
                    <SiResearchgate size={60} />
                  </div>
                  <div class="p-4 sm:w-1/6 w-1/2">
                    <FaCalendarCheck size={60} />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/2 md:w-1/2 p-4">
              <img src={TradingImg} alt="trading" />
            </div>

            <div class="xl:w-1/2 md:w-1/2 p-4">
              <div class=" p-6 ">
                <h1 className=" md:text-4xl text-3xl font-semibold">Why Invest with TenPlus Lab</h1>
                <p className="text-lg my-10">
                  TLIS is revolutionizing battery technology from the ground up
                  with the world’s first AMV Cube Cell, capable of charging from
                  0-100% in less than 15 minutes and providing consistent
                  performance in any environment. ATLIS Energy, a stand-alone
                  business unit with over $300 million in battery cell and pack
                  commitments, enables us to reimagine what a work vehicle looks
                  like with the ATLIS XT pickup truck and bring the future
                  standard of vehicle capabilities to alternative mobility
                  markets such as box trucks and emergency vehicles with the XP
                  Platform.
                </p>
                <button className="inline-flex font-semibold text-xl items-center text-white bg-[#096DD9] border-0 py-2 px-6 rounded">
                  Invest now{" "}
                  <span className="ml-2">
                    <BsArrowRightShort />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <section class="text-gray-600 body-font">
            <div class="container  py-24 mx-auto flex flex-wrap">
              <div class="flex flex-wrap w-full">
                <div class="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6  ">
                  <h1 className="md:text-4xl text-3xl font-semibold">How to Invest</h1>
                  <p className="pt-5 pb-16 text-lg">
                    TLIS is revolutionizing battery technology from the ground
                    up with the world’s first AMV Cube Cell, capable of charging
                    from 0-100% in less than 15 minutes and{" "}
                  </p>
                  <div class="flex relative pb-6">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#096DD9] inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-semibold  text-2xl text-gray-900">
                        Register
                      </h2>
                      <p class="leading-relaxed">
                        Register to see more investment options
                      </p>
                    </div>
                  </div>
                  <div class="flex relative pb-6">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#096DD9] inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-semibold text-2xl text-gray-900">
                        Pick an assets
                      </h2>
                      <p class="leading-relaxed">
                        See more of our assets like; Software, Hardware, Real
                        estate, and others
                      </p>
                    </div>
                  </div>
                  <div class="flex relative pb-6">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#096DD9] inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-semibold text-2xl text-gray-900">
                        View prototype
                      </h2>
                      <p class="leading-relaxed">
                        check the prototype of the investent options. schedule a
                        meeting, etal.
                      </p>
                    </div>
                  </div>

                  <div class="flex relative">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#096DD9] inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-semibold text-2xl text-gray-900 ">
                        Invest
                      </h2>
                      <p class="leading-relaxed">
                        start investing to earn mothly ROI
                      </p>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/2 md:w-1/2 px-4">
                  <img src={TradingImg_2} alt="trading" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ProductSection />
      <TestimonialSection />
      <div className="bg-[#F3F4F5]">
        <Faq />
      </div>

      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class=" sm:text-4xl text-5xl mb-16 font-medium">
            Stay Updated
          </h1>
          <div class="flex w-full justify-center items-end">
            <div class="sm:text-xs relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Email"
                class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="inline-flex text-white bg-[#01313F] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
