import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const EmptyAccountAdsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > img{
        margin-bottom: 30px
    }

    & > h3 {
        line-height: 26px;
        font-weight: 700;
        font-size: 20px;
        color: ${Colors.text_main};
        margin: 0px 0px 16px;
    }

    & > p {
        margin-bottom: 32px;
        line-height: 18px;
        font-size: 16px;
        color: rgb(0, 47, 52);
    }

    & > button {
        width: auto;
    }
`