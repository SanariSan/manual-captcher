import type { ReCAPTCHAProps } from "react-google-recaptcha";

export type TOnChangeValue = Parameters<
  Exclude<ReCAPTCHAProps["onChange"], undefined>
>[0];

export type TCaptchaContainer = {
  [key: string]: unknown;
};

export type TCaptchaComponent = {
  onSetResponseToken: (value: TOnChangeValue) => void;
  sitekey: string;
  onApplySitekey: () => void;
  input: string;
  onSetInput: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};
