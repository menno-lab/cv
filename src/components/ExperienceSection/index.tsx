import {
    ExperienceWrapper,
    SMBody,
    SMLogoWrapper,
    LIBody,
    LILogoWrapper,
    GBody,
    GLogoWrapper,
    CompanyLogo,
    CompanyName,
    DateRange,
    JobTitle,
    JobList,
    MultipleJobsWrapper,
    Job,
    ExperienceTitle
} from './ExperienceElements'

const Experience = () => {

    const supermetrics = require('../images/experience/sm.png');
    const linkedin = require('../images/experience/li.png');
    const google = require('../images/experience/google.png');

    return (
        <>
        <ExperienceTitle>Experience</ExperienceTitle>
        <ExperienceWrapper>

            <SMBody>
                <CompanyName>Supermetrics</CompanyName>
                <DateRange>Nov 2020 - Present</DateRange>
                <JobTitle>Technical Support Specialist</JobTitle>
                <JobList>
                    <li>Technical support for Supermetrics users</li>
                    <li>Debugging complex data issues</li>
                    <li>Collaborating with the product managers forbugs/new features</li>
                    <li>Holding training sessions with customers orother teams</li>
                </JobList>
            </SMBody>
            <SMLogoWrapper>
                <CompanyLogo src={supermetrics} alt='Supermetrics' />
            </SMLogoWrapper>

            <LILogoWrapper>
                <CompanyLogo src={linkedin} alt='LinkedIn' />
            </LILogoWrapper>
            <LIBody>
                <CompanyName>LinkedIn</CompanyName>
                <DateRange>Aug 2019 - Nov 2020</DateRange>
                <JobTitle>Marketing Solutions Consultant</JobTitle>
                <JobList>
                    <li>Analyzing data from marketing campaignperformance and converting them toactionable recommendations</li>
                    <li>Consulting advertisers to be successful intheir marketing goals</li>
                    <li>Onboarding new advertisers</li>
                    <li>Providing technical support to the salesteams</li>
                    <li>Analyzing and reporting feedback fromadvertisers to the product developers</li>
                </JobList>
            </LIBody>                       
            <GLogoWrapper>
                <CompanyLogo src={google} alt='Google' />
            </GLogoWrapper>
            <GBody>
            <CompanyName>Google <span style={{fontWeight: 'normal', fontSize: 14}} >(via Accenture)</span></CompanyName>
                <MultipleJobsWrapper>
                    <Job>
                        <DateRange>Dec 2018 - Aug 2019</DateRange>
                        <JobTitle>Workflow Lead</JobTitle>
                        <JobList>
                            <li>Analyzing data from marketing campaignperformance and converting them toactionable recommendations</li>
                            <li>Consulting advertisers to be successful intheir marketing goals</li>
                            <li>Onboarding new advertisers</li>
                            <li>Providing technical support to the salesteams</li>
                            <li>Analyzing and reporting feedback fromadvertisers to the product developers</li>
                        </JobList>
                    </Job>
                    <Job>
                        <DateRange>Sep 2018 - Dec 2018</DateRange>
                        <JobTitle>Advertising Specialist</JobTitle>
                        <JobList>
                            <li>Analyzing data from marketing campaignperformance and converting them toactionable recommendations</li>
                            <li>Consulting advertisers to be successful intheir marketing goals</li>
                            <li>Onboarding new advertisers</li>
                            <li>Providing technical support to the salesteams</li>
                            <li>Analyzing and reporting feedback fromadvertisers to the product developers</li>
                        </JobList>
                    </Job>
                </MultipleJobsWrapper>

            </GBody>
        </ExperienceWrapper>
        </>
  )
}

export default Experience