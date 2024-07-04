import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screen";

export const CurrentCardMore = styled.div`
    padding: 36px 44px;

    .currentMoreContainer {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: space-between;

        @media (max-width: ${screenSize.mainBreak}) {
            justify-content: center;
        }
    }

    .reversedArrow {
        transform: rotate(180deg);
        margin-top: 90px;
        cursor: pointer;

        @media (max-width: ${screenSize.mobile}) {
            margin-top: 30px;
        }
    }
`

export const LeftSide = styled.div`

    @media (max-width: ${screenSize.cardBreak})  {
        text-align: center;
    }

    .weatherContainer {
        display: flex;
        gap: 22px;
        justify-content: center;

        @media (max-width: ${screenSize.cardBreak})  {
            flex-direction: column;
        }
    }

    .cardMoreIcon {
        max-width: 100px;
        display: block;
        margin: 0 auto;
    }

    .moreInfoTemperature {
        font-size: 48px;
        font-weight: 400;
    }

    .moreInfoStatus {
        display: block;
        font-size: 24px;
        font-weight: 600;
        margin-top: 34px;

        @media (max-width: ${screenSize.cardBreak}) {
            margin-top: 14px;
        }
    }

    .moreInfoSubStatus {
        display: block;
        margin-top: 2px;
    }
`

export const MoreInfoList = styled.ul`
    max-width: 430px;
    width: 100%;
    list-style: none;

    @media (max-width: ${screenSize.cardBreak})  {
        margin-top: 20px;
    }

    li {
        border-bottom: 1px solid ${colors.thinBorder};
        padding-top: 16px;
        padding-bottom: 14px;
        display: flex;
        justify-content: space-between;
        gap: 20px;

        @media (max-width: ${screenSize.cardBreak}) {
            font-size: 12px;
        }

        .listTxt {
            margin-left: 4px;
            color: ${colors.lightText};
        }

        .listValue {
            font-weight: 600;
            margin-right: 20px;
        }
    }
`