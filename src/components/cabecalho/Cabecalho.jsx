import "./Cabecalho.css"
import React, { useState } from 'react'

export default function Cabecalho() {

    return (
        <nav>
            <ol>
                <li><a class="download">Download CV</a></li>
                <li><a>Contatos</a></li>
                <li><a>Sobre</a></li>
                <li><a>Projetos</a></li>
                <li><a>Skills</a></li>
            </ol>
        </nav>
    )
}