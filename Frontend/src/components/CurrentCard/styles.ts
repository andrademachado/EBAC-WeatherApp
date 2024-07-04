import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { screenSize } from "../../styles/screen";

export const CurrentCard = styled.div`
    padding: 24px 32px;

    @media (max-width: ${screenSize.cardBreak}){
        padding: 14px 22px;
    }

    &:hover .detailsBtn {
        background-color: transparent;
        color: #fff;
    }

    .cardTitle {
        font-size: 20px;
        font-weight: 600;
    }

    .cardSubtitle {
        color: ${colors.lightText};
    }
`

export const MainInfo = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 34px;
    align-items: center;

    .mainIcon {
        max-width: 100px;
        width: 100%;

        @media (max-width: ${screenSize.cardBreak})  {
            max-width: 68px;
        }
    }

    .currentTemperature {
        font-size: 72px;

        @media (max-width: ${screenSize.cardBreak}) {
            font-size: 50px;
        }
    }

    .weatherInfo {
        span {
            display: block;
            font-size: 20px;
            font-weight: 400;

            @media (max-width: ${screenSize.cardBreak}) {
                font-size: 16px;
            }
        }

        .description {
            font-size: 24px;
            font-weight: 600;

            @media (max-width: ${screenSize.cardBreak}) {
                font-size: 20px;
            }
        }
    }

    @media (max-width: ${screenSize.cardBreak}) {
        flex-wrap: wrap;
    }
`

export const MaxMin = styled.span`
    display: block;
    margin-top: 40px;

    @media (max-width: ${screenSize.cardBreak}) {
        font-size: 14px;
    }
`

export const WeatherCardBottom = styled.div`
    margin-top: 58px;
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 832px) {
        flex-wrap: wrap;
        justify-content: end;
    }
`

export const infoList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    li {
        text-align: center;

        .itemTitle {
            font-size: 16px;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 4px;

            .listIcon {
                margin-left: 8px;
                width: 16px;
            }
        }

        .listData {
            font-family: ${fonts.second};
            font-size: 20px;
            font-weight: 600;
        }
    }

    @media (max-width: ${screenSize.cardBreak}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: fit-content;
        margin: 0 auto;
        gap: 30px;

        li {
            text-align: left;

            .itemTitle {
                font-size: 12px;
            }

            .listData {
                font-size: 14px;
            }
        }
    }
`

export const CustomButton = styled.div`
    min-width: 208px;
    background: rgb(180,107,249);
    background: linear-gradient(90deg, rgba(180,107,249,1) 0%, rgba(240,99,90,1) 100%);
    border-radius: 27px;
    padding: 1px;
    height: fit-content;

    .detailsBtn {
        width: 100%;
        background-color: #fff;
        border: none;
        border-radius: 27px;
        padding: 21px 28px;
        font-family: ${fonts.third};
        font-size: 16px;
        font-weight: 600;
        display: flex;
        gap: 16px;
        cursor: pointer;
        transition: all .2s ease;
    }
`