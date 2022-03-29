import styled from 'styled-components';

export const EducationColorWrapper = styled.div`
    background-color: #23241f;
    padding: 30px 0;
    margin-top: 50px;
    h2 {
        color: white;
    }
`

export const EducationWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    place-items: center;
    padding: 20px 0;
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 30px;
    }
`


export const CardWrapper = styled.div`
    padding: 10px 25px;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background-color: white;
`


export const University = styled.h4``

export const Course = styled.p``

export const DateRange = styled.p``

export const Location = styled.p``

