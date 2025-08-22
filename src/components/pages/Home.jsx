import React from "react";
import Container from "../Container";
import Images from "../Images";
import myPhoto from "/src/assets/remBG2.png";
import { ReactTyped } from "react-typed";
import SplashCursor from "../SplashCursor";

const Home = () => {
  return (
    <>
      <Container className={""}>
        <div className="h-screen flex items-center justify-center">
          <div className="flex items-center justify-between px-6">
            <div className="font-Inter text-[60px] font-bold">
              <h1>
                Hi, I'm <span className="text-[#A5A6FF]">Hubert!</span>
              </h1>
              <div>
                <ReactTyped strings={["Creative"]} typeSpeed={40} />

                <ReactTyped
                  strings={["Front-End Developer", "Mern Stack Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  className="font-Viaoda"
                />
              </div>
              <h1>
                Based In <span className="text-red-700">Bangla</span>
                <span className="text-green-700">desh</span>
              </h1>
              <p className="text-[19px] font-medium mr-[300px]">I'm a Bangladesh based web designer & front‑end developer with 0 year of experience</p>
            </div>

            <div>
              <Images className={"w-[400px]"} src={myPhoto} />
            </div>
          </div>
        </div>
        <SplashCursor/>
      </Container>
    </>
  );
};

export default Home;
