/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search partner component.
 */

// Core dependencies
import classNames from "classnames"; // Class name helper
import { navigate } from "@reach/router";
import React, { FC } from "react";

// App dependencies
import Button from "../../button/button";
import { buildSiteSearchURL } from "../siteSearch";

// Styles
import {
  active as activePartner,
  partner as searchPartner,
} from "./siteSearchPartner.module.css";

export interface Partner {
  active: boolean;
  label: string;
  value: string;
}

interface Props {
  partner: Partner;
  searchTerms: string;
}

const SiteSearchPartner: FC<Props> = ({
  partner,
  searchTerms,
}): JSX.Element => {
  const { active, label, value } = partner;

  return (
    <li className={classNames({ [activePartner]: active }, searchPartner)}>
      <Button onClick={() => onSelectSiteSearchPartner(searchTerms, value)}>
        {label}
      </Button>
    </li>
  );
};

/**
 * Updates session history with new search params.
 * @param searchTerms
 * @param searchPartner
 */
function onSelectSiteSearchPartner(
  searchTerms: string,
  searchPartner: string
): void {
  const href = buildSiteSearchURL(searchTerms, searchPartner);
  navigate(href, { state: { searchPage: 1 } });
}

export default SiteSearchPartner;
