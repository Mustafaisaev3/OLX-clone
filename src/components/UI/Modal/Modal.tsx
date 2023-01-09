import React, { useEffect, useRef } from 'react'
import {Portal} from 'react-portal'
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { ModalBody, ModalCloseBtn, ModalContainer, ModalHaederComp, ModalInner } from './Modal.elements';
import { GrClose } from 'react-icons/gr'
import Colors from '../../../utils/css_variables/colors';
import { useUI } from '../../../context/ui.context';


const ModalHeader = () => {
    const { closeModal } = useUI()
    const handleCloseModalBtn = () => {
        closeModal()
    }

    return(
        <ModalHaederComp>
            <ModalCloseBtn onClick={handleCloseModalBtn}>
                <GrClose size={20} color={Colors.text_main} />
            </ModalCloseBtn>
        </ModalHaederComp>
    )
}

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
                    <ModalHeader />
                    <ModalBody>
                        {children}
                    </ModalBody>
                </ModalInner>
            </ModalContainer>
        )}
    </Portal>
  )
}

export default Modal