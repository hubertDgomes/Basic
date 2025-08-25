import React from "react";
import Container from "../Container";
import Images from "../Images";
import show1 from "/src/assets/show1.png";
import show2 from "/src/assets/show2.png";
import show3 from "/src/assets/show3.png";
import show4 from "/src/assets/show4.png";
import show5 from "/src/assets/show5.png";
import show6 from "/src/assets/show6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const PortfolioItems = ({ Show, PageName, link }) => {
    return (
      <>
        <div className="mx-[30px]">
          <a href={link} target="_blank">
          <div className="p-2 ">
            <Images
              src={Show}
              className={
                "w-[700px] h-[250px] p-5 scale-100 hover:scale-110 transition-all duration-500 cursor-pointer"
              }
            />
            <p className="text-center mt-[10px] font-Karla font-bold text-[#130F49] text-[20px]">
              {PageName}
            </p>
          </div>
        </a>
        </div>
      </>
    );
  };

  return (
    <Container className={""}>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex justify-between w-full items-baseline-last">
          <div className="mb-[30px]">
            <h1 className="font-Karla text-[#55527C] text-[18px] font-semibold">
              -PROJECTS
            </h1>
            <h1 className="text-[40px] font-Inter text-[#130F49] font-bold">
              Recent completed works
            </h1>
          </div>
          <div className="">
            <p className="font-Inter text-[20px] text-[#55527C] font-bold underline">
              gomeshubert8@gmail.com
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Slider {...settings}>
          <div>
            <PortfolioItems link={"https://oribi-mu.vercel.app/"} Show={show1} PageName={"Orebi"}/>
          </div>
          <div>
            <PortfolioItems link={"https://hancok-three.vercel.app/"} Show={show2} PageName={"Hankok"}/>
          </div>
          <div>
            <PortfolioItems link={"https://uomo-beta.vercel.app/"} Show={show3} PageName={"UOMO"}/>
          </div>
          <div>
            <PortfolioItems link={"https://hubertdgomes.github.io/furino2/"} Show={show4} PageName={"Furnio"}/>
          </div>
          <div>
            <PortfolioItems link={"https://flyver.vercel.app/"} Show={show5} PageName={"Flyver"}/>
          </div>
          <div>
            <PortfolioItems link={"https://hubertdgomes.github.io/TechEdge/"} Show={show6} PageName={"Techedge"}/>
          </div>
        </Slider>
        </div>
        
      </div>
    </Container>
  );
};

export default Portfolio;
