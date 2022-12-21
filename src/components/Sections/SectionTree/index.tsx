import Lottie from "react-lottie";

import Typewriter from "typewriter-effect";
import animationData from '../../../assets/Me.json'

import { Content, MarkerName, TitleMe, ContainerAbout, AboutText } from './styles'

export function SectionTree() {


    return (
        <>
            <Content className="bgAbout" id="SectionTree">
                <ContainerAbout>
                    <div className="row">
                        <TitleMe>
                            <MarkerName>
                                {'<'}
                            </MarkerName>
                            Sobre
                            <MarkerName>
                                {'>'}
                            </MarkerName>
                        </TitleMe>
                    </div>
                    <div className="row">
                        <AboutText>
                            Tenho 21 anos, sou de Salvador, capital do estado da Bahia.
                            Comecei a programar em 2017, e dei inicio no curso técnico
                            de Desenvolvimento de Sistemas no Senai em Janeiro 2018, e
                            conclui em junho de 2019. Atualmente estou trabalhando
                            Home Oficce na <a href="https://urbit.com.br/" target="_blank" rel="noopener noreferrer" className="textLink">Urbit</a> como programador júnior.
                        </AboutText>
                        <AboutText>
                            Sou apaixonado por desenvolvimento web, principalmente
                            em tecnologias que utilizam como React.js, Next.js,
                            React-Native. Também toco uma Startup a Vogar Studios
                            Creative, onde aceitamos diversos trabalhos freelancer.
                        </AboutText>
                    </div>



                </ContainerAbout>
            </Content>
        </>
    )
}