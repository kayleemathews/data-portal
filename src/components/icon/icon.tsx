/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal icon component.
 */

// Core dependencies
import classNames from "classnames"; // Class name helper
import React, { FC } from "react";

// App dependencies
import Color from "../ui/color/color";

// Styles
import { colorGrayLight, colorPrimary, icon } from "./icon.module.css";

interface Props {
  color?: Color;
  fontSize?: number;
}

const ICON_FONT_SIZE = 24;

const Icon: FC<Props> = ({
  children,
  color = Color.DEFAULT,
  fontSize = ICON_FONT_SIZE,
}): JSX.Element => {
  const classNamesIcon = classNames(icon, {
    [colorGrayLight]: color === Color.GRAY_LIGHT,
    [colorPrimary]: color === Color.PRIMARY,
  });

  return (
    <span
      className={classNamesIcon}
      style={{ fontSize: fontSize === ICON_FONT_SIZE ? undefined : fontSize }} // default font size is 24px
    >
      {children}
    </span>
  );
};

export default Icon;
