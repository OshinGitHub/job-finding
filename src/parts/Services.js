import images, { icons } from '../images/imageindex'
import { GreyCircle, FiftySixCircle } from '../components/Circles'
import howPlatformWorks from '../data/HowPlatformWorks'

function Services() {
  return (
    //
    <div className="h-[1079.96px] bg-[#FCFCFC] flex items-center justify-center">
      <div className="w-[1479.43px] h-[799.96px] flex grid-cols-2 gap-x-[128.85px] items-center">
        <div className="relative w-[776.58px] h-[714.36px] z-10">
          <img
            className="absolute top-[70.28px] left-[58.36px] z-10"
            alt="Background Yellow"
            src={images.vectorYellow}
          />
          <img
            className="absolute top-[24.12px] left-[12.16px] z-[-10]"
            alt="Background Line"
            src={images.vectorLineTwo}
          />
          <img
            className="absolute top-[455.47px] left-[157.97px] z-20"
            alt="Yellow Dots"
            src={images.yellowDots}
          />
          <div
            className="absolute bg-white w-[200px] h-[298.52px] top-[415.84px] 
          rounded-[10px] shadow-[2px_10px_25px_rgba(0,0,0,0.1)] z-30
          flex items-center justify-center"
          >
            <div className="w-[139px] h-[239px] flex flex-col justify-between">
              <div className="flex flex-col gap-y-[10px]">
                <div className="w-[77px] h-[77px] bg-greyccc rounded-full"></div>
                <div>
                  <div className="text-darkblue font-poppins font-semibold not-italic leading-8 text-xl tracking-[0.2px]">
                    Shellina
                  </div>
                  <div className="font-normal font-dmSans not-italic text-grey text-base leading-5">
                    Photographer
                  </div>
                </div>
                <div className="w-[77px] flex gap-x-[5px]">
                  <img alt="Location Icon" src={icons.location} />
                  <div className="font-normal not-italic text-base leading-5 text-[#7a8d9d]">
                    Ukraine
                  </div>
                </div>
              </div>
              <button
                className="bg-green text-white w-[139px] h-[50px] rounded-[10px]
              font-dmSans not-italic font-bold text-base leading-[21px]"
              >
                Hire Now
              </button>
            </div>
          </div>
          <div
            className="absolute bg-white w-[516.63px] h-[625.93px] top-0 left-[143.62px] 
          rounded-[10px] shadow-[0px_70.7207px_56.1276px_rgba(55,55,55,0.1098)] z-40
          flex items-center justify-center"
          >
            <div className="w-[407.49px] h-[513.55px] flex flex-col justify-between">
              <div className="relative bg-greyccc w-[404.12px] h-[291.86px] rounded-[4.49021px]">
                <div className="absolute top-[224.67px] left-[25.94px] w-[198.69px] h-[40.41px] bg-white rounded-[22.451px] flex items-center justify-center gap-x-[6.47px]">
                  <div className="text-darkblue text-[15.7157px] font-bold leading-[22px]">
                    See Opened Jobs
                  </div>
                  <img
                    className="w-[17.96px] h-[17.96px]"
                    alt="Arrow"
                    src={icons.arrowTopRightCorner}
                  />
                </div>
                <div></div>
              </div>
              <div className="w-full h-[186.34px] flex flex-col justify-between">
                <div className="font-poppins text-darkblue font-semibold text-[24.6961px] leading-9">
                  Pro Tip : How to apply for a<br />
                  startup job as a fresh graduate |<br />
                  JobBlog Ep.04
                </div>
                <div className="flex items-center">
                  <div className="bg-greyccc w-[44.9px] h-[39.29px] rounded-[13.4706px] mb-[5.61px]"></div>
                  <div
                    className="text-darkblue font-dmSans tracking-[0.22451px] font-bold text-[17.9608px] leading-[22px]
                  ml-[17.4px] mr-[14px]"
                  >
                    Nerte Gronw
                  </div>
                  <div className="w-[4.98px] h-[4.49px] bg-[#E8EAED] rounded-full mr-[102.18px]"></div>
                  <div
                    className="w-[109.66px] h-[26.94px] font-dmSans font-normal text-[15.7157px] leading-[27px]
                  text-grey"
                  >
                    13 Hours ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-white w-[286.29px] h-[153px] top-[157.11px] left-[490.29px] 
          rounded-[10px] shadow-[0px_15px_25px_rgba(0,0,0,0.06)] z-50
          flex items-center justify-center"
          >
            <div className=" w-[226.29px] h-[93px] flex flex-col justify-between">
              <div className="text-babyGrey text-base font-dmSans font-medium not-italic leading-[21px]">
                Happy Family
              </div>
              <div className="w-[224px] h-[56px] flex relative">
                <GreyCircle />
                <GreyCircle className="absolute left-[42.57px]" />
                <GreyCircle className="absolute left-[85.14px]" />
                <GreyCircle className="absolute left-[127.71px]" />
                <GreyCircle className="absolute left-[170.28px] bg-[#ffb583] flex items-center justify-center">
                  <div className="text-white text-base font-medium font-dmSans not-italic leading-[21px]">
                    20+
                  </div>
                </GreyCircle>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-[574px] h-[799.96px] flex flex-col gap-y-10">
          <div className="relative z-10 font-poppins font-bold leading-[50px] text-darkblue text-[40px]">
            Watch How Our
            <br />
            Platform Works!
            <div className="bg-orangeSoft absolute z-[-10] w-[127.99px] h-5 top-[75px] left-[191.01px]"></div>
          </div>
          <div className=" w-[675.96px]">
            {howPlatformWorks.map((item) => {
              return (
                <div
                  className="w-[574px] h-[152.99px] bg-white border border-[#EDEDED]
                   mb-[16px] rounded-lg first:border-none first:shadow-[0px_30px_80px_rgba(0,0,0,0.07)] last:mb-0 flex items-center justify-center"
                >
                  <div className="w-[514px] flex gap-x-4">
                    <FiftySixCircle className="shadow-[2px_10px_25px_rgba(0,0,0,0.1)] flex items-center justify-center">
                      <img
                        key={item.id}
                        alt={item.alternative}
                        src={item.icon}
                      />
                    </FiftySixCircle>
                    <div className="w-[442px] flex flex-col gap-y-1">
                      <div className="text-darkblue font-poppins text-xl font-semibold leading-8 tracking-[0.2px]">
                        {item.title}
                      </div>
                      <div className="w-[362px] font-dmSans text-grey font-normal text-base leading-[26px]">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
