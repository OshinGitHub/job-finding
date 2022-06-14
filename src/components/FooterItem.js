import tw from 'tailwind-styled-components/dist/tailwind'

export function FooterContact() {
  const Contact = tw.div`text-darkblue font-normal not-italic text-base leading-[21px] flex font-dmSans`
  const DataC = tw.div`text-grey `
  return (
    <div className="flex flex-col gap-y-[25px]">
      <Contact>
        Call :&nbsp;<DataC>971 5546 963</DataC>
      </Contact>
      <Contact>
        Email :&nbsp;<DataC>example@gmail.com</DataC>
      </Contact>
      <Contact>
        Address :&nbsp;<DataC>Dhaka, Bangladesh</DataC>
      </Contact>
    </div>
  )
}
