import { JobWrapper, CompanyLogo, CompanyName, DateRange, JobList, JobTitle, LogoWrapper, Line } from './ExperienceElements';

const ExperienceCard = (props: { company: string; logo: any; dateRange: string; jobTitle: string; activities: string[]; }) => {
    
    const { company, logo, dateRange, jobTitle, activities } = props;

    return (
        <>
        <Line />
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
        </>
    )
};

export default ExperienceCard