import JobSeeker from './JobSeeker'
import Testimonial from './Testimonial'
import images from '../images/imageindex'

function JobSeekerAndTesimonial() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[1920px] h-[1394.8px] flex flex-col gap-y-[160px]">
        <Testimonial />
        <JobSeeker className="relative" />
        <img
          className="absolute top-[567.55px] h-[429.54px]"
          alt="Wave"
          src={images.waveFive}
        />
      </div>
    </div>
  )
}

export default JobSeekerAndTesimonial
