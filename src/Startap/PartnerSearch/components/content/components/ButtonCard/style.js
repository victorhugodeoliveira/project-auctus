import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-top: 10px;
    right: 21px;
    top: 100px;

`;

export const NewCardContainer = styled.div`
    margin: 15px 20px;
    border: 1px solid #BFBFBF;
    width: 750px;
    height: 350px;
    position: relative;
    border-radius: 1px;
    align-items: center;

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

export const ButtonNewCard = styled.button`
    border-color: #007fff;
    position: relative;
    left: 70px;
    bottom: 45px;
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

export const TitleNewCard = styled.h2`
    color: #000;
    position: relative;
    left: 30px;
    top: 10px;
`;
