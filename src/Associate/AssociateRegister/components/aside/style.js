import styled from 'styled-components';

import { AiFillCaretLeft } from 'react-icons/ai';

export const Container = styled.div`
    grid-area: AS;
    background: #fff;
    color: #fff;
    border-right: 1px solid #BFBFBF;
    padding-left: 20px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const Title = styled.h3`
    margin-left: 10px;
    position: relative;
    top: 5px;
    color: #444;
    transition: color 0.2s;
    font-size: 1.7rem;


    &:hover {
        color: #007fff;

    }
`;

export const Title2 = styled.h3`
    margin-left: 10px;
    position: relative;
    top: 5px;
    color: #007fff;
    transition: color 0.2s;
    font-size: 1.7rem;


    &:hover {
        color: #444;

    }
`;

export const MenuContainer = styled.nav`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
`;

export const Close = styled(AiFillCaretLeft)`
    display: flex;
    align-items: center;
    position: relative;
    left: 15px;
    margin-top: 9px;
    color: #444;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #007fff;
    }
`;

export const MenuItemLink = styled.a`
    color: #007fff;
    position: relative;
    text-decoration: none;
    margin: 12px 0;
    max-width: 180px;
    left: 10px;

    transform: opacity .2s;

    &:hover {
        opacity: .7;
    }
`;
