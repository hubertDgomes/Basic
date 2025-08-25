import React from "react";
import Container from "../Container";
import Images from "../Images";
import myPhoto from "/src/assets/remBG2.png";
import { ReactTyped } from "react-typed";
import SplashCursor from "../SplashCursor";
import { motion } from "motion/react"

const Home = () => {
  return (
    <>
      <Container>
        <motion.div
        initial={{
          x:-100,
          opacity:0,
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          duration:1.5
        }}
        className="h-fit lg:h-screen flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6">
            <div className="font-Inter text-[30px] lg:text-[60px] font-bold">
              <h1>
                Hi, I'm <span className="text-[#A5A6FF]">Hubert!</span>
              </h1>
              <div className="">
                <ReactTyped strings={["Creative"]} typeSpeed={40} />

                <ReactTyped
                  strings={["Front-End Developer", "Mern Stack Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  className="font-Viaoda text-[25px] lg:text-[60px]"
                />
              </div>
              <h1>
                Based In <span className="text-red-700">Bangla</span>
                <span className="text-green-700">desh</span>
              </h1>
              <p className="text-[19px] font-medium lg:mr-[300px]">I'm a Bangladesh based web designer & front‑end developer with 0 year of experience</p>
            </div>

            <div>
              <Images className={"w-[400px]"} src={myPhoto} />
            </div>
          </div>
        </motion.div>
        <SplashCursor/>
      </Container>
    </>
  );
};

export default Home;
