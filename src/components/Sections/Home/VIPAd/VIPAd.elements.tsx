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

