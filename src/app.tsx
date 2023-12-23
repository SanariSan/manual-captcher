import { Box, Typography } from "@mui/material";
import { CaptchaContainer } from "components/captcha";
import { ControlListContainer } from "components/control-list";
import { LogsComponent } from "logs";
import "react-toastify/dist/ReactToastify.css";
import s from "./app.module.scss";

const App = () => (
  <Box className={s.App}>
    <Typography variant="h2">Manual captcher</Typography>
    <Box className={s.captchaWrap}>
      <CaptchaContainer />
    </Box>
    <Box className={s.controlWrap}>
      <ControlListContainer />
      <LogsComponent />
    </Box>
  </Box>
);

export { App };
