
import styled from "styled-components";
import { colors } from "../../styles/colors";



export const Footer = styled.footer` 
        background-color: ${colors.containerBg};
        padding: 40px 50px 30px 50px;
        border-radius: 35px;
        max-width:1352px ;
        width: 100%;
        margin: 56px auto 30px auto;
        
        
        
        
                
        
        .logo{
                margin-top: 40px;
                width: 350px;
                height: 120px;
                }

        .containerUp{
                width: 100%;
                border-bottom: 1px solid #ccc;
                list-style: none;
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                flex-wrap:wrap;
        }
        .logo{
                flex: 1;
        }
        .item{
                display: flex;
                justify-content: center;
                margin: 0 auto;
                
                .footerList{
                        display: flex;
                        gap: 50px;
                        
                        list-style:none;

                        li{
                                font-weight: 500;
                                font-size: 20px;
                        }
                }


        }
        .h3{
                display: flex;
                
        }
        .item{
                margin-left: 100px;
                cursor: pointer;
        }
        .itemB{
                margin-left: 100px;
                cursor: pointer;
                
        }
        .itemC{
                margin-left: 100px;
                cursor: pointer; 
                
        }
`
export const Center = styled.div`
        display: flex;
        margin-bottom:2px ;
        justify-content: space-between;
        .containerCenter{                
                
                
                
}
        .social-links{
                display: flex;
                list-style: none;
                gap:4px;
        
        }
`
export const Low = styled.div`
        display:  flex;
        list-style: none;       
        margin-top: 28px;

        .containerLow{
        display: flex;
        gap: 24px;
        }
        .icon{
                margin-right: 24px;
        }
        
        
        
`