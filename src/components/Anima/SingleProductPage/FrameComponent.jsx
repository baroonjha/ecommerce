import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
import { useState } from "react";


const FrameComponent = ({ className = "" }) => {
  const [activeImage,setActiveImage] = useState('https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A')
  const handleImage=(e)=>{
    setActiveImage(e.target.src)
  }
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-500 ${className}`}
    >
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
        <div className="h-[558px] w-20 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[56px]">
            <div className="flex flex-row items-start justify-start py-0 px-7">
              <IoIosArrowUp className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"/>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                loading="lazy"
                alt=""
                src="https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A"
                onClick={handleImage}
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                loading="lazy"
                alt=""
                src="https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A"
                onClick={handleImage}
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                loading="lazy"
                alt=""
                src="https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A"
                onClick={handleImage}
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                loading="lazy"
                alt=""
                src="https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A"
                onClick={handleImage}
              />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-7">
            <IoIosArrowDown className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"/>
            </div>
          </div>
        </div>
        <div className="h-[558px] w-[568px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-3 pl-0 box-border max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={activeImage}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[421px] max-w-full mq750:min-w-full">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-17xl">
            <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="flex flex-row items-center justify-start gap-[8px] max-w-full mq450:flex-wrap">
                <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[26px] mq1050:text-10xl mq1050:leading-[35px]">
                  Pure Cotton Shirt
                </h1>
                <div className="rounded bg-limegreen-100 flex flex-row items-center justify-center py-1 px-2 whitespace-nowrap text-sm text-branding-success-dark">
                  <div className="relative leading-[150%] inline-block min-w-[55px]">
                    In Stock
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-sm text-gray-scale-gray-600">
                <div className="flex flex-row items-center justify-start">
                  {/* <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/star-1.svg"
                  /> */}
                  * * * *
                  <div className="relative leading-[150%] inline-block min-w-[65px]">
                    {" "}
                    4 Review
                  </div>
                </div>
                <div className="relative leading-[150%] font-medium text-gray-scale-gray-300 inline-block min-w-[7px]">
                  •
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-gray-scale-gray-800">
                  <div className="relative leading-[150%] font-medium inline-block min-w-[31px]">
                    SKU:
                  </div>
                  <div className="relative leading-[150%] text-gray-scale-gray-600 inline-block min-w-[54px]">
                    2,51,594
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[12px] text-xl text-gray-scale-gray-300">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative [text-decoration:line-through] leading-[150%] inline-block min-w-[67px] whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                  Rs.4999
                </div>
              </div>
              <div className="relative text-5xl leading-[150%] font-medium text-branding-success-dark inline-block min-w-[73px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                Rs.1999
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 text-sm text-branding-error">
              <div className="rounded-11xl bg-tomato flex flex-row items-start justify-start py-[3px] px-2.5 whitespace-nowrap">
                <div className="relative leading-[150%] font-medium inline-block min-w-[54px]">
                  60% Off
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-2 flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
            <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gray-scale-gray-100" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="w-[109px] flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0">
                <div className="relative leading-[150%] inline-block min-w-[45px]">
                  Brand:
                </div>
              </div>
              <div className="flex-1 rounded bg-gray-scale-white flex flex-col items-start justify-start pt-3.5 px-[7px] pb-[13px] gap-[1.9px] text-smi text-dimgray font-dancing-script border-[0.8px] border-solid border-gray-scale-gray-100">
                <div className="w-14 h-14 relative rounded bg-gray-scale-white box-border hidden border-[0.8px] border-solid border-gray-scale-gray-100" />
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <img
                    className="h-[12.2px] w-8 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-20@2x.png"
                  />
                </div>
                <b className="relative leading-[100%] inline-block min-w-[40px] z-[1]">
                  PearX
                </b>
              </div>
            </div>
            <div className="w-[264px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                <div className="flex flex-col items-start justify-start pt-[9.5px] pb-0 pr-[5px] pl-0">
                  <div className="relative leading-[150%] inline-block min-w-[79px]">
                    Share item:
                  </div>
                </div>
                
                <FaWhatsapp
                  className="h-10 w-10 relative rounded-481xl min-h-[40px]"
                  loading="lazy"
                />
                <CiFacebook
                  className="h-10 w-10 relative rounded-481xl min-h-[40px]"
                  loading="lazy"
                />
                <FaInstagram
                  className="h-10 w-10 relative rounded-481xl min-h-[40px]"
                  loading="lazy"
                  
                />
              </div>
            </div>
          </div>
          <div className="w-[568px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray-scale-gray-500">
            <div className="flex-1 relative leading-[150%] inline-block max-w-full">{`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. `}</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-center text-base">
            <div className="flex-1 shadow-[0px_-1px_0px_#e6e6e6,_0px_1px_0px_#e6e6e6] bg-gray-scale-white box-border flex flex-row items-start justify-start py-4 px-0 gap-[12px] max-w-full border-[1px] border-solid border-gray-scale-white mq750:flex-wrap">
              <div className="w-[124px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch rounded-151xl bg-gray-scale-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="h-[34px] w-[34px] relative cursor-pointer">
                    <div className="absolute top-[0px] left-[0px] rounded-151xl bg-gray-scale-gray-50 w-full h-full flex justify-center items-center text-3xl">+</div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="self-stretch relative leading-[150%]">
                      1
                    </div>
                  </div>
                  <div className="h-[34px] w-[34px] relative cursor-pointer">
                    <div className="absolute top-[0px] left-[0px] rounded-151xl bg-gray-scale-gray-50 w-full h-full flex justify-center items-center text-3xl" >-</div>
                  </div>
                </div>
              </div>
              <Button
                className="h-[51px] flex-1 min-w-[291px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
                endIcon={
                  <SlHandbag width="15px" height="15px" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#00b307",
                  borderRadius: "43px",
                  "&:hover": { background: "#00b307" },
                  height: 51,
                }}
              >
                Add to Cart
              </Button>
              <div className="h-[52px] w-[52px] rounded-24xl bg-limegreen-200 flex flex-row items-start justify-start p-4 box-border cursor-pointer">
                <FaRegHeart
                  className="h-5 w-5 relative "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[70px]">
                Category:
              </div>
              <div className="relative leading-[150%] text-gray-scale-gray-500 inline-block min-w-[80px]">
                Cloths
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px] text-gray-scale-gray-500 mq450:flex-wrap">
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900 inline-block min-w-[31px]">
                Tag:
              </div>
              <div className="relative leading-[150%] inline-block min-w-[80px]">
                cotton
              </div>
              <div className="relative leading-[150%] inline-block min-w-[54px]">
                newlaucnh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
