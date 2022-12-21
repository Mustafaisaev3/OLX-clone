import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const ImageSliderModal = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px;
    background-color: ${Colors.main_green};
    position: relative;
    z-index: 1;
`

export const ImageSliderHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ImagesSliderTitle = styled.h2`
    color: white;
`

export const ImagesSliderCloseBtn = styled.div`
    color: white;
    cursor: pointer;
`

export const ImagesSliderContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 0;
    display: flex;
    gap: 50px;
`

export const SliderContainer = styled.div`
    width: 75%;
    height: 600px;
`

export const UserBtns = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
