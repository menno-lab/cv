import { HeroSectionWrapper, HeroWrapper, CTAWrapper, CTAButton, BlockWrapper, BlockContent } from './HeroElements';
import IntroPanel from './IntroPanel';
import CodePanel from './CodePanel';

const HeroSection = () => {

  return (
    <HeroSectionWrapper>
      <HeroWrapper>
          <IntroPanel />
          <CodePanel />
      </HeroWrapper>
      <BlockWrapper>
          <BlockContent>            
          </BlockContent>
      </BlockWrapper>
      <CTAWrapper>
          <CTAButton>Welcome to my CV!</CTAButton>
      </CTAWrapper>
    </HeroSectionWrapper>
  )
}

export default HeroSection