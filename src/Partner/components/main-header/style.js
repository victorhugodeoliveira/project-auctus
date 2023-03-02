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

export const Profile = styled.div`
   left: 600px;
   display: flex;
   flex-direction: row;
   color: #444;
   margin-left: 10px;
   position: relative;
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
