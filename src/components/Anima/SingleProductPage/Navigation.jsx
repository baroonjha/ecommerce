import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Navigation = ({ className = "", onButtonClick }) => {
  const handleDescriptionClick = () => {
    onButtonClick("description"); // Call this when "Descriptions" button is clicked
  };

  const handleAdditionalInfoClick = () => {
    onButtonClick("information"); // Call this when "Additional Info" button is clicked
  };

  const handleReviewsClick = () => {
    onButtonClick("reviews"); // Call this when "Reviews" button is clicked
  };

  return (
    <div className={`self-stretch shadow-[0px_1px_0px_#e6e6e6] bg-gray-scale-white overflow-x-auto flex flex-row items-start justify-center py-0 px-5 z-[1] text-left text-base text-gray-scale-gray-500 font-body-small-body-small-500 ${className} mt-[20px] pt-[10px]`}>
      <Button
        className="h-14 w-[132px]"
        variant="contained"
        sx={{
          // fontFamily:"sans-serif",
          color: "#1a1a1a",
          fontSize: "14px", // Make sure to use a string with a unit
          background: "#fff",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#fff" ,color:"#12018"},
          width: 132,
          height: 56,
          "&:focus":{fontFamily:"sans-serif"}
          
        }}
        onClick={handleDescriptionClick}
      >
        Descriptions
      </Button>
      <div className="bg-gray-scale-white flex flex-row items-start justify-start  whitespace-nowrap">
        <Button
          className="h-14 w-[132px] shadow-[0px_-2px_0px_#20b526_inset]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1a1a1a",
            fontSize: "16px",
            background: "#fff",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#fff" },
            width: 132,
            height: 56,
            "&:focus":{fontFamily:"sans-serif"}
          }}
          onClick={handleAdditionalInfoClick}
        >
          Additional Info
        </Button>
      </div>
      <div className="bg-gray-scale-white flex flex-row items-start justify-start  whitespace-nowrap">
        <Button
          className="h-14 w-[132px] shadow-[0px_-2px_0px_#20b526_inset]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1a1a1a",
            fontSize: "16px",
            background: "#fff",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#fff" },
            width: 132,
            height: 56,
            "&:focus":{fontFamily:"sans-serif"}
          }}
          onClick={handleReviewsClick}
        >
          Reviews
        </Button>
      </div>
    </div>
  );
};

// Navigation.propTypes = {
//   className: PropTypes.string,
//   onButtonClick: PropTypes.func.isRequired, // Pass this prop to handle button clicks
// };

export default Navigation;
