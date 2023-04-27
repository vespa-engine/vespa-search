import React, { createContext, useCallback, useReducer } from 'react';

export const AppContext = createContext();

const defaultState = Object.freeze({
  reference: null,
});

export function AppProvider({ children }) {
  // create a reducer to handle state changes
  const [state, dispatch] = useReducer(
    (state, action) => Object.freeze({ ...state, ...action }),
    defaultState
  );

  // create a function to update the state
  const setReference = useCallback((reference) => dispatch({ reference }), []);

  return (
    <AppContext.Provider value={{ ...state, setReference }}>
      {children}
    </AppContext.Provider>
  );
}
