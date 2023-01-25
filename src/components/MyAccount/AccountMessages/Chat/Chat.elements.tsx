import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const ChatContainer = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const ChatHeader = styled.div`
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    padding: 0px 20px;
    background-color: rgb(255, 255, 255);
    min-height: 56px;
    border-bottom: 1px solid rgb(216, 223, 224);
`

export const ChatHeaderSenderInfo = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ChatHeaderSenderImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${Colors.main_green};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ChatHeaderSenderName = styled.h2`
    font-size: 16px;
    line-height: 20px;
    color: ${Colors.main_green};
    margin: 0px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ActionsMenuBar = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`

export const ActionsMenuBarItem = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

// Conversation Ad Details
export const ConversationAdDetailsLink = styled.a`
    width: 100%;
    height: 64px;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    text-decoration: none;
    padding: 12px 20px;
    background-color: rgb(255, 255, 255);
`

export const ConversationAdDetail = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    /* align-items: center; */
    gap: 10px;
`

export const ConversationAdImage = styled.div`
    width: 50px;
    height: 40px;
    background-color: ${Colors.main_green};
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ConversationAdTitle = styled.h2`
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.text_main};
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ConversationAdId = styled.p`
    font-size: 12px;
    line-height: 14px;
    margin: 0px 0px 0px auto;
    color: rgb(127, 151, 153);
    flex-shrink: 0;
`


// Coversation Messages Block
export const CoversationMessagesBlock = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    overflow-y: scroll;
    flex-grow: 1;
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

// Conversation Input Block
export const ConversationInputBlock = styled.div`
    width: 100%;
    height: auto;
    border-top: 1px solid black;
    display: flex;
    align-items: center;

    & > div{
        width: 100%;
        margin: 0;

        & .input{
            border: none;
        }

        & .input:focus{
            border: none;        
        }
    }

`

export const ConversationSendIcon = styled.div`
    width: 32px !important;
    height: 32px !important;
    padding: 5px;
    background-color: ${Colors.main_green};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`