import styled from "styled-components";
import Colors from "../../../../../../utils/css_variables/colors";

export const AdFooterContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 15px 0;
    border-top: 1px solid ${Colors.main_green};
    display: flex;
    justify-content: space-between;
`

export const AdID = styled.div`
    white-space: nowrap;
    font-size: 12px;
    line-height: 14px;
    color: rgb(64, 99, 103);
`

export const AdViewsCount = styled.div`
    white-space: nowrap;
    font-size: 12px;
    line-height: 14px;
    color: rgb(64, 99, 103);
`