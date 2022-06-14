import tw from 'tailwind-styled-components/dist/tailwind'
import images, { logos } from '../images/imageindex'
import FirstRight from '../components/FirstRight'

function First() {
  const Menu = tw.a`text-darkblue text-lg font-medium leading-[23px]`
  const Keyword = tw.button`w-[55px] h-[25px] bg-greyBG rounded-sm 
  text-greyText not-italic font-normal text-sm leading-[18px] font-dmSans`

  return (
    <div className="bg-[#f9fdfb] h-[960px] flex flex-col items-center">
      <nav className="h-[120px] flex items-center justify-center">
        <img alt="Logo" src={logos.chakri} />
        <div className="w-[350px]"></div>
        <div className="w-[478px] flex justify-between">
          <Menu>Category</Menu>
          <Menu>Job</Menu>
          <Menu>How it works</Menu>
          <Menu>Testimonial</Menu>
        </div>
        <div className="w-[171px]"></div>
        <div className="w-[300px] h-16 flex justify-between">
          <button className="w-[151px] h-full font-dmSans text-darkblue text-base not-italic font-bold leading-[21px]">
            Register
          </button>
          <button
            className="bg-orange text-white h-full w-[139px] 
        rounded-[10px] font-medium text-base leading-[21px] not-italic font-dmSans"
          >
            Sign In
          </button>
        </div>
      </nav>
      {/* left */}
      <div className="pl-[150px] flex grid-cols-2 gap-x-[25.17px] ">
        <div className="h-[840px] w-[643px] flex items-center">
          <div className="w-[643px] h-[383px] flex flex-col justify-between">
            <div className="relative font-poppins z-10 text-darkblue text-[80px] font-extrabold leading-[100px] not-italic">
              Find Every Job
              <br />
              in One Platform
              <div className="absolute top-[39.26px] left-[439px] z-[-10] bg-orangeSoft w-[161px] h-[51.29px]"></div>
            </div>
            <div className="h-[143px] flex flex-col justify-between">
              <div
                className="w-[600px] h-[88px] bg-white rounded-[10px] shadow-[10px_20px_40px_rgba(195,199,197,0.1)]
            flex items-center gap-x-[155px] pl-10 pr-3"
              >
                <div className="flex gap-x-10">
                  <input
                    className="w-[104px] h-[21px] px-1 placeholder:text-greyPale placeholder:text-center placeholder:font-dmSans placeholder:font-medium"
                    placeholder="Job / Position"
                  />
                  <img alt="Pipe Symbol" src={images.pipe} />
                  <input
                    className="w-[70px] h-[21px] px-1 placeholder:text-greyPale placeholder:text-center placeholder:font-dmSans placeholder:font-medium"
                    placeholder="Location"
                  />
                </div>
                <button className="text-white bg-green w-[139px] h-16 rounded-[10px] text-base font-bold not-italic leading-[21px] font-dmSans ml-[2.5px]">
                  Search
                </button>
              </div>
              <div className="w-[390px] h-[25px] flex gap-3">
                <div className="text-orange not-italic font-normal text-base leading-[21px] font-dmSans">
                  Recent Searchs :
                </div>
                <div className="flex gap-x-[8px]">
                  <Keyword>Design</Keyword>
                  <Keyword>UI/UX</Keyword>
                  <Keyword>Product</Keyword>
                  <Keyword>Graphic</Keyword>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <FirstRight />
      </div>
    </div>
  )
}

export default First
