import React from "react"
import Typewriter from "typewriter-effect";

import { ContentImgSkills, ContentRow, ItemSkill, ImgProperty, TitleScript } from './styles'


import s1 from '../../assets/skills/1.svg'
import s2 from '../../assets/skills/2.svg'
import s3 from '../../assets/skills/3.svg'
import s4 from '../../assets/skills/4.svg'
import s5 from '../../assets/skills/5.svg'
import s6 from '../../assets/skills/6.svg'
import s7 from '../../assets/skills/7.svg'
import s8 from '../../assets/skills/8.svg'


import t1 from '../../assets/tools/t1.svg'
import t2 from '../../assets/tools/t2.svg'
import t3 from '../../assets/tools/t3.svg'
import t4 from '../../assets/tools/t4.svg'
import t5 from '../../assets/tools/t5.svg'
import t6 from '../../assets/tools/t6.svg'
import t7 from '../../assets/tools/t7.svg'
import t8 from '../../assets/tools/t8.svg'



export function RowSkills() {
    return (
        <ContentRow>
                <TitleScript>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: [
                                "_Skills",
                                "_Habilidades",
                            ]
                        }}
                    />
                </TitleScript>
                <div className="row">
                        <ContentImgSkills>
                            <ItemSkill href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s4} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://reactnative.dev/" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s8} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://nextjs.org/" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s1} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s5} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s6} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://getbootstrap.com/" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s2} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://styled-components.com/" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s3} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer" >
                                <ImgProperty src={s7} alt="imgStack" />
                            </ItemSkill>
                        </ContentImgSkills>
                </div>
                <TitleScript>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: [
                                "Tools_",
                                "Ferramentas_",
                            ]
                        }}
                    />
                </TitleScript>
                <div className="row">
                        <ContentImgSkills>
                        <ItemSkill href="https://www.figma.com/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t8} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://www.figma.com/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t1} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://insomnia.rest/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t2} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://expo.dev/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t3} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t4} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">
                                <ImgProperty src={t5} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://github.com/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t6} alt="imgStack" />
                            </ItemSkill>
                            <ItemSkill href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                <ImgProperty src={t7} alt="imgStack" />
                            </ItemSkill>
                        </ContentImgSkills>
                </div>
        </ContentRow>
    )
}