import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CurrentCardMore = styled.div`
    padding: 36px 44px;

    .currentMoreContainer {
        display: flex;
        gap: 72px;
    }
`

export const LeftSide = styled.div`

    .weatherContainer {
        display: flex;
        gap: 22px;
        justify-content: center;
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
    }

    .moreInfoSubStatus {
        display: block;
        margin-top: 2px;
    }

    .reversedArrow {
        transform: rotate(180deg);
        margin-top: 90px;
        cursor: pointer;
    }
`

export const MoreInfoList = styled.ul`
    max-width: 486px;
    width: 100%;
    list-style: none;

    li {
        border-bottom: 1px solid ${colors.thinBorder};
        padding-top: 16px;
        padding-bottom: 14px;
        display: flex;
        justify-content: space-between;
        gap: 80px;

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