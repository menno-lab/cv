import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import { CompanyLogo, JobList, JobTitle } from './ExperienceElements';

export default function CustomizedTimeline() {

    const supermetrics = require('../images/experience/sm.png');
    const linkedin = require('../images/experience/li.png');
    const google = require('../images/experience/google.png');

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Nov 2020 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
         
            <CompanyLogo src={supermetrics} />
      
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Supermetrics
          </Typography>
          <br />
          <JobTitle>Technical Support Specialist</JobTitle>
          <JobList>
              <li>Technical support for Supermetrics users</li>
              <li>Debugging complex data issues</li>
              <li>Collaborating with the product managers forbugs/new features</li>
              <li>Hold training sessions for customers or other teams</li>
          </JobList>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Aug 2019 - Nov 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <CompanyLogo src={linkedin} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            LinkedIn
          </Typography>
          <br />
          <JobTitle>Marketing Solutions Consultant</JobTitle>
        
          <JobList>
              <li>Analyzing data from marketing campaign performance and converting them to actionable recommendations</li>
              <li>Consulting advertisers to be successful intheir marketing goals</li>
              <li>Onboarding new advertisers</li>
              <li>Providing technical support to the salesteams</li>
              <li>Analyzing and reporting feedback from advertisers to the product developers</li>
          </JobList>
        

        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Sep 2018 - Aug 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <CompanyLogo src={google} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Google (via Accenture)
          </Typography>
          <br />
          <JobTitle>Workflow Lead</JobTitle>        
          <JobList>
              <li>Performance Data Analysis and Reporting</li>
              <li>Process and Operations optimisation</li>
              <li>Coordinating operations across multiple channels and locations</li>
          </JobList>
          <JobTitle>Advertising Specialist • Enterprise Market</JobTitle>        
          <JobList>
              <li>Marketing support specialist for Googles most valuable advertising clients</li>
              <li>Technical support for Analytics and Tag Manager</li>
              <li>Analyzing data from campaign performanceand converting them into actionable recommendations</li>
          </JobList>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
