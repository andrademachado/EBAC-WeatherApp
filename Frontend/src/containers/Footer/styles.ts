import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screen";
import { Link } from "react-router-dom";

export const Footer = styled.footer` 
    background-color: ${colors.containerBg};
    padding: 40px 50px 30px 50px;
    border-radius: 35px;
    max-width:1352px ;
    width: 100%;
    margin: 56px auto 0 auto;

    .containerUp {
        width: 100%;
        border-bottom: 1px solid #ccc;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
        padding-bottom: 40px;

        .logo {
            max-width: 230px;
            width: 100%;
            flex: 1;
            
            @media (max-width: ${screenSize.cardBreak}) {
                margin: 0 auto;
            }

            img {
                min-width: 230px;
                width: 100%;
            }
        }

        .footerList {
            display: flex;
            gap: 50px;
            list-style:none;
            margin: 0 auto;

            li {
                font-weight: 500;
                font-size: 20px;
                cursor: pointer;
            }
        }

        .footer-empty {
            @media (max-width: ${screenSize.cardBreak}) {
                display: none;
            }
        }
    }
`
export const Center = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    padding-top: 30px;

    .suport {
        .footer-email-title {
            font-size: 16px;
            font-weight: 400;
            display: block;
        }

        .footer-email {
            font-size: 16px;
            font-weight: 500;
            margin-top: 10px;
        }
    }

    .social-links {
        display: flex;
        list-style: none;
        gap:4px;

        @media (max-width: ${screenSize.cardBreak}) {
            width: 100%;
            justify-content: center;
        }

        img {
            width: 30px;
        }
    }
`
export const Low = styled.div`
    display:  flex;     
    margin-top: 28px;
    gap: 25px;

    @media (max-width: ${screenSize.cardBreak}) {
        text-align: center;
    }
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`