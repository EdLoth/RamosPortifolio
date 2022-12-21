import { useState } from "react";
import Lottie from "react-lottie";

import Typewriter from "typewriter-effect";
import animationData from '../../../assets/contact.json'
import { Content, MarkerName, TitleMe, AboutText, ContentAnimation, ContactContent } from './styles'
import { ContactBar } from "../../ContactBar";


export function SectionFive() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <>
            <Content id="SectionFive">
                <div className="row">
                    <div className="col-6">
                    <div className="row">
                        <TitleMe>
                            <MarkerName>
                                {'<'}
                            </MarkerName>
                            Contato
                            <MarkerName>
                                {'>'}
                            </MarkerName>
                        </TitleMe>
                    </div>
                        <ContactContent>
                            <AboutText>
                                Olá, então este é meu perfil de desenvolvedor 
                                e meu portfólio, espero que gostem, aproveitem 
                                e entrem em contato:
                                </AboutText>
                        </ContactContent>
                        <ContactBar />
                    </div>
                    <ContentAnimation className="col-6">
                        <Lottie
                            options={defaultOptions}
                            style={{ marginLeft: "5vh" }}
                            height={450}
                            width={540}
                        />
                    </ContentAnimation>
                </div>
            </Content>
        </>
    )
}