import { useState } from "react";
import FrameComponent from "./FrameComponent";
import Navigation from "./Navigation";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import AdditionalInfo from "./AdditionalInfo";
import RelatedProducts from "./RelatedProduct/RelatedProducts";


const SingleProductPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("description");

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div className="w-full relative bg-gray-scale-white overflow-hidden flex flex-col items-start justify-start pt-[11px] px-0 pb-[11px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent />
      <section className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <Navigation onButtonClick={handleButtonClick}/>
        {selectedComponent === "description" ? (
          <ProductDescription />
        ) : selectedComponent === "reviews" ? (
          <ProductReview />
        ) : (
          <AdditionalInfo />
        )}
      </section>
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;
