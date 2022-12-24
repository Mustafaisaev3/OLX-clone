import styled from "styled-components"
import { ButtonTypes } from "../../../utils/button_types/button_types"
import Colors from "../../../utils/css_variables/colors"

export const ButtonEl = styled.button<any>`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    line-height: 0;
    color: ${({type}) => type?.color} ;
    background-color: ${({type}) => type?.bg} ;
    border: ${({type}) => type?.borderSize} solid ${({type}) => type?.borderColor};
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        border: ${({type}) => type?.borderHoverSize} solid ${({type}) => type?.hoverBorderColor}; 
        color: ${({type}) => type?.hoverColor};
        background-color: ${({type}) => type?.hoverBg};
    }
`
// export const ButtonEl = styled.button<any>`
//     width: auto;
//     height: 50px;
//     padding: 10px 20px;
//     line-height: 0;
//     color: ${({type}) => type == 'secondary' ? 'white' : Colors.main_green} ;
//     background-color: ${({type}) => type == 'secondary' ? Colors.main_green : 'white'} ;
//     border: 5px solid #fff;
//     border-radius: 5px;
//     cursor: pointer;
    
//     &:hover {
//         border: 5px solid #fff;
//         color: #fff;
//         background-color:  ${Colors.main_green};
//     }
// `