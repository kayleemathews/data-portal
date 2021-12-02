/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search progress indicator component.
 */

// Core dependencies
import React, { FC } from "react";

// Styles
import { progressBar } from "./siteSearchProgressIndicator.module.css";

const SiteSearchProgressIndicator: FC = (): JSX.Element => {
  return <div className={progressBar} />;
};

export default React.memo(SiteSearchProgressIndicator);
