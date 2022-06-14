import First from './parts/First'
import Logos from './parts/Logos'
import Categories from './parts/Categories'
import Services from './parts/Services'
import PopularJobs from './parts/PopularJobs'
import JobSeekerAndTesimonial from './parts/JobSeekerAndTesimonial'
import Last from './parts/Last/Last'

// import images, { logos, icons } from './images/imageindex'

function App() {
  return (
    //flex flex-col items-center justify-center
    <div className="">
      <First />
      <Logos />
      <Categories />
      <Services />
      <PopularJobs />
      <JobSeekerAndTesimonial />
      <Last />
    </div>
  )
}

export default App
