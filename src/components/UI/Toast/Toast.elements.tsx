import styled from "styled-components";

export const ToastContainer = styled.div`
    min-width: 200px;
    max-width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    top: 0;
    right: 0;
    margin: 30px;
`

export const ToastItemElement = styled.div<any>`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px;
    color: ${({data}) => data.color};
    background-color: ${({data}) => data.bg};

    & > svg{
        color: ${({data}) => data.color};
    }
`