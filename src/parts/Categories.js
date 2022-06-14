import { SquareWhite, SquareGrey, SquareOrange } from '../components/Cards'
import { OrangePale, OrangeCircle } from '../components/Circles'
import { TextAndBtn } from '../components/Texts'
import images, { icons } from '../images/imageindex'

function Categories() {
  return (
    <div className="h-[942px] pb-[81px] pt-[65.95px] px-[26.05%] flex items-center justify-center">
      <div className="h-[736px] flex flex-col items-center justify-between">
        <div>
          <div className="relative z-10 text-[40px] font-bold leading-[50px] text-center text-darkblue font-poppins">
            Browse Jobs by&nbsp;
            <br />
            Category
            <div className="absolute top-[29.05px] left-[171.18px] z-[-10] bg-orangeSoft w-[76.13px] h-5"></div>
          </div>
        </div>
        <div className="h-[566px] w-[1420px] flex flex-wrap gap gap-x-[29.33px] gap-y-[30px]">
          <SquareWhite>
            <OrangePale>
              <img className="w-10 h-10" alt="Speaker" src={icons.speaker} />
            </OrangePale>
            <TextAndBtn first="Digital Marketing" second="143 Jobs Opened" />
          </SquareWhite>
          <SquareWhite>
            <OrangePale>
              <img className="w-10 h-10" alt="Speaker" src={icons.pen} />
            </OrangePale>
            <TextAndBtn first="Art & Design" second="110 Jobs Opened" />
          </SquareWhite>
          <SquareGrey>
            <OrangeCircle>
              <img className="w-10 h-10" alt="Speaker" src={icons.dollarSign} />
            </OrangeCircle>
            <TextAndBtn first="Accounting" second="158 Jobs Opened" />
          </SquareGrey>
          <SquareWhite>
            <OrangePale>
              <img className="w-10 h-10" alt="Speaker" src={icons.camera} />
            </OrangePale>
            <TextAndBtn first="Photography" second="95 Jobs Opened" />
          </SquareWhite>
          <SquareWhite>
            <OrangePale>
              <img className="w-10 h-10" alt="Speaker" src={icons.create} />
            </OrangePale>
            <TextAndBtn first="Copy Writing" second="113 Jobs Opened" />
          </SquareWhite>
          <SquareWhite>
            <OrangePale>
              <img className="w-10 h-10" alt="Speaker" src={icons.headphone} />
            </OrangePale>
            <TextAndBtn first="Music" second="55 Jobs Opened" />
          </SquareWhite>
          <SquareWhite>
            <OrangePale>
              <img className="w-10 h-10" alt="Speaker" src={icons.humans} />
            </OrangePale>
            <TextAndBtn first="Human Resouces" second="25 Jobs Opened" />
          </SquareWhite>
          <SquareOrange className="relative flex items-center justify-center">
            <img
              className="w-[333px] h-[268px]"
              alt="Waves"
              src={images.twoWaves}
            />
            <div className="absolute flex gap-x-[30px]">
              <div className="font-medium font-poppins not-italic text-2xl leading-[34px] tracking-[0.2px] text-white">
                Explore
                <br />
                30 More
                <br />
                Categories
              </div>
              <button className="w-[60px] h-[60px] flex items-center justify-center self-end">
                <img alt="Button White Arrow" src={icons.arrowRightWhite} />
              </button>
            </div>
          </SquareOrange>
        </div>
      </div>
    </div>
  )
}

export default Categories
