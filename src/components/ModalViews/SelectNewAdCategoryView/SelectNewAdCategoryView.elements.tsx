import styled from "styled-components";

export const CategoryViewModal = styled.div`
    width: 1000px;
    height: 700px;
    /* max-height: 700px; */
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`

export const Title = styled.h2`
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    color: rgb(0, 47, 52);
    margin: 0px 0px 12px;
`

// export const CategoryGrid = styled.div`
//     width: 100%;
//     height: auto;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap: 15px;
// `

// export const CategoryGridItem = styled.div`
//     width: 100%;
//     height: 80px;
//     border-radius: 5px;
//     background-color: #0854ec37;
// `

export const CategoryGrid = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
`

export const CategoryGridItem = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

export const CategoryItemBlock = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #7878787e;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.active {
        background-color: rgb(206, 221, 255);
    }
    
    &:hover{
        background-color: rgb(206, 221, 255);
    }
`

export const CategoryItemTitle = styled.div`
    
`