import React, {useState} from 'react'
import {BurgerBar,
        Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink,
        NavFileDownload} from './NavbarElement'

const Navbar = ({ toggle }) => {

	const downloadCV = () => {
		fetch('http://beolchi.netlify.app/download/CV_AndreBeolchi_08_2021.pdf')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'CV_AndreBeolchi.pdf';
					a.click();
				});
	})}
	
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Portfolio</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BurgerBar />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project">Projetos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contato</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={downloadCV}>
                                    <NavFileDownload />
                                    Currículo
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar