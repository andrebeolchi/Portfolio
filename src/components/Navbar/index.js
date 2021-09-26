import React from 'react'
import {BurgerBar,
        Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink} from './NavbarElement'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">1:14:21</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BurgerBar />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" onClick={toggle}>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project" onClick={toggle}>Projetos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" onClick={toggle}>Contato</NavLinks>
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
