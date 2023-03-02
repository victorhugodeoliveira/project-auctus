import styled from 'styled-components';

import { FaRegCommentDots } from 'react-icons/fa';
import { MdNotificationsActive } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

export const Container = styled.div`
   grid-area: MH;
   background:#fff ;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 10px;
   border-bottom: 1px solid #BFBFBF;
`;

export const MyChallengesContainer = styled.div`
    display: flex;
    align-items: center;
    border: 5px 5px;
    position: relative;
`;

export const MyChallengesTitle = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    color: #444;
    transition: color 0.2s;
    font-size: 1.3rem;
    cursor: pointer;
    font-family: 'Bebas Neue', cursive;
    position: relative;
    left: 250px;



    &:hover {
        color: #007fff;

    }
`;

export const Profile = styled.div`
   display: flex;
   flex-direction: row;
   color: #444;
   margin-right: 10px;
   position: relative;
   right: 10px;
`;

export const Welcome = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;
    position: relative;
    right: 15px;
`;

export const UserName = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;
    margin-top: 22px;
    position: relative;
    right: 5px;


`;

export const IconComents = styled(FaRegCommentDots)`
    position: relative;
    right: 15px;
    margin-right: 50px;
    margin-top: 22px;
    color: #007fff;
    font-size: 1.4rem;
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`;

export const IconNot = styled(MdNotificationsActive)`
    position: relative;
    right: 15px;
    margin-right: 50px;
    margin-top: 22px;
    color: #007fff;
    font-size: 1.4rem;
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`;

export const IconSun = styled(BsSun)`

`;
