import styled from "styled-components";

export const HoursList = styled.ul`
    padding: 20px 18px;
    list-style: none;
`

export const HoursListItem = styled.div`
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
        height: 50px;
        margin-top: 42px;
    }

    .infoContainer {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
        display: flex;
        flex-direction: column;

        .hourInfo {
            font-size: 12px;
            font-weight: 400;
        }
    }
`