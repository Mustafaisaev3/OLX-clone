import React, { useEffect, useRef } from 'react'
import {Portal} from 'react-portal'
import styled from 'styled-components'
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

const ModalInner = styled.div`
    width: auto;
    height: auto;
`

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const Modal = ({children, open}: any) => {
  const modalRootRef = useRef() as DivElementRef
  const modalInnerRef = useRef() as DivElementRef

  useEffect(() => {

    if(modalInnerRef.current){
        if(open){
            if (open) {
				disableBodyScroll(modalInnerRef.current);
			} else {
				enableBodyScroll(modalInnerRef.current);
			}
        }
    }

    return () => clearAllBodyScrollLocks()
  }, [open])

  return (
    <Portal>
        {open && (
            <ModalContainer ref={modalRootRef}>
                <ModalInner ref={modalInnerRef}>
                    {children}
                </ModalInner>
            </ModalContainer>
        )}
    </Portal>
  )
}

export default Modal