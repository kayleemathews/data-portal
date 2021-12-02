/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search form component.
 */

// Core dependencies
import { navigate } from "gatsby";
import React, { FC, FormEvent } from "react";

// App dependencies
import { buildSiteSearchURL } from "../siteSearch";
import { ToggleSearchBarFn } from "../siteSearchBar/siteSearchBar";
import SiteSearchInput from "../siteSearchInput/siteSearchInput";

// Styles
import { form } from "./siteSearchForm.module.css";

interface Props {
  searchBarOpen: boolean;
  searchPartner: string;
  searchTerms: string;
  toggleSearchBar: ToggleSearchBarFn;
}

const SiteSearchForm: FC<Props> = ({
  searchBarOpen,
  searchPartner,
  searchTerms,
  toggleSearchBar,
}): JSX.Element => {
  return (
    <form
      autoComplete="off"
      className={form}
      onSubmit={(formEvent) =>
        onSubmitSiteSearch(formEvent, searchPartner, toggleSearchBar)
      }
    >
      <SiteSearchInput
        searchBarOpen={searchBarOpen}
        searchTerms={searchTerms}
        toggleSearchBar={toggleSearchBar}
      />
    </form>
  );
};

/**
 * Navigates to search page with search params terms and selected partner.
 * @param formEvent
 * @param searchPartner
 * @param toggleSearchBar
 */
function onSubmitSiteSearch(
  formEvent: FormEvent<HTMLFormElement>,
  searchPartner: string,
  toggleSearchBar: ToggleSearchBarFn
): void {
  formEvent.preventDefault();
  /* Submit form with valid search terms. */
  const newTerms = formEvent.currentTarget.siteSearch.value;
  if (newTerms) {
    /* Close search bar. */
    toggleSearchBar(false);
    /* Navigate to search page with params. */
    const href = buildSiteSearchURL(newTerms, searchPartner);
    navigate(href, { state: { searchPage: 1 } });
  }
}

export default React.memo(SiteSearchForm);
