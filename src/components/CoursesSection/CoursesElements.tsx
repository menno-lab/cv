import styled from 'styled-components';

export const CoursesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    max-width: 1500px;
    margin: auto;
    @media screen and (max-width: 1365px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        place-items: center;
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
    width: 300px;
    height: 100px;
`

export const CourseTitle = styled.h3``
export const CourseProvider = styled.p``


