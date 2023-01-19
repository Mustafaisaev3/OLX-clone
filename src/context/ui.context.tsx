import React, { createContext, useContext, useMemo, useReducer } from "react";

export type confirmationModalDataType = null | {question: string, perfomedFunction: () => any}

export interface State {
    displayModal: boolean;
    modalView: string;
    modalData: any;
    displayChatModal: boolean;
    chatModalData: any;
    displayImagesModal: boolean;
    imagesModalView: string;
    imagesModalData: any;
    toastText: string;
    toastList: [];
    displayConfirmationModal: boolean;
    confirmationModalView: string;
    confirmationModalData: confirmationModalDataType;
}
  
const initialState = {
    displayModal: false,
    modalView: "SELECT_NEW_AD_CATEGORY_VIEW",
    modalData: null,
    displayChatModal: false,
    chatModalData: null,
    displayImagesModal: false,
    imagesModalView: "IMAGE_SLIDER_VIEW",
    imagesModalData: null,
    toastText: '',
    toastList: [],
    displayConfirmationModal: false,
    confirmationModalView: "CONFIRMATION_MODAL_VIEW",
    confirmationModalData: null,
};

export type ToastType = {
  id: number,
  toastType: string,
  text: string
}

type Action =
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    } 
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "OPEN_CHAT_MODAL";
    }
  | {
      type: "CLOSE_CHAT_MODAL";
    }
  | {
      type: "SET_CHAT_MODAL_DATA";
      data: any;
    } 
  | {
      type: "OPEN_IMAGES_MODAL";
    }
  | {
      type: "CLOSE_IMAGES_MODAL";
    }
  | {
      type: "SET_IMAGES_MODAL_DATA";
      data: any;
    } 
  | {
      type: "SET_IMAGES_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "ADD_TOAST";
      toast: ToastType;
    }
  | {
      type: "DELETE_TOAST";
      id: number;
    }
  | {
      type: "SET_TOAST_TEXT";
      text: string;
    }
  | {
      type: "OPEN_CONFIRMATION_MODAL";
    }
  | {
      type: "CLOSE_CONFIRMATION_MODAL";
    }
  | {
      type: "SET_CONFIRMATION_MODAL_VIEW";
      view: CONFIRMATION_MODAL_VIEWS;
    }
  | {
      type: "SET_CONFIRMATION_MODAL_DATA";
      data: confirmationModalDataType;
    }

type MODAL_VIEWS =
  | "SIGN_UP_VIEW"
  | "LOGIN_VIEW"
  | "IMAGE_SLIDER_VIEW"
  | "ORDER_POPUP"
  | "SELECT_NEW_AD_CATEGORY_VIEW"

type CONFIRMATION_MODAL_VIEWS = "CONFIRMATION_MODAL_VIEW";

export const UIContext = createContext<State | any>(initialState);

function uiReducer(state: State, action: Action) {
    switch (action.type) {

      case "OPEN_MODAL": {
        return {
          ...state,
          displayModal: true,
        };
      }

      case "CLOSE_MODAL": {
        return {
          ...state,
          displayModal: false,
        };
      }

      case "SET_MODAL_VIEW": {
        return {
          ...state,
          modalView: action.view,
        };
      }

      case "SET_MODAL_DATA": {
        return {
          ...state,
          modalData: action.data,
        };
      }

      case "OPEN_CHAT_MODAL": {
        return {
          ...state,
          displayChatModal: true,
        };
      }

      case "CLOSE_CHAT_MODAL": {
        return {
          ...state,
          displayChatModal: false,
        };
      }

      case "SET_CHAT_MODAL_DATA": {
        console.log(action.data)
        return {
          ...state,
          chatModalData: action.data,
        };
      }

      case "OPEN_IMAGES_MODAL": {
        return {
          ...state,
          displayModal: true,
        };
      }

      case "CLOSE_IMAGES_MODAL": {
        return {
          ...state,
          displayModal: false,
        };
      }

      case "SET_IMAGES_MODAL_VIEW": {
        return {
          ...state,
          modalView: action.view,
        };
      }

      case "SET_IMAGES_MODAL_DATA": {
        return {
          ...state,
          modalData: action.data,
        };
      }

      case "SET_TOAST_TEXT": {
        return {
          ...state,
          toastText: action.text,
        };
      }

      case "ADD_TOAST": {
        const toast = action.toast
        let newToastList: ToastType[] = []
        newToastList.unshift(toast)
  
        return {
          ...state,
          toastList: [...state.toastList, ...newToastList]
        }
      }

      case 'DELETE_TOAST':
        let newToastList = state.toastList.filter((element: ToastType) => {
          return action.id !== element.id 
        })
        return {
          ...state,
          toastList: [...newToastList]
        }
      
      case "OPEN_CONFIRMATION_MODAL": {
        return {
          ...state,
          displayConfirmationModal: true,
          displaySidebar: false,
        };
      }

      case "CLOSE_CONFIRMATION_MODAL": {
        return {
          ...state,
          displayConfirmationModal: false,
        };
      }

      case "SET_CONFIRMATION_MODAL_VIEW": {
        return {
          ...state,
          confirmationModalView: action.view,
        };
      }

      case "SET_CONFIRMATION_MODAL_DATA": {
        return {
          ...state,
          confirmationModalData: action.data,
        };
      }
    }
}

export const UIProvider: React.FC<any> = (props: any) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const openModal = () => dispatch({type: 'OPEN_MODAL'})
    const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
    const setModalData = (data: any) => dispatch({type: 'SET_MODAL_DATA', data})
    const setModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_MODAL_VIEW', view})

    const openChatModal = () => dispatch({type: 'OPEN_CHAT_MODAL'})
    const closeChatModal = () => dispatch({type: 'CLOSE_CHAT_MODAL'})
    const setChatModalData = (data: any) => dispatch({type: 'SET_CHAT_MODAL_DATA', data})

    const openImagesModal = () => dispatch({type: 'OPEN_IMAGES_MODAL'})
    const closeImagesModal = () => dispatch({type: 'CLOSE_IMAGES_MODAL'})
    const setImagesModalData = (data: any) => dispatch({type: 'SET_IMAGES_MODAL_DATA', data})
    const setImagesModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_IMAGES_MODAL_VIEW', view})

    const addToast = (toast: ToastType) => dispatch({type: 'ADD_TOAST', toast})
    const deleteToast = (id: number) => dispatch({type: 'DELETE_TOAST', id})

    const openConfirmationModal = () => dispatch({ type: "OPEN_CONFIRMATION_MODAL" });
    const closeConfirmationModal = () => dispatch({ type: "CLOSE_CONFIRMATION_MODAL" });
    const setConfirmationModalView = (view: CONFIRMATION_MODAL_VIEWS) => dispatch({ type: "SET_CONFIRMATION_MODAL_VIEW", view });
    // const setConfirmationModalData = (data: confirmationModalDataType) => dispatch({ type: "SET_CONFIRMATION_MODAL_DATA", data });
    const setConfirmationModalData = (question: string, perfomedFunction: () => any) => dispatch({ type: "SET_CONFIRMATION_MODAL_DATA", data: {question, perfomedFunction} });

    const value = useMemo(() => ({
        ...state,
        openModal,
        closeModal,
        setModalData,
        setModalView,
        openChatModal,
        closeChatModal,
        setChatModalData,
        openImagesModal,
        closeImagesModal,
        setImagesModalData,
        setImagesModalView,
        addToast,
        deleteToast,
        openConfirmationModal,
        closeConfirmationModal,
        setConfirmationModalView,
        setConfirmationModalData,
    }), [state])

    return <UIContext.Provider value={value} {...props} />;
}

export const useUI = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
      throw new Error(`useUI must be used within a UIProvider`);
    }

    return context;
};
  

export const ManagedUIContext = ({ children }: any) => (
  // <CartProvider>
    <UIProvider>{children}</UIProvider>
  // </CartProvider>
);
