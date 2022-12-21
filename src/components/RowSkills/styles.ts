import styled from "styled-components";



export const ContentRow = styled.div`
    width: 100%;
`

export const TitleScript = styled.h1`
  color: ${(props) => props.theme.header.text};
  font-size: 4rem;
  padding-bottom: 2rem;
  font-weight: bold;
  margin-left: 5rem;
  `

export const ContentImgSkills = styled.div`
    padding-bottom: 3rem;
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-around !important;
`

export const ItemSkill = styled.a`
  background-color: #121214!important;
  border: solid 1px #3d3d3d;
  border-radius: 1rem;
  padding:2rem;

  width: 14rem !important;
  height: 12rem !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition:0.5s;

  &:hover {
      border: solid 1px #A020F0;
      background-color: #3a0c57 !important;
  }

`
  export const ImgProperty = styled.img`
  width: 8.5rem!important;
  height: 8.5rem !important;
`