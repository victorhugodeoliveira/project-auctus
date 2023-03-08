import styled from 'styled-components';

import ButtonCard from '../ButtonCard';

import Button from '@mui/material/Button';

export const ContainerCard = styled.div`
    margin: 15px 20px;
    border: 1px solid #BFBFBF;
    width: 750px;
    height: 250px;
    position: relative;
    border-radius: 1px;
    align-items: center;
`;

export const ButtonContent = styled.button`
    color: #007fff;
    font-size: 20px;
    position: absolute;
    top: 7px;
    left: 715px;
    border: unset;
    background-color: unset;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #444;

    }
`;

export const TitleHead = styled.h2`
    color: #000;
    margin: 15px 15px;
    position: relative;
    left: 20px;
    top: 35px;
`;

export const TitleContent = styled.h4`
    color: #444;
    max-width: 400px;
    margin: 5px 15px;
    position: relative;
    left: 20px;
    top: 30px;
`;
