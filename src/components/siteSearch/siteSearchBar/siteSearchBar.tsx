/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search bar component.
 */

// Core dependencies
import classNames from "classnames"; // Class name helper
import { useLocation } from "@reach/router";
import React, { FC } from "react";

// App dependencies
import { getSearchParams, SearchLocation } from "../siteSearch";
import SiteSearchForm from "../siteSearchForm/siteSearchForm";

// Styles
import {
  active,
  lungmap as darkTheme,
  searchBar,
} from "./siteSearchBar.module.css";

export type ToggleSearchBarFn = (open: boolean) => void;

interface Props {
  lungmap?: boolean;
  searchBarOpen: boolean;
  toggleSearchBar: ToggleSearchBarFn;
}

const SiteSearchBar: FC<Props> = ({
  lungmap = false,
  searchBarOpen,
  toggleSearchBar,
}): JSX.Element => {
  const currentLocation = useLocation() as SearchLocation;
  const [searchTerms, searchPartner] = getSearchParams(currentLocation);

  return (
    <div
      className={classNames({ [active]: searchBarOpen }, searchBar, {
        [darkTheme]: lungmap,
      })}
    >
      <SiteSearchForm
        lungmap={lungmap}
        searchBarOpen={searchBarOpen}
        searchPartner={searchPartner}
        searchTerms={searchTerms}
        toggleSearchBar={toggleSearchBar}
      />
    </div>
  );
};

export default SiteSearchBar;
