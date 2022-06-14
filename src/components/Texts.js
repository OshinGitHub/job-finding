import { icons } from '../images/imageindex'

// Poppins | DM Sans

// export const
export function FooterTone(text) {
  return (
    <div className="text-darkblue font-poppins font-bold text-xl not-italic leading-[32px] mt-[20.15px]">
      {text.th}
    </div>
  )
}

export function FooterTtwo(text) {
  return (
    <div className="text-grey not-italic font-normal font-dmSans text-base leading-[21px]">
      {text.td}
    </div>
  )
}

export function TextAndBtn(text) {
  return (
    <div className="h-[68px] w-[273px] flex justify-between">
      <div className="flex flex-col justify-between">
        <div className="text-darkblue font-semibold text-xl leading-8 tracking-[0.2px] font-poppins">
          {text.first}
        </div>
        <div className="text-grey font-normal text-base leading-7 font-dmSans">
          {text.second}
        </div>
      </div>
      <button className="w-[32px] h-[32px] self-end">
        <img alt="Arrow Button" src={icons.arrowRightBtn} />
      </button>
    </div>
  )
}
