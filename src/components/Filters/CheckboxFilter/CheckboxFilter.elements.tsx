import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const CheckBoxFilterItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    /* justify-content: center; */

    &:hover {
        background-color: ${Colors.main_green};
        color: white;
    }
`
