import React from "react";
import { CommonCardImage } from "../../components/CommonCardImage";

const CardImage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="h-full">
        <CommonCardImage
          imgSrc="https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          direction="left"
          delay={0.2}
        />
      </div>
      <div className="flex flex-col  gap-4">
        <div className="flex-1">
          <CommonCardImage
            imgSrc="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Image"
            direction="right"
            delay={0.3}
          />
        </div>
        <div className="flex-1">
          <CommonCardImage
            imgSrc="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            direction="right"
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default CardImage;
