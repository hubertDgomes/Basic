import React from 'react'
import Container from '../Container'

const Portfolio = () => {
  const ServiceBar = ({no,task,taskInfo})=>{
    return(
      <>
      <div className="py-[40px] px-[40px] border-1 border-black w-[380px] hover:scale-110 transition-all duration-500 cursor-pointer">
        <p className='font-Inter text-[20px] font-semibold text-[#130F4980]'>{no}</p>
        <p className='font-Inter text-[20px] font-bold text-[#130F49]'>{task}</p>
        <p className='font-Karla text-[18px] font-light text-[#55527C]'>{taskInfo}</p>
        <p>Read More</p>
      </div>
      </>
    )
  }
  return (
    <Container className={""}>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex justify-between w-full items-baseline-last">
          <div className="">
            <h1 className='font-Karla text-[#55527C] text-[18px] font-semibold'>-SERVICES</h1>
            <h1 className='text-[40px] font-Inter text-[#130F49] font-bold'>MY Services</h1>
          </div>
          <div className="">
            <p className='font-Inter text-[20px] text-[#55527C] font-bold underline'>gomeshubert8@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-y-[40px]">
          <ServiceBar no={"01"} task={"Web Design"} taskInfo={"Web Design is the process of building programing etc blah"}/>
          <ServiceBar no={"01"} task={"Web Design"} taskInfo={"Web Design is the process of building programing etc blah"}/>
          <ServiceBar no={"01"} task={"Web Design"} taskInfo={"Web Design is the process of building programing etc blah"}/>
          <ServiceBar no={"01"} task={"Web Design"} taskInfo={"Web Design is the process of building programing etc blah"}/>
        </div>
      </div>
    </Container>
  )
}

export default Portfolio
