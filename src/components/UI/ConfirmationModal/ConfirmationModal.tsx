import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useRef, useEffect } from "react";
import { Portal } from "react-portal";
import { useUI } from "../../../context/ui.context";
import { ConfirmationModalContainer } from "./ConfirmationModal.elements";
import MainView from "./ConfirmationModalViews/MainView";



type ConfirmationModalProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose: () => void;
	rootClassName?: string;
	useBlurBackdrop?: boolean;
	containerClassName?: string;
	variant?: "center" | "bottom";
};
type DivElementRef = React.MutableRefObject<HTMLDivElement>;



const ConfirmationModal: FC<ConfirmationModalProps> = ({
	children,
	open,
	onClose,
}) => {
	const { closeConfirmationModal } = useUI();
	const handleCloseModalBtn = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		onClose()
	}

	return (
		<Portal>
			<AnimatePresence>
				{open && (
					<ConfirmationModalContainer>
						{children}
						{/* <MainView></MainView> */}
					</ConfirmationModalContainer>
				)}
			</AnimatePresence>
		</Portal>
	);
};

export default ConfirmationModal;
