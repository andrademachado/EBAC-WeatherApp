import styled from 'styled-components';

export const Header = styled.header`


    /* Ver a possibilidade de aumentar o height: 80px; e demais espaçamentos */

    height: 68px;
    background-color: #fff;
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
        background-color: #EEEEEE;
        width: 300px;
        height: 32px;
        border: none;
        border-radius: 16px 0 0 16px;
        padding: 6px 14px;
        font-family: "Poppins", sans-serif;
    }

    .button{
        /* background-color: #EEEEEE; */
        background-color: red;
        height: 30px;
        width: 20px;
        text-align: center;
        padding: 6px 14px;
        border: none;
        border-radius: 0 16px 16px 0;
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




