import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState, type FC } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type { TCaptchaComponent, TOnChangeValue } from "./captcha.type";
import s from "./capthcha.module.scss";

export const CaptchaComponent: FC<TCaptchaComponent> = ({
  onSetResponseToken,
  input,
  onSetInput,
  sitekey,
  onApplySitekey,
}) => {
  const [rerenderTrigger, forceRerender] = useState("");

  const onSetResponseTokenCb = (value: TOnChangeValue) => {
    onSetResponseToken(value);

    // https://github.com/google/recaptcha/issues/269#issuecomment-580184805
    document.querySelectorAll("iframe[src*=recaptcha]").forEach((a) => {
      a.remove();
    });
    forceRerender(Math.random().toString());
  };

  return (
    <Box className={s.captchaInnerWrap}>
      <Box className={s.sitekeyContainer}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="input" className={s.label}>
            Sitekey
          </InputLabel>
          <OutlinedInput
            id="input"
            label="Sitekey"
            fullWidth
            value={input}
            onChange={onSetInput}
            className={s.textfield}
          />
        </FormControl>
        <Button
          onClick={onApplySitekey}
          variant="contained"
          fullWidth
          color="secondary"
          sx={{ minHeight: "55px", fontWeight: 600 }}
        >
          Set key
        </Button>
      </Box>
      <Box className={s.captchaContainer}>
        {sitekey !== "" && (
          <ReCAPTCHA
            key={rerenderTrigger}
            sitekey={sitekey}
            onChange={onSetResponseTokenCb}
          />
        )}
      </Box>
    </Box>
  );
};
