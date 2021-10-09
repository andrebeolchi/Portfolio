import React from 'react'
import { FaGithub, FaLinkedin, FaLinux, FaPython } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {FooterContainer,
        FooterWrap,
        FooterLinkContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIconLink,
        WebsiteRights,
        SocialIcons,
        Recycle
        } from './FooterElement'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contatos</FooterLinkTitle>
                            <FooterLink target="_blank" href="mailto:andregarbini2001@gmail.com">Email</FooterLink>
                            <FooterLink target="_blank" href="tel:+5511968349464">Telefone</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Certificados</FooterLinkTitle>
                            <FooterLink target="_blank" href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/11325/99555d76827fcc9d9a8a289a47d40955/certificado.png">
                                <Recycle/>Formação Social e Sustentabilidade
                            </FooterLink>
                            <FooterLink target="_blank" href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/4356/d74b33dfe7a81ad601d155e30db2b0d6/certificado.png">
                                <FaPython style={{marginRight: 8}}/>Python
                            </FooterLink>
                            <FooterLink target="_blank" href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/1119/3cbabd28ab998d1da2a3fe3029d6125e/certificado.png">
                                <FaLinux style={{marginRight: 8}}/>Linux Fundamentos
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Portfolio</SocialLogo>
                        <WebsiteRights>André Beolchi © 2021 - {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/andrebeolchi" target="_blank" aria-label="Github">
                                <FaGithub style={{fontSize: 32}}/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/andré-beolchi-72786a178/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin style={{fontSize: 32}}/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
