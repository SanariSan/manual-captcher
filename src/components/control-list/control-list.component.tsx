import { Box, List } from "@mui/material";
import { useMemo, type FC } from "react";
import s from "./control-list.module.scss";
import type { TControlListComponent } from "./control-list.type";
import { ListItemComponent } from "./list-item";

export const ControlListComponent: FC<TControlListComponent> = ({
  changeStatus,
  responseTokensState,
}) => {
  const listItems = useMemo(
    () =>
      responseTokensState.map((el, idx) => (
        <ListItemComponent
          key={`${el.token}`}
          idx={idx}
          changeStatus={changeStatus}
          {...el}
        />
      )),
    [changeStatus, responseTokensState]
  );

  return (
    <Box className={s.controlListWrap}>
      <List className={s.controlList}>{listItems}</List>
    </Box>
  );
};
