import styled from "styled-components";

export const CurrentCard = styled.div`
    padding: 24px 32px;
`

export const MainInfo = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 34px;
    align-items: center;

    .mainIcon {
        width: 120px;
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
    gap: 56px;

    .details {
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
        cursor: pointer;

        .more-arrow {
            margin-left: 12px;
        }
    }
`

export const infoList = styled.ul`
    list-style: none;
    display: flex;
    gap: 44px;

    li {
        text-align: center;

        .itemTitle {
            font-size: 16px;
            font-weight: 400;

            .listIcon {
                margin-left: 8px;
                width: 16px;
            }
        }

        .listData {
            font-size: 20px;
            font-weight: 600;
        }
    }
`