import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import type { TChangeStatus, TPushToken } from "./effects";
import type { TResponseTokens } from "./types";

// STATES ------------------------
export type TGenericStates = {
  responseTokensState: TResponseTokens;
  isTtlTracking: boolean;
};

// STATES SETTERS -------------------
export type TGenericSetters = {
  _setResponseTokensState: Dispatch<SetStateAction<TResponseTokens>>;
  _setIsTtlTracking: Dispatch<SetStateAction<boolean>>;
};

// REACTIVE SETUP ---------------------
export type TGenericReactive = {
  states: TGenericStates;
  setters: TGenericSetters;
};
export type TGenericReactiveRef = MutableRefObject<TGenericReactive>;

// EFFECTS -----------------------------
export type TGenericEffects = {
  changeStatus: TChangeStatus;
  pushToken: TPushToken;
};

// FINAL CONTEXT ------------------------
export type TGenericContext = TGenericStates & TGenericEffects;
