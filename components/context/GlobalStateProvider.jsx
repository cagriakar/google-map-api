import { createContext, useContext, useReducer } from 'react';
import AppReducer from './reducer/AppReducer';

// Initial State
const initialState = {
    count: 0
};

const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext();

export default function GlobalStateProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const handleIncrease = () =>
        dispatch({
            type: 'INCREASE'
        });
    const handleDecrease = () =>
        dispatch({
            type: 'DECREASE'
        });

    const handleIncrease15 = () =>
        dispatch({
            type: 'INCREASE_BY',
            payload: 15
        });

    const actions = { handleIncrease, handleDecrease, handleIncrease15 };

    return (
        <GlobalDispatchContext.Provider value={actions}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    );
}

export const useStateValues = () => useContext(GlobalStateContext);
export const useDispatch = () => useContext(GlobalDispatchContext);
