import React, { createContext, useContext, useReducer, children} from 'react';


//data layer!!
export const StateContext = createContext();
// Build Provider..
export const StateProvider = ({reducer,initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
); 
// the way to use this in our component
export const useStateValue = ()=> useContext(StateContext);