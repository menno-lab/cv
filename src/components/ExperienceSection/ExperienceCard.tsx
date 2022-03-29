import { JobWrapper, CompanyLogo, CompanyName, DateRange, JobList, JobTitle, LogoWrapper, Line } from './ExperienceElements';

const ExperienceCard = (props:any) => {
    
    const { company, logo, dateRange, jobTitle, activities } = props;

    return (
        <>
        <JobWrapper>
            <LogoWrapper>
                <CompanyLogo src={logo} />
            </LogoWrapper>            
            <CompanyName>{company}</CompanyName>
            <DateRange>{dateRange}</DateRange>
            <JobTitle>{jobTitle}</JobTitle>
            <JobList>
                {
                    activities.map((item: string) => {
                        return (<li key={item}>{item}</li>)
                    })
                }
            </JobList>
        </JobWrapper>
        <Line />
        </>
  )
};

export default ExperienceCard