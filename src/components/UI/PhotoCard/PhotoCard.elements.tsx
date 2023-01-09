import styled from "styled-components";

export const PhotoCardContainer = styled.div`
    width: 200px;
    height: 150px;
    border-radius: 5px;
    background-color: rgb(242, 244, 245);
    position: relative;
    overflow: hidden;
    cursor: pointer;
`

export const PhotoCardContainerEmpty = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`

export const PhotoCardInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

export const PhotoCardIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PhotoCardImage = styled.image`
    width: 100%;
    height: 100%;
`

export const PhotoCardImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const PhotoCardTools = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #00000092;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
`

export const PhotoCardToolsItem = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`