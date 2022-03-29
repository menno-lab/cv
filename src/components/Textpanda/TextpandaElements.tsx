import styled from 'styled-components';

export const TextpandaGrid = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0 40px;
`

export const LogoWrapper = styled.div`
    position: relative;
`

export const TextWrapper = styled.div``


export const TextpandaLogo = styled.img`
    height: 180px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`


export const TextpandaText = styled.div`
    ul {
        list-style-type: square;
    }
`