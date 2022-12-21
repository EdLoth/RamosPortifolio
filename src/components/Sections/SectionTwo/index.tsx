import Lottie from "react-lottie";

import Typewriter from "typewriter-effect";
import animationData from '../../../assets/Me.json'

import { ButtonMore, ContainerInfos, MarkerName, MarkerOffice, Title, TitleDate, TitleMe, TitleOffice } from './styles'

export function SectionTwo() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // Obtém a data/hora atual
    const dateObj = new Date();
    const dayName = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
    const monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"]

    console.log("<h1> Hoje é " + dayName[dateObj.getDay()] + ", " + dateObj.getDate() + " de " + monName[dateObj.getUTCMonth()] + " de " + dateObj.getFullYear() + ". </h1>")


    return (
        <>
            <ContainerInfos className="row" id="SectionTwo">
                <div className="col-6">
                    <Lottie
                        options={defaultOptions}
                        style={{ marginLeft: "5vh" }}
                        height={600}
                        width={840}
                    />
                </div>
                <div className="col-6">
                    <div className="container-fluid">
                        <Title>Olá,</Title>
                        <div>
                            <TitleMe>Eu sou
                                <MarkerName>{"<Eduardo Ramos>"}</MarkerName>
                            </TitleMe>
                        </div>
                        <div>
                            <TitleOffice>
                                Desenvolvedor
                                <MarkerOffice>
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: [
                                                "React JS.",
                                                "Next JS.",
                                                "React Native.",
                                                "Flutter.",
                                                "Web.",
                                            ]
                                        }}
                                    />
                                </MarkerOffice>
                            </TitleOffice>
                            <ButtonMore href="#SectionTree">Ver Mais</ButtonMore>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
                        <TitleDate>
                            Hoje é {dayName[dateObj.getDay()]}  ,  {dateObj.getDate()}  de {monName[dateObj.getUTCMonth()]} de {dateObj.getFullYear()} .
                        </TitleDate>
                    </div>
                </div>
            </ContainerInfos>

        </>
    )
}