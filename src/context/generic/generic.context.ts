import { createContext } from "react";
import type { TGenericContext } from "./generic.context.type";

export const GenericContext = createContext<TGenericContext>(
  {} as TGenericContext
);
