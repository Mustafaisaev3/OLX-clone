import styled from "styled-components";

export const TabsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: #71848d;
    font-size: 16px;
    line-height: 1.29;
    margin-bottom: 6px;
`

export const TabsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const TabElement = styled.div`
    width: 150px;
    border-radius: 4px;
    color: rgb(0, 47, 52);
    display: flex;
    font-size: 14px;
    line-height: 18px;
    background-color: rgb(216, 223, 224);
    align-items: center;
    justify-content: center;
    padding: 6px 16px;
    cursor: pointer;

    &.active{
        background-color: rgb(35, 229, 219);
    }
`