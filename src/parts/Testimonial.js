import images, { icons } from '../images/imageindex'

function Testimonial() {
  return (
    <div className="h-[695px] flex items-center justify-center">
      <div className="flex gap-x-[151px] ml-[100px]">
        <div className="w-[695px] h-[406px] mt-[144.59px] flex flex-col justify-between">
          <div className="flex flex-col gap-y-[30px]">
            <p className="text-darkblue font-poppins font-bold text-3xl leading-[60px] tracking-[0.2px]">
              "I downloaded Chakri about a year ago, and
              <br />
              it's made the job search process much
              <br />
              easier. It's one of the best tools out there for
              <br />
              getting a job!"
            </p>
            <div className="text-darkblue font-dmSans font-normal text-lg leading-[23px]">
              - Ferdinand Stindl - Software Developer
            </div>
          </div>
          <div className="w-[126px] h-14 flex items-center justify-between">
            <button className="h-14">
              <img alt="Arrow Left" src={icons.arrowLeft} />
            </button>
            <button className="h-14">
              <img alt="Arrow Right" src={icons.arrowRight} />
            </button>
          </div>
        </div>
        <div className="relative w-[685.86px] h-[695.19px]">
          <img
            className="absolute top-[56.38px]"
            alt="Background Line"
            src={images.lineSoftGreen}
          />
          <img
            className="absolute top-[101.58px] left-[46.91px]"
            alt="Background Sweet-Green Colour"
            src={images.vectorSoftGreen}
          />
          <img
            className="absolute top-[417.78px] left-[447.58px]"
            alt="Background Sweent-Green Dots"
            src={images.softGreenDots}
          />
          <img
            className="absolute top-[520.61px] left-[146.88px] w-[103.6px] h-[119.15px]"
            alt="Quote Left"
            src={icons.quoteLeft}
          />
        </div>
      </div>
    </div>
  )
}
export default Testimonial
