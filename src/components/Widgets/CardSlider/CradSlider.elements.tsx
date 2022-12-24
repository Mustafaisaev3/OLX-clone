import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const CardSliderContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    margin-top: 40px;
`

export const CardSliderTitle = styled.h3`
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    padding-bottom: 20px;
    color: ${Colors.text_main};
`

export const CardsContainer = styled.div`
    width: 100%;
    height: auto;
`

export const CardCont = styled.div`
    width: 100px;
    height: 200px;
`

export const SliderButtons = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 30px;

    & > svg {
        cursor: pointer;
    }
`