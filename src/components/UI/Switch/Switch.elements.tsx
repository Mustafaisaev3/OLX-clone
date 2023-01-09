import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;

    & > input{
        opacity: 0;
        position: absolute;
    }

    input[type='checkbox']:checked + label {
        background-color: ${Colors.main_green};
        justify-content: flex-end;
        transition: 0.3s ease 0s;
    }
    
    input[type='checkbox']:checked + label > div {
        border: 4px solid white;
    }
`

export const SwitchBody = styled.label`
    width: 50px;
    height: 25px;
    padding: 0px 3px;
    background-color: rgb(216, 223, 224);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;    
    transition: 0.3s ease 0s;

`

export const SwitchRound = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: none;
    border: 3px solid ${Colors.main_green};
`
