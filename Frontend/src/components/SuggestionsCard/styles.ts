import styled from "styled-components";

export const SuggestionsCard = styled.div`
    max-width: 430px;
    width: 100%;
    flex-grow: 1;
    padding: 28px;

    h2 {
        font-size:18px;        
        font-weight: 600;
        list-style: 27px;
        
    }
`
export const SuggestionsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px 0;
    margin-top: 40px;
`

export const SuggestionsItem = styled.li`
    display: flex;
    gap: 4px;

    h3 {
        font-size: 12px;
        font-weight: 400;
    }

    .status {
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;

        span {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #4ECB71;
            display: block;
        }
    }

    img {
        width: 38px;
        height: 38px;
        object-fit: contain;
    }
`
