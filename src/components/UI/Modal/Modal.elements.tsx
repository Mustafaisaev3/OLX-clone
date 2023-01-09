import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`


export const ModalInner = styled.div`
    width: auto;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
`

export const ModalHaederComp = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 15px;
`

export const ModalCloseBtn = styled.div`
    width: auto;
    height: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const ModalBody = styled.div`
    width: auto;
    height: auto;
    padding: 15px;
`