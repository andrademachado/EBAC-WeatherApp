import styled from "styled-components";

export const HoursList = styled.ul`
    padding: 20px 18px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    gap: 10px;
`

export const HoursListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    .time {
        font-size: 16px;
        font-weight: 400;
    }

    .hourTemperature {
        font-size: 16px;
        font-weight: 600;
        margin-top: 22px;
    }

    .weatherIcon {
        width: 60px;
        margin-top: 43px;
    }

    .dropContainer {
        margin-top: 64px;
        font-size: 14px;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 4px;

        img {
            height: 16px;
        }
    }
`