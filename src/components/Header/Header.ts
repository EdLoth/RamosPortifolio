import styled from "styled-components";

export const Container = styled.nav`
    padding: 0 150px;
    width: 100%;
    display:none;
    position: fixed;
    background: ${(props) => props.theme.header.background};
    transition: all 0.2s;
    z-index: 1000;

`

export const Content = styled.nav`
    display: flex;
    justify-content: space-between;
`

export const ContentLists = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const LogoImg = styled.img`
    max-width: 200px;
`

export const ListItems = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 50px;
`

export const Items = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ItemSwitch = styled.li`
    margin-left: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`



export const NavLink = styled.a`
    font-size: 22px;
    color: ${(props) => props.theme.header.text}
`

