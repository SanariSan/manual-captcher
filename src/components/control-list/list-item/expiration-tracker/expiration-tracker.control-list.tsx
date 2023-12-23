import { Typography } from "@mui/material";
import { type FC } from "react";
import { getFormatedTime } from "./expiration-tracker.helper";
import type { TExpirationTrackerComponent } from "./expiration-tracker.type";

export const ExpirationTrackerComponent: FC<TExpirationTrackerComponent> = ({
  expiresAt,
}) => {
  const expiresIn = expiresAt - Date.now();
  const correctedExpiresIn = expiresIn < 0 ? 0 : expiresIn;
  const formattedExpiresIn = getFormatedTime(correctedExpiresIn);

  return <Typography variant="body1">{formattedExpiresIn}</Typography>;
};
