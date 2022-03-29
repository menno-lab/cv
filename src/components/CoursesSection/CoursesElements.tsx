import styled from 'styled-components';

export const CoursesWrapper = styled.div`
    background-color: #23241f;
    padding: 40px;
    margin-top: 40px;
    h2 {
        color: #e6db74;
    }
`

export const CoursesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    max-width: 1500px;
    margin: auto;
    place-items: center;
    padding: 30px 20px;
    @media screen and (max-width: 1365px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media screen and (max-width: 1036px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }
`

export const CourseCard = styled.div`
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background-color: white;
    width: 150px;
    height: 100px;
    text-align: center;
`

export const CourseTitle = styled.h3`
    font-size: 16px;
`

export const CourseProvider = styled.p`
    font-size: 14px;
`
