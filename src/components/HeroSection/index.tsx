import { HeroWrapper, CTAWrapper, CTAButton } from './HeroElements';
import RightPanel from './IntroPanel';
import LeftPanel from './CodePanel';


const HeroSection = () => {
  return (
    <>
    <HeroWrapper>
        <RightPanel />
        <LeftPanel />
    </HeroWrapper>
    <CTAWrapper>
        <CTAButton>Welcome to my CV!</CTAButton>
    </CTAWrapper>
    </>
  )
}

export default HeroSection