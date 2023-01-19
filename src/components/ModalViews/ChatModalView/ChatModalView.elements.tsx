import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const ChatModalWrapper = styled.div`
    width: 350px;
    height: 450px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;
`

export const ChatModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(250, 251, 251);
    box-shadow: rgb(0 0 0 / 16%) 0px 2px 8px;
`
// Chat Modal Header
export const ChatModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    background-color: rgb(255, 255, 255);
    min-height: 56px;
    border-bottom: 1px solid rgb(216, 223, 224);
`

export const UserLogo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${Colors.main_green};
`

export const ChatModalHeaderContent = styled.div`
    padding: 0px 10px;
    flex-grow: 1;
`

export const ChatModalCloseBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`



// Chat Modal Body
export const ChatModalBody = styled.div`
    flex-grow: 1;
`

export const AdInfoContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    padding: 12px 16px;
    background-color: rgb(255, 255, 255);
    height: 64px;
`

export const AdPhoto = styled.div`
    width: auto;
    height: 100%;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const AdInfo = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 16px;

    & > p {
        font-size: 14px;
        line-height: 18px;
        color: ${Colors.text_main};
        margin: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const AdPrice = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: rgb(0, 47, 52);
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
`
    
// Chat Modal Footer
export const ChatModalFooter = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;

    & > div {
        flex-grow: 1;
        margin: 0;
    }
`

export const ChatModalSendBtn = styled.div`
    min-width: 30px;
    min-height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.main_green};
`