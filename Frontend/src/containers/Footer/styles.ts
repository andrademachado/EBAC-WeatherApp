import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Footer = styled.footer`
        background-color: ${colors.daysList};
        display: flex;
        border-radius: 35px;
        justify-content: space-around;        
        width:1440px;
        height:190px;
        top:1912px;
        left:43px;
`
export const FooterLogo = styled.div`
        margin-top: 50px;
        width: 230px;
        height: 230px;
`
export const List = styled.section`
    .button{        
        margin-top: 65px;
        display: flex;
        gap: 120px;
        margin-left: 100px;
    }
`
export const About = styled.ul`
                display: flex;
                margin-top: 55px;
                gap: 60px;
                list-style: none;                
                width:81px;
                height:20px;
                margin-bottom: 30px;
                margin-right: 400px;
                left:838px;
`

export const Icon = styled.nav`   
            .social-links{
                margin-top: 20px;
                margin-right: 68px;         
                display: flex;
                list-style: none;
                width: 30px;
                height: 29px;
                margin-left: 40px;
                grid-gap: 6px;       
            }     
`

