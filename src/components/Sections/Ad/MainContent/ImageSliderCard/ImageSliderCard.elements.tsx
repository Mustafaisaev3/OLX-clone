import styled from "styled-components";
import Image from "next/image";
import Colors from "../../../../../utils/css_variables/colors";

export const ImagesContainer = styled.div`
    position: relative;
`

export const ImageItem = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
`

export const FullSizeIcon = styled.div`
    width: 40px;
    height: 40px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    z-index: 1;
    cursor: pointer;
`