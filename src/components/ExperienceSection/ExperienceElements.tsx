import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
`

export const JobWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20px 20px 20px 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 10px;
`

export const LogoWrapper = styled.div`
    grid-area: 1 / 1 / 5 / 2;
    position: relative;
`

export const CompanyLogo = styled.img`
    width: 70px;
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
    li:not(:last-child) { 
        margin-bottom: 5px;  
    }
`

export const Line = styled.hr`
    width: 500px;
`