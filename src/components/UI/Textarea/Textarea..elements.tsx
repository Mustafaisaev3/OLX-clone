import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const TextareaContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const TextareaComp = styled.textarea`
    width: 100%;
    min-height: 200px;
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

export const Label = styled.label`
    color: #71848d;
    font-size: 16px;
    line-height: 1.29;
    margin-bottom: 6px;
    
`

export const TextareaError = styled.p`
    font-size: 12px;
    color: red;
    padding-top: 5px;
`

export const CharactersNumInfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`