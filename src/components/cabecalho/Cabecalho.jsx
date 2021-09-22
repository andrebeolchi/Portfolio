import "./Cabecalho.css"
import React, { useState } from 'react'

export default function Cabecalho() {

    return (
        <header>
            <nav>
                <a href="#" className="">Sobre</a>
                <a href="#" className="">Projetos</a>
                <a href="#" className="">Contatos</a>
                <a href="#" className="button">Download CV</a>
            </nav>
        </header>
    )
}