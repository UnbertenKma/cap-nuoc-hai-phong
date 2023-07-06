import React from "react";
import CarouselContent from "./CarouselContent";
import Service from "./Service";
import { Image, Divider } from "antd";
import bg2 from "./images/bg2.png";
import Grid from "./Grid";
import bg3 from "./images/homepage-bg2.png";
import Number from "./Number";

const Home = () => {
  return (
    <>
      <CarouselContent />
      <Service />
      <Divider className="mt-[0px]" />
      <Image preview={false} src={bg2} />
      <Grid />
      <Image preview={false} src={bg3} />
      <Number />
    </>
  );
};

export default Home;
