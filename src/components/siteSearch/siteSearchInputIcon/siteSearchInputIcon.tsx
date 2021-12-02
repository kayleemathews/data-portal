/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search input icon component.
 * Wrapper for input search icon.
 */

// Core dependencies
import React, { FC } from "react";

// App dependencies
import Icon from "../../icon/icon";
import Color from "../../ui/color/color";

// Styles
import { searchIcon } from "./siteSearchInputIcon.module.css";

interface Props {
  lungmap: boolean;
}

const SiteSearchInputIcon: FC<Props> = ({ lungmap }): JSX.Element => {
  const iconColor = lungmap ? Color.WHITE : Color.GRAY_LIGHT;
  return (
    <span className={searchIcon}>
      <Icon color={iconColor}>search</Icon>
    </span>
  );
};

export default React.memo(SiteSearchInputIcon);
