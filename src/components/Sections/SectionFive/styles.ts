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

export const AboutText = styled.p`
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    text-align: justify;
    text-indent: 4em;
    font-size: 2rem;
`

export const ContactContent = styled.div`
    display: flex;
    justify-content: center;
`

export const ContentAnimation = styled.div`
    display: flex;
    justify-content: flex-end;
`