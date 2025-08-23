import React from "react";
import Container from "../Container";
import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="h-screen flex flex-col justify-center px-9"
        >
          <div className="flex justify-between w-full gap-x-[100px]">
            <div className="w-[600px]">
              <p className="font-Karla text-[25px] text-[#55527C] font-semibold">
                - Nice to meet you!
              </p>
              <p className="font-Inter text-[25px] text-[#130F49] font-bold">
                Hubert Dhrubo Gomes
              </p>
              <p className="font-Karla text-[20px] text-[#130F49]">
                Web designer & Developer
              </p>
            </div>

            <div>
              <p className="text-[19px] font-Karla text-[#55527C]">
                Hello there! My name is{" "}
                <span className="text-amber-500">Hubert Gomes.</span> I am a web
                designer & developer, and I'm very passionate and dedicated to
                my work.
              </p>
              <p className="text-[19px] font-Karla text-[#55527C] mt-[30px]">
                With 0 year experience as a professional a web designer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
              <div className="flex justify-between mt-[30px]">
                <div className="text-left">
                  <p className="font-Karla text-[18px] text-[#55527C]">
                    <u>AGE</u>
                  </p>
                  <p className="font-Inter font-bold text-[20px] text-[#130F49]">
                    21
                  </p>
                </div>
                <div className="text-left">
                  <p className="font-Karla text-[18px] text-[#55527C]">
                    <u>BORN IN</u>
                  </p>
                  <p className="font-Inter font-bold text-[20px] text-[#130F49]">
                    Dhaka,Bangladesh.{" "}
                  </p>
                </div>
                <div className="text-left">
                  <p className="font-Karla text-[18px] text-[#55527C]">
                    <u>MAIL</u>
                  </p>
                  <p className="font-Inter font-bold text-[20px] text-[#130F49]">
                    gomeshubert8@gmail.com
                  </p>
                </div>
                <div className="text-left">
                  <p className="font-Karla text-[18px] text-[#55527C]">
                    <u>PHONE</u>
                  </p>
                  <p className="font-Inter font-bold text-[20px] text-[#130F49]">
                    +8801707014275
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[50px]">
            <div className="py-[80px] px-[100px] bg-[#D3F4EC] text-center">
              <p className="font-Inter text-[48px] font-bold text-[#130F49]">0</p>
              <p className="text-[18px] font-Karla font-semibold">Years of Experience</p>
            </div>
            <div className="py-[80px] px-[100px] bg-[#FCE8D4] text-center">
              <p className="font-Inter text-[48px] font-bold text-[#130F49]">10+</p>
              <p className="text-[18px] font-Karla font-semibold">Projects Completed</p>
            </div>
            <div className="py-[80px] px-[100px] bg-[#E3F9E0] text-center">
              <p className="font-Inter text-[48px] font-bold text-[#130F49]">0</p>
              <p className="text-[18px] font-Karla font-semibold">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default About;
