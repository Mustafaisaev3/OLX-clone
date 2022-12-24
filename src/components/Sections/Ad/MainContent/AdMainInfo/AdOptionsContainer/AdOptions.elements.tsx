import styled from "styled-components";
import Colors from "../../../../../../utils/css_variables/colors";

export const AdOptionsContainer = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 15px;
    padding-bottom: 30px;
`

export const AdOption = styled.li`
    width: auto;
    height: auto;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.text_main};
    border: 1px solid #406367;
    border-radius: 3px;

`