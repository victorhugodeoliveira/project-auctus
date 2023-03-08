import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    left: 50px;
`;

export const TitleStage = styled.h3`
    color: #444;
    position: relative;
    right: 20px;

`;

export const SubTitleStage = styled.h4`
    color: #444;
    position: relative;
    right: 20px;
`;

export const ContainerCheckbox = styled.div`

`;

export const CheckboxTitle = styled.h5`
    color: #444;
    position: relative;
    left: 40px;
    bottom: 39px;
    display: inline-block;
    margin: 0px 0px;
`;

export const Checkbox = styled.input`
    margin: 0px 20px;
    font-size: 0.9rem;
    position: relative;
    left: 50px;
    bottom: 37px;
    display: inline-block;
`;

export const ButtonContentStage1 = styled.button`
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

export const Stage2Container = styled.div`
    margin: 15px 20px;
    border: 1px solid #BFBFBF;
    width: 750px;
    height: 300px;
    position: relative;
    border-radius: 1px;
    align-items: center;
    position: relative;
    margin-top: 10px;
    right: 70px;
    top: 140px;

    @keyframes go-back {
    0% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}
animation: go-back 1s;

`;

export const ButtonStage2 = styled.button`
    border-color: #007fff;
    position: relative;
    top: 75px;
	box-shadow: 0px 10px 14px -7px #007fff;
	background-color:#007fff;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size: 13px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    transition: 0.2s;

     :hover {
	background-color: #444;
    border-color: #444;
    box-shadow: 0px 10px 14px -7px #444;
}
`;
