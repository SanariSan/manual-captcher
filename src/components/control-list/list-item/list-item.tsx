import { Box, ListItem, Typography } from "@mui/material";
import c from "classnames";
import { useEffect, type FC, useState } from "react";
import { ExpirationTrackerComponent } from "./expiration-tracker";
import s from "./list-item.module.scss";
import type { TListItemComponent } from "./list-item.type";

export const ListItemComponent: FC<TListItemComponent> = ({
  idx,
  token,
  expiresAt,
  used,
  changeStatus,
}) => {
  const [, forceRerender] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      forceRerender(Math.random().toString());
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const expiresIn = expiresAt - Date.now();
  const usable = !used;
  const expired = expiresIn < 0;
  const tokenSliced = `${token.slice(0, 32)}...`;

  return (
    <ListItem
      className={c(s.controlListItem, !expired ? "" : s.disabled)}
      onClick={() => {
        changeStatus(idx);
      }}
    >
      <ExpirationTrackerComponent expiresAt={expiresAt} />
      <Box className={s.divider} />
      <Typography
        variant="body1"
        className={c(s.listItemText, usable && !expired ? "" : s.disabled)}
      >
        {tokenSliced}
      </Typography>
    </ListItem>
  );
};
