import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import { Colors } from '../colors';
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
        NavFileDownload,
        NavPageLinks} from './NavbarElement'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
   
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: Colors.white}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo onClick={toggleHome}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Portfolio
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <BurgerBar />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="graduation"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >Formação
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="watchsec"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}>
                                    Projetos
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavPageLinks to="/contato">Contato</NavPageLinks>
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
            </IconContext.Provider>
        </>
    )
}

export default Navbar