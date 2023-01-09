import React, { createContext, useContext, useMemo, useReducer } from "react";

export interface State {
    displayModal: boolean;
    modalView: string;
    modalData: any;
    displayImagesModal: boolean;
    imagesModalView: string;
    imagesModalData: any;
}
  
const initialState = {
    displayModal: false,
    modalView: "SELECT_NEW_AD_CATEGORY_VIEW",
    modalData: null,
    displayImagesModal: false,
    imagesModalView: "IMAGE_SLIDER_VIEW",
    imagesModalData: null,
};

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
  

type MODAL_VIEWS =
  | "SIGN_UP_VIEW"
  | "LOGIN_VIEW"
  | "IMAGE_SLIDER_VIEW"
  | "ORDER_POPUP"
  | "SELECT_NEW_AD_CATEGORY_VIEW"



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
    }
}

export const UIProvider: React.FC<any> = (props: any) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const openModal = () => dispatch({type: 'OPEN_MODAL'})
    const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
    const setModalData = (data: any) => dispatch({type: 'SET_MODAL_DATA', data})
    const setModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_MODAL_VIEW', view})

    const openImagesModal = () => dispatch({type: 'OPEN_IMAGES_MODAL'})
    const closeImagesModal = () => dispatch({type: 'CLOSE_IMAGES_MODAL'})
    const setImagesModalData = (data: any) => dispatch({type: 'SET_IMAGES_MODAL_DATA', data})
    const setImagesModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_IMAGES_MODAL_VIEW', view})

    const value = useMemo(() => ({
        ...state,
        openModal,
        closeModal,
        setModalData,
        setModalView,
        openImagesModal,
        closeImagesModal,
        setImagesModalData,
        setImagesModalView,
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
