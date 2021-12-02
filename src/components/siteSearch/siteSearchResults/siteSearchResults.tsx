/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search results component.
 */

// Core dependencies
import React, { FC } from "react";

// App dependencies
import SiteSearchResult, {
  SearchResult,
} from "../siteSearchResult/siteSearchResult";

interface Props {
  results: SearchResult[];
  searchTerms: string;
}

const SiteSearchResults: FC<Props> = ({
  results,
  searchTerms,
}): JSX.Element => {
  return (
    <>
      {results.map((result) => (
        <SiteSearchResult
          key={result.link}
          result={result}
          searchTerms={searchTerms}
        />
      ))}
    </>
  );
};

export default React.memo(SiteSearchResults);
