import styled from "styled-components";
import Colors from "../../utils/css_variables/colors";


export const LocationSearchContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;
    border-left: 1px solid ${Colors.main_bg};
    position: relative;
    
    & > input {
        width: 100%;
        outline: none;
    }

    & > svg {
        margin: 0px 20px;
    }
`

export const LocationsModal = styled.div`
    width: 900px;
    height: auto;
    padding: 10px 10px 0 10px;
    position: absolute;
    top: 110%;
    left: -50%;
    background-color: white;
    -webkit-box-shadow: 0px 2px 2px 1px rgba(194,194,194,0.73); 
    box-shadow: 0px 2px 2px 1px rgba(194,194,194,0.73);

`

export const LocationsModalHeader = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 20px;

    & > div {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const LocationsModalContant = styled.div`
    width: 100%;
    height: 100%;
    max-height: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-top: 1px solid gray;
`

export const LocationCantantItem = styled.div`
    width: 25%;
    height: auto;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: ${Colors.main_green};

    &:hover {
        color: white;
        background-color: ${Colors.main_green};
    }
`