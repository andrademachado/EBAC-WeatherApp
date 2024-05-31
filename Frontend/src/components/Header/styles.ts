import styled from 'styled-components';

export const Header = styled.header`
    max-width: 1440px;
    width: 100%;


    /* Ver a possibilidade de aumentar o height: 80px; e demais espaçamentos */

    height: 68px;
    margin-left: 0;
    background-color: #ECF4F6;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-between;
    gap: 42px;
    
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
      
        
        
    }

    
    .form{
        background-color: yellow;
        height: 30px;
        width: 250px;
        text-align: center;
        border-radius: 16px;          
    }

    .button{
        background-color: red;
        height: 30px;
        width: 65px;
        text-align: center;
        border-radius: 16px;
        cursor: pointer;
    }

    

    .localizacao{
        background-color: red;
        height: 35px;
        width:100px;
        justify-content: end;
        border-radius: 16px;
        padding-right: 0  1em 0 auto; 
        cursor: pointer; 
    
    }
`

export const Title = styled.h3`
    color:red;
    text-align: left;
`




