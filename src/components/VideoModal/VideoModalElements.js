import styled from "styled-components"
import { MdClose } from 'react-icons/md';
import {Colors} from '../colors'

export const ModalContainer = styled.div`
    background: #00000040;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalWrapper = styled.div`
    position: relative;
    z-index: 9;
    width: 1088px;
    height: 612px;
    
    @media screen and (max-width: 768px) {
        max-width: 175px;
    }
    `

export const Video = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: 0 5px 16px rgba(0,0,0,1);
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 100px;
    right: 150px;
    width: 48px;
    height: 48px;
    padding: 0;
    z-index: 9;

    &:hover{
        color: ${Colors.purple};
    }
`