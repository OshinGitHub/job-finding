import tw from 'tailwind-styled-components/dist/tailwind'
import images, { icons } from '../images/imageindex'

import jobDetails from '../data/JobDetails'

function PopularJobs() {
  const MiniCircle = tw.div`w-[20px] h-[20px] rounded-full bg-[#E0E0E0]`

  return (
    <div className="relative h-[866px] flex justify-center pt-[140px]">
      <img
        className="absolute z-[-10] top-[156.50px]"
        alt="Waves"
        src={images.bigWaves}
      />
      <div className=" w-[1920px] h-[737.29px] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-y-[70px]">
          <div className="w-[1419px] flex justify-between items-center">
            <div className="relative z-10 font-poppins font-bold text-darkblue text-[40px] leading-[50px]">
              Some Popular
              <br />
              Jobs for You!
              <div className="absolute z-[-10] top-[25.25px] left-[121.53px] bg-orangeSoft w-[165.47px] h-5"></div>
            </div>
            <button
              className="font-dmSans font-[700] not-italic text-[16px] leading-[21px] text-white
          w-[190px] h-[70px] rounded-[10px] bg-green"
            >
              View All Job
            </button>
          </div>
          <div className="flex gap-x-[30px] mb-[50px]">
            {jobDetails.map((item) => {
              return (
                <div
                  className="w-[453px] h-[346px] shadow-[5px_30px_56.1276px_rgba(55,55,55,0.1098)]
              bg-white rounded-[16.8383px] flex items-center justify-center first:ml-[480px]"
                >
                  <div className="flex flex-col gap-y-[50px]">
                    <div className="flex flex-col gap-y-6">
                      <div className="w-[373px] h-[30px] flex justify-between items-center">
                        <div
                          className="w-fit h-[30px] px-[10px] flex items-center bg-[#fdeeeb] text-[#E95432] rounded-[5px]
                    font-poppins not-italic font-medium text-sm leading-5"
                        >
                          {item.category}
                        </div>
                        <div className="font-dmSans text-grey not-italic font-normal text-base leading-[26px]">
                          {item.createdTime}
                        </div>
                      </div>
                      <div className="w-[373px] font-poppins text-darkblue not-italic font-semibold leading-9 text-[22px]">
                        {item.position}
                      </div>
                      <div className="flex gap-x-[64px]">
                        <div className="flex gap-[8.29px] items-center justify-center">
                          <img
                            className="w-[20px] h-[20px]"
                            alt=""
                            src={icons.time}
                          />
                          <div className="font-dmSans text-grey  font-normal text-[16px] leading-[26px]">
                            {item.workingDay}
                          </div>
                        </div>
                        <div className="flex gap-[8.29px] items-center justify-center">
                          <img
                            className="w-[20px] h-[20px]"
                            alt=""
                            src={icons.location2}
                          />
                          <div className="font-dmSans text-grey font-normal text-[16px] leading-[26px]">
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center gap-x-[10px]">
                        <img alt={item.company} src={item.logo} />
                        <div>{item.company}</div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-[92px] h-[20px] flex justify-between">
          <MiniCircle></MiniCircle>
          <div className="w-[20px] h-[20px] rounded-full border-[0.5px] border-orange bg-none flex items-center justify-center">
            <div className="w-[7.12px] h-[7.12px] bg-orange rounded-full"></div>
          </div>
          <MiniCircle></MiniCircle>
        </div>
      </div>
    </div>
  )
}

export default PopularJobs
