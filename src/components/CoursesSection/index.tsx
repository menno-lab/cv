import { SectionTitle } from '../Common';
import Course from './Course';
import { CoursesWrapper, CoursesGrid } from './CoursesElements';

const Courses = () => {

    const courses = [
        {
            name: 'Web Development Bootcamp',
            provider: 'Udemy',
            date: 'Jan 2021'
        },
        {
            name: 'Automate the Boring Stuff with Python',
            provider: 'Udemy',
            date: 'Sep 2020'
        },
        {
            name: 'Using Python with Excel',
            provider: 'LinkedIn Learning',
            date: 'Sep 2020'
        },
        {
            name: 'Excel: PivotTables in Depth',
            provider: 'LinkedIn Learning',
            date: 'Aug 2020'
        },
        {
            name: 'Flutter Development Bootcamp',
            provider: 'Udemy',
            date: 'Jul 2020'
        },
        {
            name: 'SQL Bootcamp',
            provider: 'Udemy',
            date: 'Jul 2020'
        },
        {
            name: 'SQL Programming',
            provider: 'LinkedIn Learning',
            date: 'Feb 2020'
        },
        {
            name: 'Managing Teams',
            provider: 'LinkedIn Learning',
            date: 'May 2019'
        }
    ];

  return (
    <CoursesWrapper>
        <SectionTitle>Courses</SectionTitle>
        <CoursesGrid>
            {courses.map(course => (
                <Course key={course.name} name={course.name} provider={course.provider} date={course.date} />
            ))}
        </CoursesGrid>
    </CoursesWrapper>
  )
}

export default Courses