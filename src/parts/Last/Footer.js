import { FooterTone, FooterTtwo } from '../../components/Texts'
import { FooterContact } from '../../components/FooterItem'
import { logos } from '../../images/imageindex'
import { icons } from '../../images/imageindex'
import { SocialMedia } from '../../components/Circles'

function Footer() {
  return (
    <div className="w-full h-[522.43px] flex items-center justify-center">
      <div className="w-[1420px] h-[282.15px] flex justify-between">
        <div className="h-[282.15px] flex flex-col">
          <img className="w-[97px] h-[50.15px]" alt="Logo" src={logos.chakri} />
          <div className="text-base text-grey font-normal font-dmSans leading-8 mt-[15px] mb-[42.42px]">
            Professionally scale cross functional
            <br />
            human capital and extensive technology.
          </div>
          <div className="flex gap-x-[7px] mb-[38.58px]">
            <SocialMedia>
              <img alt="Google" src={icons.google} />
            </SocialMedia>
            <SocialMedia>
              <img alt="Twitter" src={icons.twitter} />
            </SocialMedia>
            <SocialMedia>
              <img alt="Instagram" src={icons.instagram} />
            </SocialMedia>
            <SocialMedia>
              <img alt="Linkedin" src={icons.linkedin} />
            </SocialMedia>
          </div>
          <div className="text-darkblue font-dmSans">
            Copyright©chakri.All right reserved
          </div>
        </div>
        <div className="flex flex-col gap-y-[26px]">
          <FooterTone th="Services" />
          <div className="flex flex-col gap-y-[25px]">
            <FooterTtwo td="Documentation" />
            <FooterTtwo td="Design" />
            <FooterTtwo td="Themes" />
            <FooterTtwo td="Illustrations" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[26px]">
          <FooterTone th="Company" />
          <div className="flex flex-col gap-y-[25px]">
            <FooterTtwo td="About" />
            <FooterTtwo td="Terms" />
            <FooterTtwo td="Privacy Policy" />
            <FooterTtwo td="Careers" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[25px]">
          <FooterTone th="Job Info" />
          <FooterTtwo td="Select" />
          <FooterTtwo td="Services" />
          <FooterTtwo td="Payment" />
        </div>

        <div className="flex flex-col gap-y-[25px]">
          <FooterTone th="Contact" />
          <FooterContact />
        </div>
      </div>
    </div>
  )
}

export default Footer
