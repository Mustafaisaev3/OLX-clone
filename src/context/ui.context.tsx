import React, { createContext, useContext, useMemo, useReducer } from "react";

export interface State {
    displayModal: boolean;
    modalView: string;
    modalData: any;
}
  
const initialState = {
    displayModal: false,
    modalView: "LOGIN_VIEW",
    modalData: null,
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
  

type MODAL_VIEWS =
  | "SIGN_UP_VIEW"
  | "LOGIN_VIEW"
  | "ORDER_POPUP"
  | "CONFIRMATION_MODAL_VIEW"
  | "PRODUCT_VIEW"
  | "ADD_PRODUCT_VIEW"
  | "UPDATE_PRODUCT_VIEW"
  | "ADD_DEPARTMENT_VIEW"
  | "UPDATE_DEPARTMENT_VIEW";


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
    }
}

export const UIProvider: React.FC<any> = (props: any) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const openModal = () => dispatch({type: 'OPEN_MODAL'})
    const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
    const setModalData = (data: any) => dispatch({type: 'SET_MODAL_DATA', data})
    const setModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_MODAL_VIEW', view})

    const value = useMemo(() => ({
        openModal,
        closeModal,
        setModalData,
        setModalView,
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
  
export const ManagedUIContext: React.FC = ({ children }: any) => (
    <UIProvider>{children}</UIProvider>
)