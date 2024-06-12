import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DaysContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 19px 32px 12px 32px;
    margin-top: 32px;
    background-color: ${colors.containerBg};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 78px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`

export const DaysList = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    justify-content: space-between;
`

export const ListItem = styled.li`
    width: 90px;
    min-height: 102px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6;

    img {
        max-height: 38px;
        height: 100%;
        margin: 0 auto;
    }

    .day {
        font-size: 16px;
        font-weight: 400;
    }

    .temperature {
        font-size: 14px;
    }
`

export const Today = styled(ListItem)`
    font-weight: 600;

    .day {
        font-weight: 600;
    }
`
