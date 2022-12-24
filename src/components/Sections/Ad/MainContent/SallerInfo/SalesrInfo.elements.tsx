import styled from "styled-components";
import { ButtonTypes } from "../../../../../utils/button_types/button_types";
import Colors from "../../../../../utils/css_variables/colors";
import Button from "../../../../UI/Button/Button";

export const SallerInfoContainer = styled.div`
    width: 100%;
    height: auto;
`

export const UserInfoBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const UserImage = styled.img`
    min-width: 60px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: ${Colors.main_green};

`

export const UserInfo = styled.div`
    width: 100%;
    height: auto;
`

export const UserName = styled.h2`
    color: ${Colors.text_main};
`

export const LustOnlineDate = styled.p`
    color: #939393;
`

export const SallerInfoBtns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    gap: 10px;
`

export const AllSallerAdsLinkContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AllSallerAdsLink = styled.a`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    color: ${Colors.text_main};
`

