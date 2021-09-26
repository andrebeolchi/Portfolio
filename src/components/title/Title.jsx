import './Title.css'
import React from 'react'
import styled from 'styled-components';
import { Colors } from '../colors.js'
import '../fonts.css'

export const Flex = styled.div` 
    display:flex;
    justify-content: space-around;
    align-items: center;
`

export const Card = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 25vh;

    width: fit-content;
    max-width: 35vw;
    padding: 2rem 1.5rem;

    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.25);
    background-color: ${Colors.lightBlack};
    border-radius: 10px;

    @media(max-width: 700px) {
        max-width: 70vw;
    }

`;

export const Frase = styled.h1`
    color: var(--gray);
    font-size: 32px;
    font-weight: 300;
    font-style: italic;

`
export const Negrito = styled.span`
    color: ${Colors.gray};
    font-size: 32px;
    font-weight: 600;
`


export default function Title() {

    return (
        <Flex>
            <Card>
                <Frase>“Feito de cicatriz e gratidão pelas tempestades que passei, sigo na luta <Negrito>sempre</Negrito> por dias melhores.”</Frase>
            </Card>
        </Flex>
    )
}