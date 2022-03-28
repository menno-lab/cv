import styled from 'styled-components';
import { CodeBlock as ReactCodeBlock } from "react-code-blocks";

// https://colorhunt.co/palette/253094

export const HeroWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
`

export const LeftPanelWrapper = styled.div`
    background-color: #80FFDB;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding-left: 50px;
    color: #23241f;
`

export const CodePanelWrapper = styled.div`
    background-color: #6930C3;
    height: 100vh;
    position: relative;
`

export const CodeBlockWrapper = styled.div`
    width: 400px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 25%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const CodeBlock = styled(ReactCodeBlock)`
    height: 500px!important;
`

export const TitleWrapper = styled.div`
    position: relative;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 4rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
`

export const SubTitleWrapper = styled.div`
    text-align: center;
`

export const SubTitle = styled.h2``

export const CTAWrapper = styled.div`
    width: 100vw;
    z-index: 99;
    position: absolute;
    bottom: 15vh;
    text-align: center;
`

export const CTAButton = styled.button`
    border: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    width: 220px;
    height: 60px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #F10086;
`