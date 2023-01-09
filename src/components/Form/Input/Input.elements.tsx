import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const InputComponent = styled.div`
    margin-bottom: 16px;
    text-align: left;
    position: relative;
`

export const Label = styled.label`
    color: #71848d;
    font-size: 16px;
    line-height: 1.29;
    margin-bottom: 6px;
    
`

export const InputComp = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 4px;
    background: #f2f4f5;
    outline: none;
    border-bottom: 2px solid white;
    
    &:focus{
        border-bottom: 2px solid ${Colors.main_green}
    }
`

export const InputError = styled.p`
    font-size: 12px;
    color: red;
    padding-top: 5px;
`