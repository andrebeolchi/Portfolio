import React, { useState } from 'react';
import Video from '../../videos/data.mp4';
import { AButton } from '../ButtonElement';
import {
    HeroContainer,
    HeroContent,
    HeroBg,
    VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='data/mp4' disablePictureInPicture />
            </HeroBg>
            <HeroContent>
                <HeroH1>André Beolchi</HeroH1>
                <HeroP>“Feito de cicatriz e gratidão pelas tempestades que passei, sigo na luta sempre por dias melhores.”</HeroP>
                <HeroBtnWrapper>
                    <AButton to="/contato" 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                        Contato {hover ? <ArrowForward /> : <ArrowRight />}
                    </AButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection
