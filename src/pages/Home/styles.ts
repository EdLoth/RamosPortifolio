import styled from "styled-components";



export const Content = styled.div`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    background: ${(props) => props.theme.colors.background};
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text}
`

export const SectionOne = styled.div`
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 30px;
    
`



export const ButtonInit = styled.button`
    letter-spacing: 13px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 65px;
    background-color: transparent;
    color: #FFF;
    padding: 20px 30px;
    border: 10px solid #FFF; 

    
`