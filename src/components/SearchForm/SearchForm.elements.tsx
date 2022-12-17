import styled from "styled-components";
import Colors from "../../utils/css_variables/colors";


// Home Search FORM
export const SeacrhFormContainer = styled.div`
    width: 100%;
    height: 200px;
`
export const SeacrhFormInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const SeacrhForm = styled.form`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* overflow: hidden; */

`

export const SearchInputContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 2;
    
    & > input {
        width: 100%;
        outline: none;
    }

    & > svg {
        margin: 0px 20px;
    }
`

export const SearchFormButton = styled.button`
    width: auto;
    height: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    color: ${Colors.main_green};
    background-color: white;
    border-left: 1px solid ${Colors.main_bg};
    cursor: pointer;


    &:hover {
        color: white;
        background-color: ${Colors.main_green};
    }

    &:hover .search-input__icon{
        color: white;
    }
    
    .search-input__icon {
        color: ${Colors.main_green};
    }
`
