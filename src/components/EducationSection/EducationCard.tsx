import { CardWrapper, University, Course, DateRange, Location } from "./EducationElements";


const EducationCard = (props: any) => {
  const { university, course, dateRange, location } = props;

  return (
    <CardWrapper>
      <University>{university}</University>
      <Course>{course}</Course>
      <DateRange>{dateRange}</DateRange>
      <Location>{location}</Location>
    </CardWrapper>
  )
}

export default EducationCard