import styled from "styled-components";
import Colors from "../../utils/css_variables/colors";

export const ImagesContainer = styled.div`
    position: relative;

    .swiper-button-prev, .swiper-button-next{
        width: 40px;
        height: 40px;
        background-color: #fff ;
        opacity: 1;
        border-radius: 5px;

        &::after{
            font-size: 30px;
            color: ${Colors.text_main}
        }
    }

    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
        background-color: #ffffff6d ;
    }

    .swiper-pagination{
        & span {
            width: 20px;
            height: 20px;
            border: 5px solid white;
            background-color: #fff0;
        }
    }


`

export const ImageItem = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
`
