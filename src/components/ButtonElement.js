import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  '#612DE0': '#612DE0')};
    white-space: nowrap;
    color: ${({dark}) => (dark ?  '#fff': '#fff')};
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
        background: ${({primary}) => (primary ?  '#1B1B1B': '#fff')};
        color: ${({dark}) => (dark ?  '#fff': '#1B1B1B')};
        font-weight: bold;
    }
`