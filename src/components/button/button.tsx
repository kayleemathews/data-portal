/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal button component.
 */

// Core dependencies
import classNames from "classnames"; // Class name helper
import React, { FC } from "react";

// App dependencies
import ButtonVariant from "./buttonVariant";
import Color from "../ui/color/color";

// Styles
import {
  button,
  buttonIcon,
  buttonIconPrimary,
  buttonIconWhite,
  colorGrayLight,
} from "./button.module.css";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: ButtonVariant;
}

const Button: FC<Props> = ({
  children,
  color = Color.DEFAULT,
  variant = ButtonVariant.NONE,
  ...props
}): JSX.Element => {
  const classNamesButton = classNames(button, {
    [buttonIcon]: variant === ButtonVariant.ICON_BUTTON,
    [buttonIconPrimary]: color === Color.PRIMARY,
    [buttonIconWhite]: color === Color.WHITE,
    [colorGrayLight]: color === Color.GRAY_LIGHT,
  });

  return (
    <button className={classNamesButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
