import styled from 'styled-components';

export const ExperienceTitle = styled.h3`
    text-align: center;
    font-size: 2rem;
`

export const ExperienceWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-width: 1000px;
    padding: 30px;
    margin: auto;
`

export const SMBody = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding-left: 40px;
    padding-top: 20px;
    background-color: #80FFDB;
`

export const SMLogoWrapper = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    position: relative;
    background-color: #80FFDB;
`

export const LIBody = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    padding-left: 40px;
    padding-top: 20px;
`

export const LILogoWrapper = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    position: relative;
`

export const GBody = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    padding-left: 40px;
    padding-top: 20px;
`

export const GLogoWrapper = styled.div`
    grid-area: 3 / 2 / 4 / 3;
    position: relative;
`


export const CompanyLogo = styled.img`
    width: 80px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const CompanyName = styled.p`
    font-weight: bold;
    font-size: 18px;
`

export const DateRange = styled.p`
    font-size: 14px;
`

export const JobTitle = styled.p`
    font-weight: bold;
`

export const JobList = styled.ul`
    list-style-type: square;
    font-size: 14px;
`

export const MultipleJobsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`

export const Job = styled.div``