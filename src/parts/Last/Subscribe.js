function Subscribe() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[1420px] h-[350px] bg-bgSubscribe rounded-[16.8383px;] 
      flex items-center justify-center"
      >
        <div className="w-full px-[200px] flex items-center justify-between">
          <h1 className="relative z-10 text-[40px] text-darkblue not-italic font-bold leading-[60px] tracking-[0.2px] font-poppins">
            Subscribe Now for Special
            <br />
            Features!
            <div className="absolute z-[-10] top-[27.31px] left-[-3px] w-[213.49px] h-5 bg-orangeSoft"></div>
          </h1>
          <button
            className="bg-orange w-[190px] h-[70px] rounded-[10px] 
          text-white text-base font-bold not-italic leading-[21px]
          font-dmSans shadow-[5px_10px_30px_rgba(244,151,88,0.2)]"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
