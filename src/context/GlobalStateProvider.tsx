import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

interface BillFrom {
  companyName: string;
  companyEmail: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
}

interface BillTo {
  clientName: string;
  clientEmail: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  projectDescription: string;
  invoiceDate: string;
  paymentTerms: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface State {
  billFrom: BillFrom;
  billTo: BillTo;
  items: Item[];
}

interface UpdateBillFromAction {
  type: 'UPDATE_BILL_FROM';
  payload: Partial<BillFrom>;
}

interface UpdateBillToAction {
  type: 'UPDATE_BILL_TO';
  payload: Partial<BillTo>;
}

interface UpdateItemsAction {
  type: 'UPDATE_ITEMS';
  payload: Item[];
}

type Action = UpdateBillFromAction | UpdateBillToAction | UpdateItemsAction;

const initialState: State = {
  billFrom: {
    companyName: '',
    companyEmail: '',
    country: '',
    city: '',
    postalCode: '',
    streetAddress: '',
  },
  billTo: {
    clientName: '',
    clientEmail: '',
    country: '',
    city: '',
    postalCode: '',
    streetAddress: '',
    projectDescription: '',
    invoiceDate: '',
    paymentTerms: '',
  },
  items: [],
};

const GlobalStateContext = createContext<State | undefined>(undefined);
const DispatchStateContext = createContext<Dispatch<Action> | undefined>(undefined);

export const useGlobalState = (): State => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const useDispatchState = (): Dispatch<Action> => {
  const context = useContext(DispatchStateContext);
  if (context === undefined) {
    throw new Error('useDispatchState must be used within a GlobalStateProvider');
  }
  return context;
};

const globalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_BILL_FROM':
      return {
        ...state,
        billFrom: { ...state.billFrom, ...action.payload },
      };
    case 'UPDATE_BILL_TO':
      return {
        ...state,
        billTo: { ...state.billTo, ...action.payload },
      };
    case 'UPDATE_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};
