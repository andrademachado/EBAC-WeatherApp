
import styled from "styled-components";
import { colors } from "../../styles/colors";



export const Footer = styled.footer` 
display: none;
        background-color: ${colors.containerBg};
        
        border-radius: 35px;
        justify-content: space-around;
        max-width:1352px ;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 5px;
        left:45px;
        height: 337px;
        
                
        
        .logo{
                margin-top: 40px;
                width: 350px;
                height: 120px;
                }
        .containerUp{
                width: 1325px;
                display: flex;
                border-bottom: 1px solid #ccc;
                margin-left: 50px;
                margin: 50px;
                list-style: none;
                margin-bottom: 10px;
                margin-top:56px;
                .list{
                display: flex;
                margin-top: 60px;
                gap: 60px;
                list-style: none;                
                width:88px;
                height:20px;
                margin-bottom: 30px;
                margin-right: 400px;                
                margin:55px 51px;
                
                }       
        }
        .item{
                display: flex;
                margin-left: 100px;
                justify-content: center;
                margin-top: 40px;
                cursor: pointer;
                
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
        .containerCenter{                
                margin-left: 50px;
                margin: 50px;                
                margin-right: 50px;
                margin-top: 5px;
                
                .contact{
                list-style: none;
                height: 30px;
                
                width: 224px;
                }
}
        .social-links{
                display: flex;
                list-style: none;
                width: 30px;
                height: 29px;
                margin-left: 915px;
                grid-gap: 6px;  
                margin-right:300px ;
                
        }
`
export const Low = styled.div`
        display:  flex;
        margin-left: 50px;
        list-style: none;       
        
        margin-bottom: 5px;
        height: 20px;
        .containerLow{
        margin-top: 5px;
        }
        .icon{
                margin-left: 20px;
        }
        
        
        
`