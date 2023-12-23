import type { TResponseTokens } from "context/generic/types";

export type TControlListContainer = {
  [key: string]: unknown;
};

export type TControlListComponent = {
  responseTokensState: TResponseTokens;
  changeStatus: (responseTokenIdx: number) => void;
};
