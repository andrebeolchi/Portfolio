import React from 'react'
import FecapLogo from '../../images/black_fecap.png'
import FiapLogo from '../../images/black_fiap.jpg'
import {GraduationContainer,
        GraduationWrapper,
        GraduationCard,
        GraduationIcon,
        GraduationH1,
        GraduationH2,
        GraduationP
        } from './GraduationElement'

const Graduation = () => {
    return (
        <GraduationContainer id="graduation">
            <GraduationH1>Formação Acadêmica</GraduationH1>
            <GraduationWrapper>
                <GraduationCard>
                    <GraduationH2>2016 - 2018</GraduationH2>
                    <GraduationIcon src={FecapLogo} alt="Logo do Colégio Fecap"/> {/*https://www.fecap.br/colegio-medio-tecnico-informatica/*/}
                    <GraduationP>Técnico em Informática</GraduationP>
                </GraduationCard>
                <GraduationCard>
                    <GraduationH2>2020 - 2020</GraduationH2>
                    <GraduationIcon src={FiapLogo} alt="Logo da Faculdade FIAP"/>
                    <GraduationP>Defesa Cibernética</GraduationP>
                </GraduationCard>
                <GraduationCard>
                    <GraduationH2>2021 - 2022</GraduationH2>
                    <GraduationIcon src={FiapLogo} alt="Logo da Faculdade FIAP"/>
                    <GraduationP>Análise e Desenvolvimento de Sistemas</GraduationP>
                </GraduationCard>
            </GraduationWrapper>
        </GraduationContainer>
    )
}

export default Graduation
