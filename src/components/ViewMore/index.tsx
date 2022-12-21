import React from "react";
import Lottie from "react-lottie";

import { ButtonViewMore } from './styles'

import animationData from '../../assets/arrowDown.json';

import arrowDown from '../../assets/ARROW.png'
import { FaAngleDoubleDown } from "react-icons/fa";

export function ViewMore() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <ButtonViewMore href="#SectionTwo" id="fadeIn10">
      <FaAngleDoubleDown  size={54}/>
      <FaAngleDoubleDown  size={54}/>
    </ButtonViewMore>

  )
}