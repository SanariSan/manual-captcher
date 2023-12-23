import type { TGenericReactiveRef } from "../generic.context.type";
import { TTL } from "../types";

export const pushTokenEffect =
  (reactiveRef: TGenericReactiveRef) => (responseToken: string) => {
    const {
      setters: { _setResponseTokensState },
    } = reactiveRef.current;

    const now = Date.now();
    _setResponseTokensState((prev) => [
      ...prev,
      {
        token: responseToken,
        used: false,
        timestamp: now,
        expiresAt: now + TTL,
      },
    ]);
  };

export type TPushToken = ReturnType<typeof pushTokenEffect>;
