import styled from "styled-components"
import Colors from "../../../utils/css_variables/colors"

export const ButtonEl = styled.button`
    width: auto;
    height: 50px;
    padding: 10px 20px;
    line-height: 0;
    color: ${Colors.main_green};
    background-color: #fff;
    border: 5px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color:  ${Colors.main_green};
    }
`