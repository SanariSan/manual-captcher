import type { ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { GenericContext } from "./generic.context";
import type {
  TGenericEffects,
  TGenericReactive,
  TGenericStates,
} from "./generic.context.type";
import { changeStatusEffect, pushTokenEffect } from "./effects";

export const GenericProvider = ({ children }: { children: ReactNode }) => {
  const [responseTokensState, _setResponseTokensState] = useState<
    TGenericStates["responseTokensState"]
  >([]);

  const [isTtlTracking, _setIsTtlTracking] = useState<boolean>(false);

  // --- reactive setup

  const reactiveRef = useRef({} as TGenericReactive);
  reactiveRef.current = {
    states: { responseTokensState, isTtlTracking },
    setters: { _setResponseTokensState, _setIsTtlTracking },
  };

  // --- effects

  const changeStatus: TGenericEffects["changeStatus"] = useCallback(
    (...args) => {
      changeStatusEffect(reactiveRef)(...args);
    },
    []
  );

  const pushToken: TGenericEffects["pushToken"] = useCallback((...args) => {
    pushTokenEffect(reactiveRef)(...args);
  }, []);

  return (
    <GenericContext.Provider
      value={{
        responseTokensState,
        isTtlTracking,
        changeStatus,
        pushToken,
      }}
    >
      {children}
    </GenericContext.Provider>
  );
};
