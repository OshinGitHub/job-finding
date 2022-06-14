import images from '../images/imageindex'

function JobSeeker() {
  return (
    <div className="h-[838px] flex items-end justify-center pb-[49.43px]">
      <div className="h-[491.47px] flex items-center gap-[88.49px]">
        <div className="w-[821.49px] h-[491.47px]">
          <img alt="Map" src={images.map} />
        </div>
        <div className="w-[625px] h-[427.83px] flex flex-col justify-between">
          <div className="h-[302.5px] flex flex-col justify-between">
            <div className="h-[144.5px] relative z-10 text-darkblue font-poppins not-italic font-bold text-[40px] leading-[50px]">
              20k+ people around the world
              <br />
              have found a job through
              <br />
              Chakri
              <div className="absolute z-[-10] top-[124.33px] left-[7.72px] bg-orangeSoft w-[127.99px] h-5"></div>
            </div>
            <p className="h-32 font-dmSans font-normal text-base leading-8 text-grey">
              Intrinsicly disintermediate economically sound process
              <br />
              improvements after market positioning vortals. Professionally
              <br />
              scale cross functional human capital and extensive
              <br />
              technology. Authoritatively e-enable stand-alone initiatives
            </p>
          </div>
          <button
            className="font-dmSans font-bold text-base leading-[21px]
           bg-green text-white rounded-[10px] w-[190px] h-[70px]"
          >
            Find Your Job
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobSeeker
