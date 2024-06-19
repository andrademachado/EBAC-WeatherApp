import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { screenSize } from '../../styles/screen';

export const Header = styled.header`
    width: 1,168px;
    width: 100%;
    padding: 14px 30px;
    background-color: ${colors.containerBg};
    border-radius: 30px;
    margin: 0 auto;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    position: relative;

    @media (max-width: ${screenSize.headerBreak}) {
        display: flex;
        justify-content: space-around;
        padding: 14px 30px;
    }

    &:hover .myLocation {
        background-color: transparent;
        color: ${colors.containerBg};
    }

    .logo {
        max-width: 230px;
        width: 100%;
        display: block;
    }

    .invalid {
        display: none;

            @media (min-width: ${screenSize.headerBreak}) {
                color: red;
                position: absolute;
                bottom: 0;
                transform: translateY(-6px);
                font-size: 14px;
                display: block;
            }
        }
`

export const InputContainer = styled.form`
    display: none;

    @media (min-width: ${screenSize.headerBreak}) {
        max-width: 240px;
        width: 100%;
        min-width: 208px;
        height: 37px;
        position: relative;
        display: block;
    }

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
            right: 0;
            transform: translate(-20px, 12px);

            .searchIcon {
                height: 14px;
            }
        }
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 78px;

    @media (max-width: ${screenSize.headerBreak}) {
        gap: 28px;
    }
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

        @media (max-width: ${screenSize.headerBreak}) {
            padding: 14px 8px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 16px;
        }
    }
`

export const Menu = styled.img`
    cursor: pointer;
`

export const MenuSpace = styled.div`
    position: relative;
    max-width: 1352px;
    width: 100%;
    margin: 0 auto;

    .invalidMobile {
            display: none;

            @media (max-width: ${screenSize.headerBreak}) {
                color: red;
                font-size: 14px;
                display: block;
                text-align: center;
                margin-top: 4px;
            }
        }
`

export const MobileInputContainer = styled.form`
    display: none;
    position: relative;

    @media (max-width: 767px) {
        display: block;
        width: 100%;
        margin-top: 18px;

        .mobileInput {
            max-width: 720px;
            width: 100%;
            height: 62px;
            border: 1px solid #E6E6E6;
            border-radius: 20px;
            padding: 14px 10px 14px 86px;
            font-size: 22px;
            font-weight: 400;
            font-family: ${fonts.main};
            color: #7A7A7A;
            background-color: transparent;

            &:focus {
                outline: none;
            }
        }

        .mobileInputError {
            border: 1px solid red;
        }

        .searchBtn {
            cursor: pointer;
            border: none;
            background-color: transparent;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(42px, 20px);
        }
    }
`