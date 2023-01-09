import styled from "styled-components";
import CheckIcon from '../../../../public/assets/images/icons/check-mark.png'
import Colors from '../../../utils/css_variables/colors'

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & label {
        display: flex;
        align-items: center;
        line-height: 1;
        padding: 10px 0;
        /* padding: 10px 15px; */
    }

    & input {
        opacity: 0;
        position: absolute;
    }

    & > label::before{
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        width: 30px;
        min-width: 30px;
        min-height: 30px;
        border: 2px solid ${Colors.main_green};
        border-radius: 5px;
        background-color: white;
    }

    input[type='checkbox']:checked + label::before {
        background-color: ${Colors.main_green};
        background-image: url(${CheckIcon.src});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`