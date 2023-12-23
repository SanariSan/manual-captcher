import { GenericContext } from "context/generic";
import { useCallback, useContext, type FC } from "react";
import { ControlListComponent } from "./control-list.component";
import type { TControlListContainer } from "./control-list.type";

export const ControlListContainer: FC<TControlListContainer> = () => {
  const { responseTokensState, changeStatus } = useContext(GenericContext);

  const changeStatusCb = useCallback(
    (responseTokenIdx: number) => {
      changeStatus(responseTokenIdx);
    },
    [changeStatus]
  );

  return (
    <ControlListComponent
      responseTokensState={responseTokensState}
      changeStatus={changeStatusCb}
    />
  );
};
