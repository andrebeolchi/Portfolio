import "./Cabecalho.css"
import React, { useState } from 'react'


export default function Cabecalho() {
    return (
        <header>
            <nav className="sticky">
                <div className="divPages">
                    <a href="#" className="">Sobre</a>
                    <a href="#" className="">Projetos</a>
                    <a href="#" className="">Contatos</a>
                </div>
                <div>
                    <a href="#" className="button">Download CV</a>
                </div>
            </nav>
        </header>
    )
}