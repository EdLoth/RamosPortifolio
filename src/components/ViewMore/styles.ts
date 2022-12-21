import styled from "styled-components";



export const ButtonViewMore = styled.a`
    max-width: 400px;
    background: transparent;
    text-decoration: none;
    border: none;
    color: ${(props) => props.theme.colors.background};
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    transition: all 0.5s;

    &:hover {
        color: ${(props) => props.theme.colors.text}
      }
    
`
