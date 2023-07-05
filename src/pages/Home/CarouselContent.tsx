import React from "react";
import { Carousel, Image } from "antd";
import slide1 from "../../images/Slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CarouselContent = () => {
  return (
    <Carousel
      arrows={true}
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
      dots={false}
    >
      <Image preview={false} src={slide1} />
      <Image preview={false} src={slide2} />
      <Image preview={false} src={slide3} />
    </Carousel>
  );
};

export default CarouselContent;
