import PropTypes from "prop-types";

const ProductDescription = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-gray-scale-gray-500 font-body-small-body-small-500 ${className}`}
    >
      <div className="w-[1320px] flex flex-row items-start justify-center gap-[135px] max-w-full lg:flex-wrap lg:gap-[67px] mq750:gap-[34px] mq450:gap-[17px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[421px] max-w-full mq750:min-w-full">
          <div className="self-stretch relative leading-[150%]">
            <p className="m-0">
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla
              facilisi. Nam scelerisque vitae justo a convallis. Morbi urna
              ipsum, placerat quis commodo quis, egestas elementum leo. Donec
              convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla
              elit.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. `}</p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 w-5 relative overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                <input
                  className="m-0 absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] overflow-hidden z-[1]"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative leading-[20px] inline-block min-w-[165px] max-w-full">
                100 g of fresh leaves provides.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 w-5 relative overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                <input
                  className="m-0 absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] overflow-hidden z-[1]"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative leading-[20px] inline-block min-w-[257px] max-w-full">
                Aliquam ac est at augue volutpat elementum.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 w-5 relative overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                <input
                  className="m-0 absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] overflow-hidden z-[1]"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative leading-[20px] inline-block min-w-[223px] max-w-full">
                Quisque nec enim eget sapien molestie.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 w-5 relative overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                <input
                  className="m-0 absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] overflow-hidden z-[1]"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative leading-[20px] inline-block min-w-[247px] max-w-full">
                Proin convallis odio volutpat finibus posuere.
              </div>
            </div>
          </div>
          <div className="self-stretch relative leading-[150%]">{`Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. `}</div>
        </div>
        {/* <div className="w-[537px] flex flex-col items-end justify-start gap-[20px] min-w-[537px] max-w-full text-gray-scale-gray-900 lg:flex-1 mq750:min-w-full"> */}
          {/* <img
            className="self-stretch h-[300px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/video.svg"
          /> */}
          {/* <div className="self-stretch rounded-md bg-gray-scale-white flex flex-row items-center justify-between py-[22px] px-5 gap-[20px] border-[1px] border-solid border-gray-scale-gray-100 mq750:flex-wrap">
            <div className="flex flex-row items-center justify-center gap-[12px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/pricetag-1.svg"
              />
              <div className="flex flex-col items-start justify-center gap-[6px]">
                <div className="relative leading-[150%] font-medium inline-block min-w-[95px]">
                  64% Discount
                </div>
                <div className="relative text-smi leading-[20px] text-gray-scale-gray-500">
                  Save your 64% money with us
                </div>
              </div>
            </div>
            <div className="w-[233px] flex flex-row items-center justify-center gap-[12px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/leaf-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
                <div className="relative leading-[150%] font-medium inline-block min-w-[95px]">
                  100% Organic
                </div>
                <div className="self-stretch relative text-smi leading-[20px] text-gray-scale-gray-500">
                  100% Organic Vegetables
                </div>
              </div>
            </div>
          </div> */}


        {/* </div> */}
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  className: PropTypes.string,
};

export default ProductDescription;
