/* eslint-disable react/no-unknown-property */
import { createFileRoute } from "@tanstack/react-router";
import { BgSectionHomeDesk, BgSectionHomeMob } from "../utils";
import Navbar from "../components/Navbar";
import { dropdown, services } from "../constants";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(useGSAP);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    if (activeIndex !== null) {
      gsap.from(".description", {
        opacity: 0,
        y: -20,
        duration: 0.5,
      });
    }
  }, [activeIndex]);

  const handleToggle = (index) => {
    // If the same index is clicked, toggle it off (close it)
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index); // Otherwise, set the clicked index as active
    }
  };

  return (
    <main className="w-screen">
      <section className="w-screen h-screen ">
        <div className="w-full -z-10 h-full absolute sm:hidden">
          <img src={BgSectionHomeMob} className="w-full h-full   " />
        </div>
        <div className="w-full -z-10 h-full absolute hidden sm:block">
          <img
            src={BgSectionHomeDesk}
            className="w-full h-full object-contain   "
          />
        </div>
        <Navbar />
        <div className="w-screen h-2/3   flex justify-center ">
          <div className="w-5/6  h-full font-bold text-[3.4rem] text-white">
            High quality <br /> IT-Solutions for help your problems about
            technology
          </div>
        </div>
        <div className="w-screen flex justify-center   h-1/6  ">
          <div className="w-5/6  ">
            <div className="bg-white w-60 h-16 rounded-full flex  justify-evenly items-center">
              <div className="h-full flex justify-center Headline font-bold items-center">
                Let&apos;s do it
              </div>
              <div className="h-full flex justify-center items-center ">
                <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
                  <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                    <div className="bg-blue-200 flex items-center gap-1 p-2 rounded-md">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-zinc-600"
                      >
                        <circle
                          stroke-linejoin="round"
                          r="9"
                          cy="12"
                          cx="12"
                        ></circle>
                        <path
                          stroke-linejoin="round"
                          d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
                        ></path>
                        <path stroke-linejoin="round" d="M3 12H21"></path>
                        <path stroke-linejoin="round" d="M19.5 7.5H4.5"></path>
                        <g filter="url(#filter0_d_15_556)">
                          <path
                            stroke-linejoin="round"
                            d="M19.5 16.5H4.5"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="3"
                            width="17"
                            y="16"
                            x="3.5"
                            id="filter0_d_15_556"
                          >
                            <feFlood
                              result="BackgroundImageFix"
                              flood-opacity="0"
                            ></feFlood>
                            <feColorMatrix
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              type="matrix"
                              in="SourceAlpha"
                            ></feColorMatrix>
                            <feOffset dy="1"></feOffset>
                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              type="matrix"
                            ></feColorMatrix>
                            <feBlend
                              result="effect1_dropShadow_15_556"
                              in2="BackgroundImageFix"
                              mode="normal"
                            ></feBlend>
                            <feBlend
                              result="shape"
                              in2="effect1_dropShadow_15_556"
                              in="SourceGraphic"
                              mode="normal"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                      <span>I-PRIDE</span>
                    </div>
                    <div className="shadow-md bg-blue-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                    <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                      <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                    </div>
                  </div>

                  <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-blue-200 to-purple-200 p-3 rounded-full cursor-pointer duration-300">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-zinc-600"
                    >
                      <path
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                      ></path>
                    </svg>
                    <span className="text-[0px] group-hover:text-sm duration-300">
                      Contact us
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen px-5 mb-8">
        <div className="flex flex-col mb-5">
          <h1 className="flex justify-center items-center text-lg text-[#624DE7] font-semibold my-2">
            Services
          </h1>
          <h5 className="flex justify-center items-center text-center font-extrabold text-4xl px-5">
            We provide All-in-one Solution for every IT job
          </h5>
        </div>
        <div className="cards flex flex-col items-center">
          {services.map((el, idx) => (
            <div
              key={idx}
              className="w-3/4 h-[40vh] flex flex-col items-center justify-between border-t-4 border-[#624DE7] shadow-md shadow-gray-200 p-10 rounded-md rounded-br-[50px] mb-5"
            >
              <div className=" flex flex-col ">
                <h1 className="text-3xl font-bold text-[#624DE7] mb-2">
                  {el.cardTitle}
                </h1>
                <p className="text-sm text-gray-700 font-normal ">
                  {el.cardDescription}
                </p>
              </div>
              <div className="text-xl font-bold">Learn More </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-screen h-screen px-5">
        <div className="flex flex-col">
          <h1 className="flex justify-center items-center text-lg text-[#624DE7] font-semibold mb-2">
            Why Us
          </h1>
          <h5 className="flex justify-center items-center text-center font-bold text-3xl mb-2">
            We have over 9+ Years in the Tech Industry
          </h5>
          <p className="text-md text-gray-700 px-7 font-normal ">
            We are committed to delivering exceptional technology solutions with
            a focus on innovation, quality, and customer satisfaction.
          </p>
        </div>
        <div className="px-12 mt-3">
          {dropdown.map((el, idx) => (
            <div key={idx} className="mb-2">
              <h1
                onClick={() => handleToggle(idx)}
                className="text-lg font-bold cursor-pointer"
              >
                {activeIndex === idx ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={`text-[#624DE7] font-bold transition-all duration-200`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={`text-[#624DE7] rotate-45 font-bold transition-all duration-200`}
                  />
                )}
                &nbsp; {el.title}
              </h1>
              {activeIndex === idx && (
                <div className="p-2 description rounded-md">
                  {el.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
