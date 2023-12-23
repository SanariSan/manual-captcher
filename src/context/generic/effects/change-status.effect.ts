import { log } from "log";
import { toast } from "react-toastify";
import type { TGenericReactiveRef } from "../generic.context.type";
import type { TResponseTokens } from "../types";

export const changeStatusEffect =
  (reactiveRef: TGenericReactiveRef) => (responseTokenIdx: number) => {
    const {
      states: { responseTokensState },
      setters: { _setResponseTokensState },
    } = reactiveRef.current;

    const targetTokenObj = responseTokensState[responseTokenIdx] as
      | TResponseTokens[number]
      | undefined;

    if (targetTokenObj === undefined) {
      log("Accessing nonexistent responseTokenIdx:", responseTokenIdx);
      toast("Error, check console for more information!", { type: "error" });
      return;
    }

    const isExpired = targetTokenObj.expiresAt < Date.now();

    if (isExpired) {
      toast("Token already expired!", {
        type: "error",
      });
      return;
    }

    if (targetTokenObj.used) {
      toast("Returned to pool!", {
        type: "info",
      });
    } else {
      void navigator.clipboard.writeText(String(targetTokenObj.token));
      toast("Copied to clipboard!", {
        type: "success",
      });
    }

    _setResponseTokensState(
      responseTokensState.map((currEl, idx) =>
        idx === responseTokenIdx
          ? { ...currEl, used: !targetTokenObj.used }
          : currEl
      )
    );
  };

export type TChangeStatus = ReturnType<typeof changeStatusEffect>;
