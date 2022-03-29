import React from 'react'
import Courses from '../components/CoursesSection'
import ExperienceSection from '../components/ExperienceSection'
import HeroSection from '../components/HeroSection'
import Skills from '../components/SkillsSection'
import TextpandaSection from '../components/Textpanda'

const Home = () => {
  return (
    <>
    <HeroSection />
    <Skills />
    <Courses />
    <TextpandaSection />
    </>
  )
}

export default Home