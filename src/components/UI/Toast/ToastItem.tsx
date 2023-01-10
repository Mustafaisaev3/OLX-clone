import React, { useEffect } from 'react'
import { ToastType, useUI } from '../../../context/ui.context'
import { ToastTypes } from '../../../utils/toast_types/toast_types'
import { ToastItemElement } from './Toast.elements'

// Icons
import { BiErrorCircle } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'
import { FiAlertOctagon } from 'react-icons/fi'

interface ToastItemType {
    data: ToastType
}

const ToastItem: React.FC<ToastItemType> = ({ data }) => {
    const { deleteToast } = useUI()
    const handleDeleteToastBtnClick = () => {
        deleteToast(data.id)
    }

    const getIcon = (type: string, size: number, color?: string) => {
        const icons = {
            success: <BsCheckCircle size={size} color={color}  />,
            warning: <FiAlertOctagon size={size} color={color}  />,
            error: <BiErrorCircle size={size} color={color}  />,
        }
        return icons[type]
    }
    
    useEffect(() => {
        setTimeout(() => {
            deleteToast(data.id)
        }, 5000)
    }, [data.id])

    return (
        <ToastItemElement data={ToastTypes[data.toastType]} onClick={handleDeleteToastBtnClick}>
            {data.text}
            {getIcon(data.toastType, 20)}
        </ToastItemElement>
    )
}

export default ToastItem