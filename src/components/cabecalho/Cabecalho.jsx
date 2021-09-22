import "./Cabecalho.css"
import React, { useState } from 'react'

export default function Cabecalho() {

    return (
        <header>
            <nav>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Contatos</a>
                <a href="#" class="button">Download CV</a>
            </nav>
        </header>
    )
}