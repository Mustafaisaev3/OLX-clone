import Link from "next/link";
import styled from "styled-components";
import Colors from "../../utils/css_variables/colors";

export const PaginationContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PaginationList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const PaginationItem = styled.li`
    width: 35px;
    height: 35px;
    border: 2px solid ${Colors.text_main};
    border-radius: 100%;
    color: ${Colors.text_main};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        border: 4px solid ${Colors.text_main}
    }
`

export const CustomLink = styled(Link)`
    width: 35px;
    height: 35px;
    color: ${Colors.text_main};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

