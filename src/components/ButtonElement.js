import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Colors} from './colors'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  '#9233FF': '#E1E1E1')};
    white-space: nowrap;
    color: ${({dark}) => (dark ?  '#E1E1E1': '#E1E1E1')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ?  '#fff': '#9233ff')};
        color: ${({dark}) => (dark ?  '#1B1B1B': '#E1E1E1')};
        font-weight: bold;
    }
`