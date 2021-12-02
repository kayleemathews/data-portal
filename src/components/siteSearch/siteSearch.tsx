/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search component.
 */

// Core dependencies
import { useLocation, WindowLocation } from "@reach/router";
import React, { FC, useEffect, useState } from "react";

// App dependencies
import SiteSearchPagination from "./siteSearchPagination/siteSearchPagination";
import { Partner } from "./siteSearchPartner/siteSearchPartner";
import SiteSearchPartners from "./siteSearchPartners/siteSearchPartners";
import SiteSearchProgressIndicator from "./siteSearchProgressIndicator/siteSearchProgressIndicator";
import { SearchResult } from "./siteSearchResult/siteSearchResult";
import SiteSearchResults from "./siteSearchResults/siteSearchResults";
import Config, { SearchConfig } from "../../utils/config/config";
import { getGCSERequestURL } from "../../utils/dp-gcse/dp-gcse.service";
import * as EnvironmentService from "../../utils/environment/environment.service";

export type SiteSearchParams = [string, string, number];

interface GCSEQuery {
  nextPage: any[];
  previousPage: any[];
  request: GCSERequest[];
}

export interface GCSERequest {
  searchTerms: string;
  startIndex: number;
}

interface GCSEResponse {
  items: SearchResult[];
  queries: GCSEQuery;
}

export interface SearchLocation extends WindowLocation {
  state: SearchLocationState;
}

interface SearchLocationState {
  searchPage: number;
}

export interface SiteSearch {
  searchError: boolean;
  searchLoading: boolean;
  searchPage: number;
  searchPartner: string;
  searchTerms: string;
}

const SiteSearch: FC = (): JSX.Element | null => {
  const lungmap = EnvironmentService.isLungMAP();
  const currentLocation = useLocation() as SearchLocation;
  const [newTerms, newPartner, newPage] = getSearchParams(currentLocation);
  const currentSearchURL = `${currentLocation.pathname}${currentLocation.search}`;
  const [GCSEResponse, setGCSEResponse] = useState<GCSEResponse>(() =>
    initGCSEResponse()
  );
  const [siteSearch, setSiteSearch] = useState<SiteSearch>(() =>
    initSiteSearch(newTerms, newPartner)
  );
  const searchConfig: SearchConfig = lungmap
    ? Config.lungmap.searchConfig
    : Config.hca.searchConfig;
  const searchEngineId = searchConfig.searchEngineId;
  const [partners, setPartners] = useState<Partner[]>(() =>
    initPartners(searchConfig.partners, newPartner)
  );
  const { queries: GCSEQuery, items: siteSearchResults } = GCSEResponse;
  const showNextPagination = Boolean(GCSEQuery?.nextPage?.length);
  const showPrevPagination = Boolean(GCSEQuery?.previousPage?.length);
  const showPagination = showNextPagination || showPrevPagination;
  const { searchError, searchLoading, searchPage, searchPartner, searchTerms } =
    siteSearch;

  /**
   * Fetches GCSE results when searchLoading is true and search terms are defined.
   * Executes with any changes to:
   * - searchLoading,
   * - searchPage,
   * - searchPartner, or
   * - searchTerms.
   */
  useEffect(() => {
    if (searchLoading && searchTerms) {
      /* Grab the Google Custom SE request URL. */
      const GCSERequestURL = getGCSERequestURL(
        searchTerms,
        searchPartner,
        searchPage,
        searchEngineId
      );

      /* Fetch the SE results. */
      fetch(GCSERequestURL)
        .then((res) => res.json())
        .then((res) => {
          setGCSEResponse((GCSEResponse) => ({
            ...GCSEResponse,
            ...res,
          }));
          setSiteSearch((siteSearch) => ({
            ...siteSearch,
            searchError: false,
            searchLoading: false,
          }));
        })
        .catch((err) => {
          setSiteSearch((siteSearch) => ({
            ...siteSearch,
            searchError: false,
            searchLoading: false,
          }));
          console.log(err, "Error requesting Google Custom SE.");
        });
    }

    /* End site search progress indicator if searchLoading and undefined searchTerms. */
    if (searchLoading && !searchTerms) {
      const delayProgressIndicatorFinish = setTimeout(() => {
        setSiteSearch((siteSearch) => ({
          ...siteSearch,
          searchError: true,
          searchLoading: false,
        }));
      }, 1000);

      return () => clearTimeout(delayProgressIndicatorFinish);
    }
  }, [searchEngineId, searchLoading, searchPage, searchPartner, searchTerms]);

  /**
   * Update state variables siteSearch and partners.
   * Executes with any changes to:
   * - terms,
   * - partner, or
   * - page.
   */
  useEffect(() => {
    /* Set state site search with updated search terms and/or partner. */
    setSiteSearch((prevSiteSearch) => {
      return {
        ...prevSiteSearch,
        searchLoading: true,
        searchPage: newPage,
        searchPartner: newPartner,
        searchTerms: newTerms,
      };
    });

    /* Set state partners with updated selected partner. */
    setPartners((prevPartners) =>
      updatePartners([...prevPartners], newPartner)
    );
  }, [newTerms, newPartner, newPage]);

  if (searchLoading) {
    /* Return progress indicator. */
    return (
      <>
        <SiteSearchPartners partners={partners} searchTerms={searchTerms} />
        <SiteSearchProgressIndicator />
      </>
    );
  }
  if (searchTerms) {
    if (siteSearchResults.length > 0) {
      /* Return search results. */
      return (
        <>
          <SiteSearchPartners partners={partners} searchTerms={searchTerms} />
          <SiteSearchResults
            results={siteSearchResults}
            searchTerms={searchTerms}
          />
          {showPagination ? (
            <SiteSearchPagination
              currentPage={newPage}
              currentSearchURL={currentSearchURL}
              showNextPagination={showNextPagination}
              showPrevPagination={showPrevPagination}
            />
          ) : null}
        </>
      );
    }
    /* No search results for the search term. */
    return (
      <>
        <SiteSearchPartners partners={partners} searchTerms={searchTerms} />
        <p>No results.</p>
        <SiteSearchPagination
          currentPage={newPage}
          currentSearchURL={currentSearchURL}
          showNextPagination={showNextPagination}
          showPrevPagination={showPrevPagination}
        />
      </>
    );
  }
  if (searchError) {
    /* Search error - search term is not defined. */
    return (
      <>
        <SiteSearchPartners partners={partners} searchTerms={searchTerms} />
        <p>Please enter a query in the search box.</p>
      </>
    );
  }
  return null;
};

/**
 * Returns the new search url with updated search params.
 * @param newTerms
 * @param newPartner
 */
export function buildSiteSearchURL(
  newTerms: string,
  newPartner: string
): string {
  /* Set the search params. */
  const params = new URLSearchParams();
  params.set("q", newTerms);

  /* Set the selected partner params. */
  if (newPartner) {
    params.set("partner", newPartner);
  }

  /* Return url with params. */
  return `/search?${params.toString()}`;
}

/**
 * Returns search parameters "newTerms" and "newPartner" and "newPage" from current location.
 * @param currentLocation
 */
export function getSearchParams(
  currentLocation: SearchLocation
): SiteSearchParams {
  /* Grab search input value for search pages from current location. */
  const { search } = currentLocation || {};
  const searchPage = currentLocation.state?.searchPage || 1;
  /* Get the search params from the current URL search params. */
  const params = new URLSearchParams(search);
  const newTerms = params.get("q") || "";
  const newPartner = params.get("partner") || "";
  return [newTerms, newPartner, searchPage];
}

/**
 * Init GCSE response api.
 */
function initGCSEResponse(): GCSEResponse {
  return {
    items: [],
    queries: {
      nextPage: [],
      previousPage: [],
      request: [
        {
          searchTerms: "",
          startIndex: 1,
        },
      ],
    },
  };
}

/**
 * Inits partners and updates the selected partner derived from current location.
 * @param partners
 * @param newPartner
 */
function initPartners(partners: Partner[], newPartner: string): Partner[] {
  return updatePartners(partners, newPartner);
}

/**
 * Inits state siteSearch with new search term and search partner values derived from current location.
 * @param newTerms
 * @param newPartner
 */
function initSiteSearch(newTerms: string, newPartner: string): SiteSearch {
  /* Update searchTerms with the new term and partner .*/
  /* Reset all other search props, e.g. set searchLoading to true. */
  let searchLoading = false;
  if (newTerms) {
    searchLoading = true;
  }

  return {
    searchError: false,
    searchLoading: searchLoading,
    searchPage: 1,
    searchPartner: newPartner,
    searchTerms: newTerms,
  };
}

/**
 * Updates partners where selected partner "active" status is true.
 * @param partners
 * @param selectedPartner
 */
function updatePartners(
  partners: Partner[],
  selectedPartner: string
): Partner[] {
  return partners.map((partner) => {
    const active = partner.value === selectedPartner;
    Object.assign(partner, { active: active });
    return partner;
  });
}

export default SiteSearch;
