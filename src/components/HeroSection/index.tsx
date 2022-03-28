import { HeroWrapper, CTAWrapper, CTAButton, BlockWrapper, BlockContent, DownArrow } from './HeroElements';
import RightPanel from './IntroPanel';
import LeftPanel from './CodePanel';


const HeroSection = () => {

  return (
    <>
    <HeroWrapper>
        <RightPanel />
        <LeftPanel />
    </HeroWrapper>
    <BlockWrapper>
        <BlockContent>
            
        </BlockContent>
    </BlockWrapper>
    <CTAWrapper>
        <CTAButton>Welcome to my CV! <DownArrow /></CTAButton>
    </CTAWrapper>
    </>
  )
}

export default HeroSection