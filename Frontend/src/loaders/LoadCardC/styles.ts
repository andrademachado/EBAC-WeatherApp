import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 364px;
    padding: 30px;

    .cardC-title {
        width: 230px;
        height: 18px;
    }

    .loadSuggestionList {
        margin-top: 40px;

        .loadListItem {
            width: 160px;
            height: 40px;
            display: flex;
            gap: 4px;
            align-items: center;
            margin-bottom: 40px;

            .loadItemIcon {
                width: 36px;
                height: 36px;
                border-radius: 6px;
            }

            .LoadItemInfo {
                .LoadItemInfo-txt {
                    width: 88px;
                    height: 12px;
                    margin-bottom: 4px;
                }
            }
        }
    }
`