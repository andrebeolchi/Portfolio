import React from 'react';
import styled from 'styled-components';
import { Colors } from '../colors.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import '../fonts.css'

export const NavSticky = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
`;

export const DivPages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    
    @media(max-width: 520px) {
        margin-bottom: 1rem;
        a:first-child {
            border-radius: 0 0 10px 10px;
        }

    }
    @media(max-width: 300px) {
        margin-bottom: 1rem;
    }
`;

export const FlexDiv = styled.div`
    display: flex;
`;

export const TopHeader = styled.header`
    background-color: ${Colors.lightBlack};
`;

export const HdButton = styled.a`
    padding: 1.5vh 4vw;

    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: ${Colors.gray};
    font-size: 1.2rem;
    font-weight: 400;

    transition: 0.5s;
    border-radius: 0 0 10px 10px;

    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const DownloadButton = styled(HdButton)`
    font-weight: 700;
    background-color: ${Colors.lightBlack};
    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.25);
    
    &:hover{
        color: ${Colors.purple};
        background-color: ${Colors.lightBlack};
    }

    @media(max-width: 520px) {
        border-radius: 10px;
    }

    .faDownload{
        margin: 0 .8rem 0 0;
    }
`   


export default function Cabecalho() {
    return (    
        <TopHeader>
            <NavSticky>
                <DivPages>
                    <HdButton href="#" className="">Sobre</HdButton>
                    <HdButton href="#" className="">Projetos</HdButton>
                    <HdButton href="#" className="">Contatos</HdButton>
                </DivPages>
                <div>
                    <DownloadButton href="#" className="button"><FontAwesomeIcon className="faDownload" icon={faFileDownload}/>Currículo</DownloadButton>
                    
                </div>
            </NavSticky>
        </TopHeader>
    )
}