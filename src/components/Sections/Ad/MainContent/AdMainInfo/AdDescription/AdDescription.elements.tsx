import styled from "styled-components";
import Colors from "../../../../../../utils/css_variables/colors";

export const AdDescriptionContainer = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 30px;
`

export const AdDescriptionTitle = styled.h3`
    color: ${Colors.text_main};
    text-transform: uppercase;
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 16px;
    margin-top: 4px;
`

export const Description = styled.p`
    color: ${Colors.text_main};
    font-size: 16px;
    line-height: 22px;
    width: 100%;
`