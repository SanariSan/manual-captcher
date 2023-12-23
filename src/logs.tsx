import { Box, Typography } from "@mui/material";
import {
  subscribeClearLogs,
  subscribeLogger,
  unsubscribeClearLogs,
  unsubscribeLogger,
} from "log";
import type { FC } from "react";
import { useEffect, useState } from "react";

type TLogsComponent = {
  [key: string]: unknown;
};

export const LogsComponent: FC<TLogsComponent> = () => {
  const [logs, setLogs] = useState<unknown[]>([]);

  // sub logs
  useEffect(() => {
    const cb = (...data: unknown[]) => {
      data.forEach((_) => {
        console.log(_);
      });
      setLogs((prev) => [...prev, ...data]);
    };

    subscribeLogger(cb);

    return () => {
      unsubscribeLogger(cb);
    };
  }, []);

  // sub clear logs
  useEffect(() => {
    const cb = (...data: unknown[]) => {
      setLogs([]);
    };

    subscribeClearLogs(cb);

    return () => {
      unsubscribeClearLogs(cb);
    };
  }, []);

  return (
    <></>
    // <Box sx={{ width: "100%", minHeight: "300px" }}>
    //   <Typography variant="body1">Logs:</Typography>
    //   <textarea
    //     readOnly
    //     value={JSON.stringify(logs, null, 2)}
    //     style={{ width: "100%", minHeight: "300px" }}
    //   />
    // </Box>
  );
};
