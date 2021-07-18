import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #1E96FC;
    height: 80px;
    padding: .75rem;
    z-index: 100;
    display: flex;
    justify-content: space-around;
`


export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        color: #FFC600;
        display: block;
        postion: absolute;
        top: 0;
        right: 0;
        transofrm: translate (-100%, 75%);
        font-size: 3rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    alight-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`