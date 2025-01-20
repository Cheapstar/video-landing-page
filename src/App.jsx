
import './App.css'
import { BestSellingCourses } from './components/BestSellingCourses'
import { CourseSpotlight } from './components/CourseSpotLight'
import { DisorderGrid } from './components/DisorderGrid'
import { HeroSection } from './components/HeroSection'
import { RecommendedCourses } from './components/RecommendedCourses'
import { WatchedHistory } from './components/WatchedHistory'
import { video } from './DummyData'

function App() {


  return (
    <>
    <div>
      <HeroSection></HeroSection>
    </div>
    <div className='px-24 py-20'>
      <CourseSpotlight course={video}></CourseSpotlight>
    </div>
    <div className='px-11 mt-28'>
      <WatchedHistory></WatchedHistory>
    </div>
    <div className='px-11 mt-32'>
      <DisorderGrid></DisorderGrid>
    </div>
    <div className='px-11 mt-32'>
      <RecommendedCourses></RecommendedCourses>
    </div>
    <div className='px-11 mt-32'>
      <BestSellingCourses></BestSellingCourses>
    </div>
    </>
  )
}

export default App
