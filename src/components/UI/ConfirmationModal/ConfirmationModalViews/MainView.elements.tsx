import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const ConfirmationModalBody = styled.div`
    /* 'w-[400px] h-auto p-[40px] rounded-md bg-[#252836] flex flex-col justify-center items-center ' */
    width: 400px;
    height: auto;
    padding: 40px;
    border-radius: 5px;
    color: ${Colors.text_second};
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ConfirmationModalQuestion = styled.h2`
    /* font-bold text-2xl text-white text-center */
    color: ${Colors.text_main};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 30px;
`

export const ConfirmationModalBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const ConfirmationModalConfirmBtn = styled.div`
    /* px-4 py-2 bg-green-500 text-white font-bold rounded-sm cursor-pointer */
    background-color: #08e808;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
`

export const ConfirmationModalRejectBtn = styled.div`
    /* px-4 py-2 bg-green-500 text-white font-bold rounded-sm cursor-pointer */
    background-color: red;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
`