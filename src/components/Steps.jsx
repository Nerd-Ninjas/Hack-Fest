
import { steps_points as steps } from "./Constants"

const Steps = () => {
  return (
    <>

      <h2 className='text-center text-4xl font-bold uppercase'>
        How It Works
      </h2>
      <div className="steps-main">
        {
          steps.map((item, index) => (
            <div className="steps-points" key={index}>
              <div className="steps-point flex flex-col p-2 h-50 items-center justify-center" >
                <p className="text-5xl steps-icon">
                  {item.icon}
                </p>
                <p className="text-center text-xl font-semibold mt-2">
                  {item.step}
                </p>
                <span className="mt-5 text-base font-bold p-3 w-10 h-10 flex justify-center items-center rounded-full  ">
                  {index + 1}
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
