import styled from "styled-components";

export const ToastContainer = styled.div`
    min-width: 200px;
    max-width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    top: 0;
    right: 0;
    margin: 30px;
`

export const ToastItemElement = styled.div<any>`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px;
    color: ${({data}) => data.color};
    background-color: ${({data}) => data.bg};

    & > svg{
        color: ${({data}) => data.color};
    }
`


// border-left: 3px solid rgb(110, 192, 95);
// opacity: 1;
// margin-bottom: 15px;
// }
// .ct-toast {
// display: flex;
// justify-content: center;
// align-items: center;
// padding: 12px 20px;
// background-color: #fff;
// box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
// color: #000;
// border-radius: 4px;
// margin: 0px;
//   margin-bottom: 0px;
// opacity: 1;
// transition: 0.3s all ease-in-out;
// min-height: 45px;
// pointer-events: all;
// }