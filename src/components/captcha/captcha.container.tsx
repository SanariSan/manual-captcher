import { GenericContext } from "context/generic";
import { useCallback, useContext, useState, type FC } from "react";
import { toast } from "react-toastify";
import { CaptchaComponent } from "./captcha.component";
import type { TCaptchaContainer, TOnChangeValue } from "./captcha.type";

export const CaptchaContainer: FC<TCaptchaContainer> = () => {
  const { pushToken } = useContext(GenericContext);
  const [sitekey, setSitekey] = useState("");
  const [input, setInput] = useState("");

  const onSetInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      e.preventDefault();
      setInput(e.target.value);
    },
    []
  );

  const onApplySitekey = useCallback(() => {
    setSitekey(input);
    toast("Successfully applied sitekey", { type: "success" });
  }, [input]);

  const onResponseToken = useCallback(
    (value: TOnChangeValue) => {
      if (value !== null) pushToken(value);
    },
    [pushToken]
  );

  return (
    <CaptchaComponent
      onSetResponseToken={onResponseToken}
      input={input}
      onSetInput={onSetInput}
      sitekey={sitekey}
      onApplySitekey={onApplySitekey}
    />
  );
};
