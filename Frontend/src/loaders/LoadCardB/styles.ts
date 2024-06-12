import styled from "styled-components";

export const Container = styled.div`
    width: 850px;
    height: 364px;
    padding: 24px 20px;

    .twoBtns {
        display: flex;
        gap: 6px;

        .carbB-btn1 {
            width: 142px;
            height: 36px;
        }

        .carbB-btn2 {
            width: 84px;
            height: 36px;
        }
    }

    .loadList {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .loadListItem {
            width: 130px;
            height: 238px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .loadList-hour {
                width: 50px;
                height: 16px;
            }

            .loadList-temperature {
                width: 40px;
                height: 16px;
                margin-top: 22px;
            }

            .loadList-icon {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-top: 42px;
                margin-bottom: 20px;
            }

            .loadList-info {
                width: 80px;
                height: 12px;
                margin-bottom: 2px;
            }
        }
    }
`