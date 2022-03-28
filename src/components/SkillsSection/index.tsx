import {
    SkillsSection,
    SkillsWrapper,
    SkillItem,
    SkillsTitle,
    SkillWrapper,
    WebSkillsItems
} from './SkillsElements';
import { images } from '../images/skills';

const Skills = () => {

    return (
        <SkillsSection>
            <SkillsWrapper>
                <SkillsTitle>Skills</SkillsTitle>
                <WebSkillsItems>
                <SkillWrapper title='React' ><SkillItem src={images.react} alt='React' /></SkillWrapper>
                    <SkillWrapper title='TypeScript' ><SkillItem src={images.typescript} alt='TypeScript' /></SkillWrapper>
                    <SkillWrapper title='JavaScript' ><SkillItem src={images.js} alt='JavaScript' /></SkillWrapper>            
                    <SkillWrapper title='NodeJS' ><SkillItem src={images.node} alt='NodeJS' /></SkillWrapper>
                    <SkillWrapper title='Python' ><SkillItem src={images.python} alt='Python' /></SkillWrapper>
                    <SkillWrapper title='AWS' ><SkillItem src={images.aws} alt='AWS' /></SkillWrapper>
                    <SkillWrapper title='Google Cloud Platform' ><SkillItem src={images.gcp} alt='Google Cloud Platform' /></SkillWrapper>                
                    <SkillWrapper title='HTML' ><SkillItem src={images.html} alt='HTML' /></SkillWrapper>
                    <SkillWrapper title='CSS' ><SkillItem src={images.css} alt='CSS' /></SkillWrapper>
                    <SkillWrapper title='MongoDB' ><SkillItem src={images.mongodb} alt='MongoDB' /></SkillWrapper>                
                    <SkillWrapper title='SQL' ><SkillItem src={images.sql} alt='SQL' /></SkillWrapper>
                    <SkillWrapper title='Bootstrap' ><SkillItem src={images.bootstrap} alt='Bootstrap' /></SkillWrapper>
                </WebSkillsItems>
            </SkillsWrapper>
        </SkillsSection>
    )
}

export default Skills