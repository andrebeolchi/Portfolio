import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink} from './NavbarElem'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">46:56</NavLogo>
                    <MobileIcon>
                        <FaBars />
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
                        <NavBtnLink to='#'>Currículo</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
