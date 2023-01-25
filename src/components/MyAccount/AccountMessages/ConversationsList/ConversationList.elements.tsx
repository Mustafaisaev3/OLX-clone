import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const ConversationListContainer = styled.div`
    width: 500px;
    height: 600px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const ConversationListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`

export const ConversationListBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const ConversationListBlockTitle = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.text_main};
    text-transform: uppercase;
    height: 40px;
    font-weight: 700;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: start;
    justify-content: flex-start;
    background-color: rgb(255, 255, 255);
    padding: 0px 20px;
    border-bottom: 1px solid rgb(216, 223, 224);
`

export const ConversationsList = styled.ul`
    overflow-y: scroll;
    flex-grow: 1;
`

export const ConversationListItem = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 20px;
    -moz-box-align: center;
    align-items: center;
    font-weight: normal;
    position: relative;
    user-select: none !important;
    /* border-bottom: 1px solid black; */

    &.active {
        background-color: #6fffec6a;
    }
`

export const ConversationListItemImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${Colors.main_green};
    overflow: hidden;

    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export const ConversationListItemBody = styled.div`
    flex-grow: 1;
    padding: 0 20px;
`

export const ConversationListItemUser = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: rgb(127, 151, 153);
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const ConversationListItemTitle = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.main_green};
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: inherit;
`

export const ConversationListItemMessage = styled.p`
    font-size: 14px;
    line-height: 18px;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(64, 99, 103);
    font-weight: inherit;
`

export const ConversationListItemDate = styled.p`
    font-size: 14px;
    line-height: 18px;
    margin: 0px;
    font-weight: inherit;
    color: rgb(127, 151, 153);
`