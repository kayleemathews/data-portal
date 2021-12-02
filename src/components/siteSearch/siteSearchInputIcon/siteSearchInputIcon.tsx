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

const SiteSearchInputIcon: FC = (): JSX.Element => {
  return (
    <span className={searchIcon}>
      <Icon color={Color.GRAY_LIGHT}>search</Icon>
    </span>
  );
};

export default React.memo(SiteSearchInputIcon);
