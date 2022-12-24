import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const AuthorizationContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3a77ff;
    position: relative;
    overflow: hidden;
`

export const Round = styled.div`
    width: 1000px;
    height: 1000px;
    border: 150px solid #ceddff;
    border-radius: 100%;
    position: absolute;
    margin: 0 auto;
`


export const FormContainer = styled.div`
    width: 400px;
    height: auto;
    background-color: #fff;
    /* padding: 37px 32px 46px; */
    border-radius: 5px;
    z-index: 1;
`

export const AuthorizationHeader = styled.div`
    width: 100%;
    height: auto;
    border-bottom: 1px solid black;
    position: relative;
`

export const FacebookLoginBtn = styled.div`
    width: 100%;
    height: auto;
`

export const Abo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 20px 0;
    color: ${Colors.text_main};
`

export const HeaderItemsContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const HeaderAnimationStripe = styled.div`
    width: 50%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${Colors.main_green};
`
