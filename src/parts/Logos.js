import { logos } from '../images/imageindex'

function Logos() {
  return (
    <div className="h-[234px] bg-sky-300 flex items-center justify-center mb-[29px]">
      <div className="w-[1304px] flex justify-between">
        <img alt="Caley Peace Logo" src={logos.caleyPeace} />
        <img alt="Design Studio Logo" src={logos.designStudio} />
        <img alt="Harrison Logo" src={logos.harrison} />
        <img alt="Barbecue Logo" src={logos.barbecue} />
        <img alt="Design Exclusive Logo" src={logos.designExclusive} />
      </div>
    </div>
  )
}

export default Logos
