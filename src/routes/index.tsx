import React from 'react'
import Courses from '../components/CoursesSection'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import HeroSection from '../components/HeroSection'
import QuotesSection from '../components/Quotes'
import Skills from '../components/SkillsSection'
import TextpandaSection from '../components/Textpanda'

const Home = () => {
  return (
    <>
    <HeroSection />
    <Skills />
    <Courses />
    <TextpandaSection />
    <ExperienceSection />
    <EducationSection />
    <QuotesSection />
    </>
  )
}

export default Home