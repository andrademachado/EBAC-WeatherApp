import styled from "styled-components";

export const SuggestionsCard = styled.div`

    max-width: 430px;
    flex-grow: 1;
    padding: 30px;

    h2{
        font-size:18px;        
        font-weight: 600;
        list-style: 27px;
        
    }
`
export const SuggestionsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 40px;
`

export const SuggestionsItem = styled.li`
    display: flex;
    

    h3{
        font-size: 12px;
        font-weight: 400;        
    }

    span{
        font-size: 12px;
        font-weight: 600;
    }

    img{
        width: 36px;
    }
`
