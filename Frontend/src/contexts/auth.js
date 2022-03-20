import React, { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { isCheckLogin } from "../utils/cookie";
import { IS_LOGIN } from "./actionTypes";

export const AuthContext = createContext(null);

const initialState = {
  isLogin: false,
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
}

function useAuthProvider() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cookie = document.cookie?.split(";");
    const isLogin = isCheckLogin(cookie);
    if (isLogin) {
      dispatch({
        type: IS_LOGIN,
        payload: isLogin,
      });
    }
  }, []);

  return state;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const authValue = useAuthProvider();
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
