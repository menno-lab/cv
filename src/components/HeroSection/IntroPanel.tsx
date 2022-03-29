import {
    LeftPanelWrapper,
    SubTitle,
    SubTitleWrapper,
    Title,
    TitleWrapper
} from './HeroElements';

const RightPanel = () => {
  return (
    <LeftPanelWrapper>
        <TitleWrapper>
            <Title>Hi, I'm Menno</Title>
        </TitleWrapper>
        <SubTitleWrapper>
            <SubTitle>I build web applications</SubTitle>
        </SubTitleWrapper>        
    </LeftPanelWrapper>
  )
}

export default RightPanel