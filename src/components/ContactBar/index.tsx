import React, { useState } from "react";

import git from '../../assets/social/git.json'
import insta from '../../assets/social/insta.json'
import linkedin from '../../assets/social/linkedin.json'
import whapp from '../../assets/social/whapp.json'
import Lottie from "react-lottie";

import '../../assets/main.css'

import { Content, LinkSocial } from './styles'

export function ContactBar() {

  const gitLottie = {
    loop: false,
    autoplay: false,
    animationData: git,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const whappLottie = {
    loop: false,
    autoplay: false,
    animationData: whapp,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const instaLottie = {
    loop: false,
    autoplay: false,
    animationData: insta,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const linkedinLottie = {
    loop: false,
    autoplay: false,
    animationData: linkedin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [isGit, setGit] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false,
  })
  const [isInsta, setInsta] = useState(false);
  const [animationState2, setAnimationState2] = useState({
    isStopped: false, isPaused: false,
  })
  const [isWhapp, setWhapp] = useState(false);
  const [animationState3, setAnimationState3] = useState({
    isStopped: false, isPaused: false,
  })
  const [isLinke, setLinke] = useState(false);
  const [animationState4, setAnimationState4] = useState({
    isStopped: false, isPaused: false,
  })


  return (
    <Content>
      <a className="linkSocial" href="https://github.com/EdLoth" target="_blank" rel="noreferrer"
        onMouseEnter={() => {
          setAnimationState({
            ...animationState,
            isStopped: !animationState.isStopped,
          })
          setGit(!isGit)
        }}>
        <span className="spanNeon"></span>
        <span className="spanNeon"></span>
        <span className="spanNeon"></span>
        <span className="spanNeon"></span>
        <div>
          <Lottie
            options={gitLottie}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            height={100}
            width={100}
          />
        </div>
      </a>

      <a className="linkSocial" href="https://www.instagram.com/eduardo.sram/" target="_blank" rel="noreferrer"
        onMouseEnter={() => {
          setAnimationState2({
            ...animationState2,
            isStopped: !animationState2.isStopped,
          })
          setInsta(!isInsta)
        }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div>
          <Lottie
            options={instaLottie}
            isStopped={animationState2.isStopped}
            isPaused={animationState2.isPaused}
            height={100}
            width={100}
          />
        </div>
      </a>

      <a className="linkSocial" href="https://api.whatsapp.com/send?phone=5571992445546&text=Olá Eduardo, tenho interesse no seu trabalho!" target="_blank" rel="noreferrer"
        onMouseEnter={() => {
          setAnimationState3({
            ...animationState3,
            isStopped: !animationState3.isStopped,
          })
          setWhapp(!isWhapp)
        }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div>
          <Lottie
            options={whappLottie}
            isStopped={animationState3.isStopped}
            isPaused={animationState3.isPaused}
            height={100}
            width={100}
          />
        </div>
      </a>

      <a className="linkSocial" href="https://www.linkedin.com/in/dev-eduardo-ramos/" target="_blank" rel="noreferrer"
        onMouseEnter={() => {
          setAnimationState4({
            ...animationState4,
            isStopped: !animationState4.isStopped,
          })
          setLinke(!isLinke)
        }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div>
          <Lottie
            options={linkedinLottie}
            isStopped={animationState4.isStopped}
            isPaused={animationState4.isPaused}
            height={100}
            width={100}
          />
        </div>
      </a>
    </Content>
  )
}