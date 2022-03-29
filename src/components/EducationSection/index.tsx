import { SectionTitle } from '../Common';
import EducationCard from './EducationCard';
import { EducationColorWrapper, EducationWrapper } from './EducationElements';

const EducationSection = () => {

    const educations = [
        {
            university: 'Laurea University (BBA)',
            course: 'Business Information Technology',
            dateRange: 'Sep 2021 - present',
            location: 'Finland'
        },
        {
            university: 'Stended University (BA)',
            course: 'Media and Entertainment Management',
            dateRange: 'Sep 2012 - Jun 2017',
            location: 'The Netherlands / Ireland / South Africa'
        }
    ];


    return (
        <EducationColorWrapper>
        <SectionTitle>Education</SectionTitle>
        <EducationWrapper>
            {educations.map(course => (
                <EducationCard key={course.dateRange} university={course.university} course={course.course} dateRange={course.dateRange} location={course.location} />
            ))}
        </EducationWrapper>
        </EducationColorWrapper>
    )
}

export default EducationSection