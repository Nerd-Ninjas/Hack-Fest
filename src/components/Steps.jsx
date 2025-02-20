
import { steps_points as steps } from "./Constants"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Steps = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      once: true, 
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>

      <h2 className='text-center text-4xl font-bold uppercase' data-aos="fade-up">
        How It Works
      </h2>
      <div className="steps-main" >
        {
          steps.slice(0,1).map((item, index) => (
            <div className="steps-points" key={index} data-aos="fade-up-right">
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index+1}
                </span>
              </div>
            </div>
          ))
        }
        {
          steps.slice(1,2).map((item, index) => (
            <div className="steps-points" key={index} data-aos="fade-up">
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index+2}
                </span>
              </div>
            </div>
          ))
        }
        {
          steps.slice(2,3).map((item, index) => (
            <div className="steps-points" key={index} data-aos="fade-up-left">
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index+3}
                </span>
              </div>
            </div>
          ))
        }
        {
          steps.slice(3,4).map((item, index) => (
            <div className="steps-points" key={index} data-aos="fade-up-right">
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index+4}
                </span>
              </div>
            </div>
          ))
        }
        {
          steps.slice(4,5).map((item, index) => (
            <div className="steps-points" key={index} data-aos="fade-up">
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index+5}
                </span>
              </div>
            </div>
          ))
        }
        {
          steps.slice(5,6).map((item, index) => (
            <div className="steps-points" key={index} data-aos="fade-up-left">
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index+6}
                </span>
              </div>
            </div>
          ))
        }
     
      </div>





    </>
  )
}

export default Steps
