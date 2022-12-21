import styled from "styled-components";


export const Content = styled.div`
    padding: 100px 0px 50px 0px; 
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const TitleMe = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.text}
`

export const MarkerName = styled.marker`
    font-size: 4rem;
    font-weight: 900;
    color: #5ee071;
`
export const ContainerAbout = styled.div`
    max-width: 900px;
    padding: 60px 100px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
`
export const AboutText = styled.p`
margin: 0;
    text-align: justify;
    text-indent: 4em;
    font-size: 1.3rem;
`