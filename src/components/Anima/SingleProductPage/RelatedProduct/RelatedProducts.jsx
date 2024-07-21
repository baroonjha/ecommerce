// import ProductInfo from "./ProductInfo";
// import Product4x from "./Product4x";
import PropTypes from "prop-types";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const RelatedProducts = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-sm text-gray-scale-gray-500 font-body-small-body-small-500 mq925:pb-[34px] mq925:box-border mq1350:pb-[52px] mq1350:box-border  mt-[30px] pt-[10px]`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-13xl text-gray-scale-gray-900 mq925:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 mq450:gap-[553px] text-5xl">
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold mq450:text-lgi mq450:leading-[23px] mq925:text-7xl mq925:leading-[31px] ">
            Related Products
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(4,_minmax(234px,_1fr))] text-sm text-gray-scale-white mq450:grid-cols-[minmax(234px,_1fr)] mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(234px,_406px))]">
          <div className="h-[407px] rounded-lg bg-gray-scale-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[95px] gap-[0.5px] border-[1px] border-solid border-gray-scale-gray-100 mq925:pb-[62px] mq925:box-border">
            <div className="self-stretch h-[312px] relative shrink-0">
              <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start p-[5px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
              </div>
              <div className="absolute top-[16px] left-[16px] rounded bg-branding-error flex flex-row items-start justify-start py-[3px] px-2 gap-[4px] z-[1]">
                <div className="relative leading-[150%] inline-block min-w-[30px]">
                  Sale
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[30px]">
                  50%
                </div>
              </div>
              <div className="flex p-[10px] justify-end">
                <CiHeart
                  className="w-10 h-10 relative text-red-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className={`self-stretch flex flex-col items-start justify-center p-4 relative gap-[6px] shrink-0 text-left text-sm text-gray-scale-gray-700 font-body-small-body-small-500 `}
            >
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%]">
                  Title
                </div>
                <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                  <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
                    $14.99
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 inline-block min-w-[53px] whitespace-nowrap">
                    $20.99
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <CiStar className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500" />
                <CiStar className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500" />
                <CiStar className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500" />
                <CiStar className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500" />
                <CiStar className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500" />
              </div>
              <HiOutlineShoppingBag
                className="w-10 h-10 absolute !m-[0] top-[27px] right-[20px] z-[1] bg-slate-600"
                loading="lazy"
              />
            </div>
          </div>
          {/* <Product4x image="/image-1@2x.png" greenApple="Chanise Cabbage" /> */}
          
          {/* <Product4x image="/image-3@2x.png" greenApple="Ladies Finger" /> */}
        </div>
      </div>
    </section>
  );
};

RelatedProducts.propTypes = {
  className: PropTypes.string,
};

export default RelatedProducts;
