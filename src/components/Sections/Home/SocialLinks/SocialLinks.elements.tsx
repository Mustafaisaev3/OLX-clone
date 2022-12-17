import styled from "styled-components";
import Image from "next/image";

export const SocialLinksInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > img {
        margin: 50px 0;
    }
`

export const SocialLinksText = styled.div`
    text-align: center;
`

export const SocialLinksContainer = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const SocialLinksItem = styled.div`
`

export const SocialLink = styled.a`

`

export const SocialLinksSpan = styled.span`
    color: '#4e4e4e';
    font-size: 13px;
`