import PropTypes from "prop-types";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiStar } from "react-icons/ci";


const ProductInfo = ({
  className = "",
  greenApple,
  showRelatedProductPrice,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center p-4 relative gap-[6px] shrink-0 text-left text-sm text-gray-scale-gray-700 font-body-small-body-small-500 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[150%]">{greenApple}</div>
        <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
          <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
            $14.99
          </div>
          {showRelatedProductPrice && (
            <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 inline-block min-w-[53px] whitespace-nowrap">
              $20.99
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start">
        <CiStar
          className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500"
          
          
        />
        <CiStar
          className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500"
          
        />
        <CiStar
          className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500"
          
        />
        <CiStar
          className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500"
          
        />
        <CiStar
          className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px] text-red-500"
          
        />
      </div>
      <HiOutlineShoppingBag
        className="w-10 h-10 absolute !m-[0] top-[27px] right-[20px] z-[1] bg-slate-600"
        loading="lazy"
      />
    </div>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
  greenApple: PropTypes.string,
  addToCart: PropTypes.string,
  showRelatedProductPrice: PropTypes.bool,
};

export default ProductInfo;
