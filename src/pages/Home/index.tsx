import { Content, SectionOne, } from './styles'

import { SectionFour,SectionTree, SectionTwo , SectionFive} from '../../components/Sections'

import { ViewMore } from '../../components/ViewMore'

export default function Home() {
    return (
        <Content>
            <SectionOne className='bgImage' id='fadeIn'>
                <ViewMore />
            </SectionOne>
            <SectionTwo />
            <SectionTree />   
            <SectionFour />
            <SectionFive />     

        </Content>
    )
}