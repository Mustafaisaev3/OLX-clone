import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const ChatModalWrapper = styled.div`
    width: 400px;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export const AdInfoContainer = styled.div`
    display: flex;
    align-items: center;
    /* -webkit-box-align: center; */
    text-decoration: none;
    padding: 12px 16px;
    background-color: rgb(255, 255, 255);
    height: 64px;
    border-bottom: 1px dotted rgb(216, 223, 224)
`

export const AdPhoto = styled.div`
    width: 70px !important;
    height: 50px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const AdInfo = styled.div`
    /* width: 100%;
    height: 100%; */
    flex-grow: 1;
    padding-left: 10px;
    overflow: hidden;

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

export const AdMessagesContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 16px;
    flex-grow: 1;
    overflow-y: scroll;
`

export const ReceivedMessageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    & > span{
        font-size: 12px;
        line-height: 14px;
        color: rgb(64, 99, 103);
        margin: 2px 0px;
    }
`

export const ReceivedMessage = styled.div`
    width: fit-content;
    background: rgb(242, 244, 245);
    border-radius: 4px;
    padding: 8px;
    position: relative;
`

export const SentMessageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;

    & > span{
        font-size: 12px;
        line-height: 14px;
        color: rgb(64, 99, 103);
        margin: 2px 0px;
    }
`

export const SentMessage = styled.div`
    border-radius: 4px;
    padding: 8px;
    position: relative;
    /* width: 100%; */
    background: rgb(206, 221, 255);

    & > div{
        border-bottom: 15px solid rgb(206, 221, 255);
        border-left: 0px solid transparent;
        border-right: 25px solid transparent;
        border-top-left-radius: 1px;
        border-top-right-radius: 8px;
        bottom: -5px;
        box-sizing: content-box;
        display: block;
        height: 0px;
        position: absolute;
        right: 0px;
        transform: rotate(169deg);
        width: 5px;
    }
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