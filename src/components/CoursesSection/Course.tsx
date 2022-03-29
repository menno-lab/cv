import { CourseTitle, CourseCard, CourseProvider } from './CoursesElements';

const Course = (props: { name: string; provider: string; date: string; }) => {

    const {name, provider, date} = props;

    return (
        <CourseCard>
            <CourseTitle>{name}</CourseTitle>
            <CourseProvider>{provider}, {date}</CourseProvider>
        </CourseCard>
    )
}

export default Course