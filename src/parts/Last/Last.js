import Subscribe from './Subscribe'
import Footer from './Footer'
import images from '../../images/imageindex'

function Last() {
  return (
    <div className="h-[932.66px] mt-[44.91px] flex items-center justify-center">
      <div className="relative w-[1920px] pt-[65.66px]">
        <Subscribe />
        <Footer />
        <img
          className="absolute top-0"
          alt="Orange Dots"
          src={images.orangeDots}
        />
        <img
          className="absolute w-[116.69px] h-[205.66px] top-[803.31px] left-[1803.31px]"
          alt=""
          src={images.greenDots}
        />
      </div>
    </div>
  )
}

export default Last
