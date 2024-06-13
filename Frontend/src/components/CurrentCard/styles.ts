import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const CurrentCard = styled.div`
    padding: 24px 32px;

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
        width: 100px;
    }

    .currentTemperature {
        font-size: 72px;
    }

    .weatherInfo {
        span {
            display: block;
            font-size: 20px;
            font-weight: 400;
        }

        .description {
            font-size: 24px;
            font-weight: 600;
        }
    }
`

export const MaxMin = styled.span`
    display: block;
    margin-top: 40px;
`

export const WeatherCardBottom = styled.div`
    margin-top: 58px;
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
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