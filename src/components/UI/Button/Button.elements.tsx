import styled from "styled-components"
import Colors from "../../../utils/css_variables/colors"

export const ButtonEl = styled.button<any>`
    width: auto;
    height: 50px;
    padding: 10px 20px;
    line-height: 0;
    color: ${({type}) => type == 'secondary' ? 'white' : Colors.main_green} ;
    background-color: ${({type}) => type == 'secondary' ? Colors.main_green : 'white'} ;
    border: 5px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        border: 5px solid #fff;
        color: #fff;
        background-color:  ${Colors.main_green};
    }
`