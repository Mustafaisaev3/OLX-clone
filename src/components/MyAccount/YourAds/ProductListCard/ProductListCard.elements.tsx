import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const ProductContent = styled.div`
    display: flex;
`

export const ProductImage = styled.div`
    width: 250px;
    height: auto;
    border-radius: 5px;

    & > img{
        object-fit: cover;
    }
`

export const ProductInfo = styled.div`
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

`

export const ProductHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
`
export const ProductTitle = styled.h4`
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    color: ${Colors.text_main};
    margin: 0px;

    & > a {
        color: inherit;
    }

    & > a:hover {
        text-decoration: underline
    }
`
export const ProductPrice = styled.h6`
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    color: ${Colors.text_main};
    margin: 0px 8px 0px 0px;
    white-space: nowrap;
`

export const ProductInfoBody = styled.div`
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    flex-grow: 1;
    border-bottom: 1px solid rgb(216, 223, 224);
`

export const ProductInfoLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 15px;
`

export const ProductCategories = styled.ul`
    display: flex;

    & > li {
        font-size: 14px;
        line-height: 18px;
        color: rgb(64, 99, 103);
        margin: 0px;
    }

    & > li::before {
        content: '•';
        margin: 0 10px;
        
    }
`

export const ProductLocation = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    
    & > p {
        font-size: 14px;
        line-height: 18px;
        color: rgb(64, 99, 103);
        margin: 0px;
    }
`

export const ProductDate = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    
    & > p {
        font-size: 14px;
        line-height: 18px;
        color: rgb(64, 99, 103);
        margin: 0px;
    }
`

export const ProductInfoRight = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 20px;
    & > button {
        width: auto;
        height: 40px;
        padding: 10px;
    }

    & .messages-btn{
        width: auto;
        height: 40px;
        color: ${Colors.text_main};

        & > p{
            color: inherit;
        }
    }
    & .messages-btn:hover{
        color: white;
        & > p{
            color: inherit;
        }
    }
`

export const ProductInfoBar = styled.ul`
    display: flex;
    align-items: center;
`

export const ProductInfoBarItem = styled.ul`
    padding-left: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ProductFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;

    & > p {
        flex-shrink: 0;
        width: 216px;
        font-size: 12px;
        color: rgb(64, 99, 103);
    }

    & > button {
        width: auto;
    }
`

export const ProductFooterBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & > button {
        height: 40px;
    }
`