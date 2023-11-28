import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * Custom GitHub icon (socials).
 */

export const GitHubIcon = ({
  fontSize = "xsmall",
  viewBox = "0 0 18 18",
  ...props /* Spread props to allow for Mui SvgIconProps specific prop overrides e.g. "htmlColor". */
}: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon fontSize={fontSize} viewBox={viewBox} {...props}>
      <path
        d="M6.66565 13.1582C6.66565 13.2145 6.6094 13.2426 6.52502 13.2426C6.44065 13.2707 6.3844 13.2145 6.3844 13.1582C6.3844 13.102 6.44065 13.0457 6.52502 13.0457C6.6094 13.0457 6.66565 13.102 6.66565 13.1582ZM5.79377 13.0176C5.79377 13.0738 5.85002 13.1582 5.9344 13.1582C5.99065 13.1863 6.07502 13.1582 6.10315 13.102C6.10315 13.0457 6.07502 12.9895 5.99065 12.9613C5.90627 12.9332 5.8219 12.9613 5.79377 13.0176ZM7.0594 12.9895C6.97502 12.9895 6.91877 13.0457 6.91877 13.1301C6.91877 13.1863 7.00315 13.2145 7.08752 13.1863C7.1719 13.1582 7.22815 13.1301 7.20002 13.0738C7.20002 13.0176 7.11565 12.9613 7.0594 12.9895ZM8.88752 2.18945C5.00627 2.18945 2.02502 5.1707 2.02502 9.05195C2.02502 12.1738 3.96565 14.8457 6.77815 15.802C7.14377 15.8582 7.25627 15.6332 7.25627 15.4645C7.25627 15.2676 7.25627 14.3113 7.25627 13.7207C7.25627 13.7207 5.28752 14.1426 4.86565 12.877C4.86565 12.877 4.55627 12.0613 4.10627 11.8645C4.10627 11.8645 3.4594 11.4145 4.1344 11.4145C4.1344 11.4145 4.83752 11.4707 5.23127 12.1457C5.85002 13.2426 6.86252 12.9332 7.2844 12.7363C7.34065 12.2863 7.5094 11.977 7.7344 11.7801C6.1594 11.6113 4.55627 11.3863 4.55627 8.68633C4.55627 7.89883 4.78127 7.5332 5.23127 7.02695C5.1469 6.83008 4.9219 6.09883 5.31565 5.11445C5.87815 4.9457 7.25627 5.87383 7.25627 5.87383C7.81877 5.70508 8.4094 5.64883 9.00002 5.64883C9.61877 5.64883 10.2094 5.70508 10.7719 5.87383C10.7719 5.87383 12.1219 4.91758 12.7125 5.11445C13.1063 6.09883 12.8531 6.83008 12.7969 7.02695C13.2469 7.5332 13.5281 7.89883 13.5281 8.68633C13.5281 11.3863 11.8688 11.6113 10.2938 11.7801C10.5469 12.0051 10.7719 12.427 10.7719 13.102C10.7719 14.0301 10.7438 15.2113 10.7438 15.4363C10.7438 15.6332 10.8844 15.8582 11.25 15.7738C14.0625 14.8457 15.975 12.1738 15.975 9.05195C15.975 5.1707 12.7969 2.18945 8.88752 2.18945ZM4.75315 11.8926C4.6969 11.9207 4.72502 12.0051 4.75315 12.0613C4.8094 12.0895 4.86565 12.1176 4.9219 12.0895C4.95002 12.0613 4.95002 11.977 4.89377 11.9207C4.83752 11.8926 4.78127 11.8645 4.75315 11.8926ZM4.44377 11.6676C4.41565 11.7238 4.44377 11.752 4.50002 11.7801C4.55627 11.8082 4.61252 11.8082 4.64065 11.752C4.64065 11.7238 4.61252 11.6957 4.55627 11.6676C4.50002 11.6395 4.4719 11.6395 4.44377 11.6676ZM5.34377 12.6801C5.31565 12.7082 5.31565 12.7926 5.40002 12.8488C5.45627 12.9051 5.54065 12.9332 5.56877 12.877C5.5969 12.8488 5.5969 12.7645 5.54065 12.7082C5.4844 12.652 5.40002 12.6238 5.34377 12.6801ZM5.0344 12.2582C4.97815 12.2863 4.97815 12.3707 5.0344 12.427C5.09065 12.4832 5.1469 12.5113 5.20315 12.4832C5.23127 12.4551 5.23127 12.3707 5.20315 12.3145C5.1469 12.2582 5.09065 12.2301 5.0344 12.2582Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};