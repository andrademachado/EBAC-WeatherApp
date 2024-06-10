import styled from 'styled-components';

export const Header = styled.header`


    /* Ver a possibilidade de aumentar o height: 80px; e demais espaçamentos */

    height: 68px;
    background-color: #fff;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-around;
    
    .logo{
        display: flex;
        width: 136px;
        height: 48px;
        margin-top: 10px;
        margin-left: 0;
        margin-bottom: 16px;
    
        

        
    }

    .formButton {    
        border-radius: 16px;
        display: flex;
        cursor: pointer; 
        

        .form{

        height: 30px;
        width: 170px;
        text-align: center;
        border-radius: 16px;
        border-left:px;
        border-width: 1px;   
        
    }
    
        .button{
            
            height: 30px;
            width: 65px;
            text-align: center;
            border-radius: 16px;
            cursor: pointer;
            background-color: #BCBCBC;
            
        
        }


    }  
      .localizacao{            
            background-color:#BCBCBC ;
            height: 30px;
            width:85px;
            justify-content: end;
            border-radius: 16px;
            cursor: pointer; 
                    
            
    }   
`

export const Title = styled.h3`
    color: #000;
    text-align: left;

`




