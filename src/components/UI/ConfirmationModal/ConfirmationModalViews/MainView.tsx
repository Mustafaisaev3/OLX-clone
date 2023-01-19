import React from 'react'
import { useUI } from '../../../../context/ui.context'
import { ConfirmationModalBody, ConfirmationModalBtns, ConfirmationModalConfirmBtn, ConfirmationModalQuestion, ConfirmationModalRejectBtn } from './MainView.elements'


const MainView = () => {
  const {confirmationModalData, closeConfirmationModal} = useUI()

  const handleConfirmBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    confirmationModalData.perfomedFunction()
    closeConfirmationModal()
  }

  const handleCancelBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    closeConfirmationModal()
  }
  return (
        <ConfirmationModalBody>
            <ConfirmationModalQuestion>{confirmationModalData.question}</ConfirmationModalQuestion>
            <ConfirmationModalBtns>
              <ConfirmationModalConfirmBtn onClick={handleConfirmBtn}>Підтвердити</ConfirmationModalConfirmBtn>
              <ConfirmationModalRejectBtn onClick={handleCancelBtn}>Скасувати</ConfirmationModalRejectBtn>
            </ConfirmationModalBtns>
        </ConfirmationModalBody>
  )
}

export default MainView