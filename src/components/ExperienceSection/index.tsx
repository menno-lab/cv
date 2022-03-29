import { SectionTitle } from '../Common';
import ExperienceCard from './ExperienceCard';
import {
    ExperienceWrapper
} from './ExperienceElements'

const Experience = () => {

    const experiences = [
        {
            company: 'Supermetrics',
            logo: require('../images/experience/sm.png'),
            dateRange: 'Nov 2020 - Present',
            jobTitle: 'Technical Support Specialist',
            activities: [
                'Technical support for Supermetrics users',
                'Debugging complex data issues',
                'Collaborating with the product managers for bugs/new features',
                'Holding training sessions with customers or other teams'
            ]
        },
        {
            company: 'LinkedIn',
            logo: require('../images/experience/li.png'),
            dateRange: 'Aug 2019 - Nov 2020',
            jobTitle: 'Marketing Solutions Consultant',
            activities: [
                'Analyzing data from marketing campaignperformance and converting them to actionable recommendations',
                'Consulting advertisers to be successful in their marketing goals',
                'Onboarding new advertisers',
                'Providing technical support to the sales teams',
                'Analyzing and reporting feedback from advertisers to the product developers'
            ]
        },
        {
            company: 'Google (via Accenture)',
            logo: require('../images/experience/google.png'),
            dateRange: 'Dec 2018 - Aug 2019',
            jobTitle: 'Workflow Lead',
            activities: [
                'Performance Data Analysis and Reporting',
                'Process and Operations optimisation',
                'Coordinating operations across multiple channels and locations'
            ]
        },
        {
            company: 'Google (via Accenture)',
            logo: require('../images/experience/google.png'),
            dateRange: 'Sep 2018 - Dec 2018',
            jobTitle: 'Advertising Specialist (enterprise)',
            activities: [
                'Marketing support specialist for Googles toptier advertising clients',
                'Technical support for Analytics and Tag Manager',
                'Analyzing data from campaign performance and converting them into actionable recommendations'
            ]
        },
        {
            company: 'Google (via Accenture)',
            logo: require('../images/experience/google.png'),
            dateRange: 'Jun 2018 - Sep 2018',
            jobTitle: 'Advertising Specialist',
            activities: [
                'Online support specialist for Googles SMB advertisers',
                'Technical support for Analytics and Tag Manager',
                'Campaign optimisation and upselling'
            ]
        }
    ];

    return (
        <>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceWrapper>
            {experiences.map(job => (
                <ExperienceCard key={job.dateRange} company={job.company} logo={job.logo} dateRange={job.dateRange} jobTitle={job.jobTitle} activities={job.activities} />
            ))}
        </ExperienceWrapper>
        </>
  )
}

export default Experience