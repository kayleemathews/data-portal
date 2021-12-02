/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search button component.
 */

// Core dependencies
import React from "react";

// App dependencies
import Button from "../../button/button";
import Icon from "../../icon/icon";
import Color from "../../ui/color/color";

// Styles
import { searchButton } from "./siteSearchButton.module.css";
import { ToggleSearchBarFn } from "../siteSearchBar/siteSearchBar";

interface Props {
  lungmap?: boolean;
  toggleSearchBar: ToggleSearchBarFn;
}

export default function SiteSearchButton({
  lungmap = false,
  toggleSearchBar,
}: Props): JSX.Element {
  const iconColor = lungmap ? Color.WHITE : Color.GRAY_LIGHT;
  return (
    <div className={searchButton}>
      <Button color={iconColor} onClick={() => toggleSearchBar(true)}>
        <Icon>search</Icon>
      </Button>
    </div>
  );
}
