/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from "react";
import {
  getFromLocalStorage,
  setLocalStorageItem,
} from "@/helpers/localStorageMethods";

const initialState = {
  darkMode: false,
  access_token: getFromLocalStorage("access_token"),
  refresh_token: getFromLocalStorage("refresh_token"),
  search_query: "",
};

// @ts-ignore
export const Store = createContext();

function reducer(state: any, action: { type: any; payload: any }) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "USER_LOGIN":
      setLocalStorageItem("access_token", action.payload.access_token);
      setLocalStorageItem("refresh_token", action.payload.refresh_token);
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      setLocalStorageItem("access_token", null);
      setLocalStorageItem("refresh_token", null);
      return { ...state, userInfo: null, cart: { cartItems: [] } };
    case "SET_SEARCH_QUERY":
      return { ...state, search_query: action.payload };
    default:
      return state;
  }
}

interface Props {
  children?: any;
}

export function StoreProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
