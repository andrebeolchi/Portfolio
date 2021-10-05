import React from 'react'
import {FaArrowCircleDown, FaPlay} from 'react-icons/fa'
import { Button } from '../ButtonElement'
import { InfoContainer,
         InfoWrapper,
         InfoRow,
         Column1,
         TextWrapper,
         TopLine,
         Heading,
         SubTitle,
         BtnWrap,
         Column2,
         ImgWrap,
         Img} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, imgText, primary, dark, dark2, where, playIcon }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle darkText={darkText}>
                                    {description}
                                </SubTitle>
                                <BtnWrap>
                                    <Button to={where} 
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={ dark2 ? 1 : 0}
                                    >
                                                {playIcon ? <FaPlay style={{ marginRight: '8px' }}/> : <FaArrowCircleDown style={{ marginRight: '8px' }}/>}
                                                {buttonLabel} 
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} imgText={imgText}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
