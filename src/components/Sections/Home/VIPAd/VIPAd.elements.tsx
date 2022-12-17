import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const VIPinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VIPgrid = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;

`

export const CardWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.div`
    width: 100%;
    height: 50%;

    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const CardTitle = styled.h4`
    padding: 15px 0;
    font-size: 20px;
    font-style: normal;
    line-height: 1.25;
    color: ${Colors.main_green};
    flex-grow: 1;
`
export const CardFooter = styled.div`
    width: 100%;
    height: auto;
`

export const CardFooterInfo = styled.div`
    font-size: 13px;
`
export const CardFooterContant = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
`

export const CardPrice = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${Colors.main_green};
`

export const CardFavoritesIcon = styled.div`
    cursor: pointer;
    color: ${Colors.main_green};

    &:hover {
        color: gray;
    }
`