import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #FFFFFF;
    height: 75px;
    padding: .75rem;
    display: flex;
    justify-content: space-between;
`


export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        color: #072AC8;
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