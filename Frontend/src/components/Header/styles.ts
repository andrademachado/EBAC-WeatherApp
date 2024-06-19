import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const Header = styled.header`
    width: 1,168px;
    width: 100%;
    padding: 14px;
    background-color: ${colors.containerBg};
    border-radius: 30px;
    margin: 0 auto;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;

    &:hover .myLocation {
        background-color: transparent;
        color: ${colors.containerBg};
    }

    .logo {
        width: 230px;
        display: block;
    }
`

export const InputContainer = styled.form`
    max-width: 240px;
    width: 100%;
    min-width: 208px;
    height: 37px;
    position: relative;

        .input {
            background-color: transparent;
            width: 100%;
            border: 2px solid #000;
            border-radius: 32px;
            padding: 8px 24px;
            font-size: 14px;
            font-weight: 400;
            font-family: ${fonts.third};

            &:focus {
                outline: none;
            }
        }

        .inputError {
            border: 2px solid red;
        }

        .searchBtn {
            cursor: pointer;
            border: none;
            padding-left: 6px;
            background-color: transparent;
            position: absolute;
            top: 0;
            right: 0%;
            transform: translate(-25px, 11px);
        }
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 78px;
`

export const ButtonContainer = styled.div`
    width: 146px;
    background: rgb(180,107,249);
    background: linear-gradient(90deg, rgba(180,107,249,1) 0%, rgba(240,99,90,1) 100%);
    border-radius: 16px;
    padding: 1px;

    .myLocation {
        cursor: pointer;
        width: 100%;
        background-color: ${colors.containerBg};
        border: none;
        border-radius: 16px;
        padding: 8px 20px;
        font-size: 12px;
        font-weight: 600;
        transition: all .3s ease;
    }
`

export const Menu = styled.img`
    cursor: pointer;
`

export const MenuSpace = styled.div`
    position: relative;
    max-width: 1352px;
    width: 100%;
    padding: 14px;
    transform: translate(-34px, -30px);
    z-index: 2;
`