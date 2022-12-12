import * as React from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";

export const Form = ({
  csrfToken,
  action,
  children,
  button_text,
  button_className,
  button_disabled,
  form_className,
  buttonClick,
  buttonType,
}) => {
  return (
    <>
      <form
        className={
          "text-center flex flex-col flex-wrap gap-3 " + form_className
        }
        action={action}
        method="post"
      >
        <Input type={"hidden"} name="csrfToken" defaultValue={csrfToken} />
        <div>{children}</div>
        <div className=" text-center">
          <Button
            className={button_className}
            button_text={button_text}
            type={buttonType}
            disabled={button_disabled}
            onClick={buttonClick}
          />
        </div>
      </form>
    </>
  );
};
