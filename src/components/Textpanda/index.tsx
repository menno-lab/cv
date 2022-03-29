import React from 'react'
import { SectionTitle } from '../Common'
import { LogoWrapper, TextpandaGrid, TextpandaLogo, TextpandaText, TextWrapper } from './TextpandaElements'

const TextpandaSection = () => {
    const tpLogo = require('../images/main.png');
    return (
        <div>
            <SectionTitle>Project: Textpanda</SectionTitle>
            <TextpandaGrid>
                <LogoWrapper>
                    <TextpandaLogo src={tpLogo} alt='textpanda-logo' />
                </LogoWrapper>
                <TextWrapper>
                    <TextpandaText>
                        What started as a simple python script to solve my everyday problems inspired me to start building Textpanda. A text expansion tool that has more capabilities than what I could see availableon the market. Having tried many of them and running into issues with them, I askedmyself: "How hard can it be?", which started this journey.
                        <br />
                        <br />
                        In addition to expanding text, Textpanda can interact with API's such as Slack, Freshdesk and Google Sheets for an optimized workflow. My vision with Textpanda is to empower people to eliminate the boring stuff and free up more time for more valuable activities.
                        <br />
                        <br />
                        Technologies used:                        
                        <ul>
                            <li>React</li>
                            <li>Node</li>
                            <li>Vanilla JS</li>
                            <li>AWS Lambda</li>
                            <li>AWS HTTP Gateway</li>
                            <li>MongoDB</li>
                        </ul>
                    </TextpandaText>
                </TextWrapper>
            </TextpandaGrid>
        </div>
  )
}

export default TextpandaSection