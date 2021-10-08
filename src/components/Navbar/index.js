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
        NavBtnLink,
        NavFileDownload} from './NavbarElement'

const Navbar = ({ toggle }) => {

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
                        <NavBtnLink href="https://drive.google.com/uc?id=1_mdMYc3_W8jrBj7JkT_AqVpIdofuSjZl&export=download" download>
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