import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";


export const ContainerInfos = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Title = styled.p`
    font-size: 3rem;
    margin: 0;
    color: ${(props) => props.theme.colors.text}
    
`

export const TitleMe = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text}
`

export const MarkerName = styled.marker`
    font-size: 4rem;
    margin-left: 0.8rem;
    font-weight: 700;
    color: #5ee071;
`


export const TitleOffice = styled.h1`
    display: flex;
    flex-direction: row;
    font-weight: 300;
    font-size: 3.5rem;
    margin-right: 1rem;
    color: ${(props) => props.theme.colors.text}
`


export const MarkerOffice = styled.marker`
    margin-left: 0.8rem;
    font-size: 3.5rem;
    font-weight: 700;
    color: #5ee071;
`


export const ButtonMore = styled.a`
    margin-top: 1.5rem;
    text-decoration: none;
    background: ${(props) => props.theme.colors.background};
    padding: 5px 30px;
    font-size: 2rem;
    font-weight: 600;
    border: 5px solid #5ee071;
    color: ${(props) => props.theme.colors.text};
    
    &:hover {
    transition: all 0.5s;
    color: ${(props) => props.theme.colors.text};
    background: #5ee071;
    border: 5px solid #5ee071;
    }
`

export const TitleDate = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme.colors.text};
`
