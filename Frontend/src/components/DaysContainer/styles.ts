import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DaysContainer = styled.div`
    width: 100%;
    height: 124px;
    padding: 12px 54px;
    background-color: ${colors.daysList};
    display: grid;
    grid-template-columns: auto 64px auto;
    gap: 78px;
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
        max-width: 48px;
        width: 100%;
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
    text-align: center;

    img {
        margin: 0 auto;
    }

    .day {
        font-weight: 600;
    }
`