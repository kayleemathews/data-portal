/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal config.
 */

// App dependencies
import { Partner } from "../../components/siteSearch/siteSearchPartner/siteSearchPartner";

export interface SearchConfig {
  partners: Partner[];
  searchEngineId?: string;
}

interface Config {
  searchConfig: SearchConfig;
}

interface SiteConfig {
  hca: Config;
  lungmap: Config;
}

const Config: SiteConfig = {
  hca: {
    searchConfig: {
      partners: [
        { active: true, label: "All Results", value: "" },
        { active: false, label: "Projects", value: "dp-only" },
      ],
      searchEngineId: process.env.GATSBY_GCSE_CX,
    },
  },
  lungmap: {
    searchConfig: {
      partners: [
        { active: true, label: "All Results", value: "" },
        { active: false, label: "Projects", value: "lungmap-only" },
      ],
      searchEngineId: process.env.GATSBY_LUNGMAP_GCSE_CX,
    },
  },
};

export default Config;
