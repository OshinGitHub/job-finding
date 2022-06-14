import images, { icons } from '../images/imageindex'
import { GreyCircle } from '../components/Circles'

function FirstRight() {
  return (
    <div className="w-[903.65px] h-[840px] relative">
      <img
        className="absolute top-[174.98px] left-[188.58px]"
        alt=""
        src={images.vectorLineOne}
      />
      <div
        className="absolute top-[257.4px] left-[695.46px]
         w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center
         shadow-[0px_15px_25px_rgba(0,0,0,0.06)]"
      >
        <img alt="Safety Icon" src={icons.safety} />
      </div>
      <img
        className="absolute top-[219.14px] left-[188.58px]"
        alt="Background Green"
        src={images.vectorGreen}
      />
      <img
        className="absolute top-[603.1px] left-[247.7px]"
        alt="Green Dots"
        src={images.greenDots}
      />
      <div
        className="absolute top-[615.86px] left-[517.74px] w-[286.29px] h-[153px] 
        rounded-[10px] bg-white shadow-[0px_15px_25px_rgba(0,0,0,0.06)]
        flex flex-col justify-center items-center gap-y-[16px]"
      >
        <div className="text-babyGrey text-base font-dmSans font-medium not-italic leading-[21px]">
          20k+ People have found jobs!
        </div>
        <div className="w-[224px] h-[56px] flex relative">
          <GreyCircle />
          <GreyCircle className="absolute left-[42.57px]" />
          <GreyCircle className="absolute left-[85.14px]" />
          <GreyCircle className="absolute left-[127.71px]" />
          <GreyCircle className="absolute left-[170.28px] bg-[#FFE7DB] flex items-center justify-center">
            <div className="text-dark text-base font-medium font-dmSans not-italic leading-[21px]">
              +
            </div>
          </GreyCircle>
        </div>
      </div>
    </div>
  )
}

export default FirstRight
