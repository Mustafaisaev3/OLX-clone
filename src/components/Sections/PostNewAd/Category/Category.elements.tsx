import styled from "styled-components";

export const CheckedCategoryItem = styled.div<any>`
    width: 350px;
    height: 70px;
    background-color: ${({color}) => color};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 10px;
`

export const CategoryImage = styled.div<any>`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: ${({color}) => color};
    overflow: hidden;

    & > img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
`

export const CategoryContent = styled.div`
    flex-grow: 1;
`

export const CategoryContentTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
`

export const CategoryContentSubtitle = styled.div`
    font-size: 15px;
`

export const CategoryBtn = styled.div`
    cursor: pointer;
    border-bottom: 2px solid #000;
`
