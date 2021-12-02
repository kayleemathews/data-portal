/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search partners component.
 */

// Core dependencies
import React from "react";

// App dependencies
import SiteSearchPartner, {
  Partner,
} from "../siteSearchPartner/siteSearchPartner";

// Styles
import { partners as searchPartners } from "./siteSearchPartners.module.css";

interface Props {
  partners: Partner[];
  searchTerms: string;
}

export default function SiteSearchPartners({
  partners,
  searchTerms,
}: Props): JSX.Element | null {
  const showPartners = partners.length > 1;

  return showPartners ? (
    <ul className={searchPartners}>
      {partners.map((partner) => (
        <SiteSearchPartner
          key={partner.label}
          partner={partner}
          searchTerms={searchTerms}
        />
      ))}
    </ul>
  ) : null;
}
