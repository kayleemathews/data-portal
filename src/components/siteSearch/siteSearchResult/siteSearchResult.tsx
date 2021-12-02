/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search result component.
 */

// Core dependencies
import React, { FC } from "react";

// Styles
import {
  snippet as resultSnippet,
  url as resultUrl,
} from "./siteSearchResult.module.css";

export interface SearchResult {
  link: string;
  formattedUrl: string;
  snippet: string;
  title: string;
}

interface Props {
  result: SearchResult;
  searchTerms: string;
}

const SiteSearchResult: FC<Props> = ({ result, searchTerms }): JSX.Element => {
  const { link, formattedUrl, snippet, title } = result;

  return (
    <div className={resultSnippet}>
      <span>
        <a
          href={link}
          rel="noopener"
          onClick={() =>
            onSearchResultClicked(title, formattedUrl, searchTerms)
          }
        >
          <p className={resultUrl}>{formattedUrl}</p>
          <h4>{title}</h4>
        </a>
        <p>{snippet}</p>
      </span>
    </div>
  );
};

/**
 * Execute tracking with selected search result.
 * TODO(cc).
 */
function onSearchResultClicked(
  resultTitle: string,
  resultUrl: string,
  searchTerms: string
): void {
  /* Tracking service. */
}

export default SiteSearchResult;
