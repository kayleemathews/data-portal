import { ButtonSecondary } from "@clevercanary/data-explorer-ui/lib/components/common/Button/components/ButtonSecondary/buttonSecondary";
import { ButtonSecondaryOutline } from "@clevercanary/data-explorer-ui/lib/components/common/Button/components/ButtonSecondaryOutline/buttonSecondaryOutline";
import { PORTAL_URL } from "../../../../site-config/data-portal/dev/config";
import { SummaryCounts } from "./components/SummaryCounts/summaryCounts";
import {
  CTAs,
  Head,
  Headline,
  SectionHero as Hero,
  Subhead,
} from "./sectionHero.styles";

export const SectionHero = (): JSX.Element => {
  return (
    <Hero>
      <Headline>
        <Head>
          <span>Explore the datasets</span> <span>of the Human Cell Atlas</span>
        </Head>
        <Subhead>
          Community generated, multi-omic, open and managed access data
        </Subhead>
        <CTAs>
          <ButtonSecondary href={`${PORTAL_URL}/explore`}>
            Explore Data
          </ButtonSecondary>
          <ButtonSecondaryOutline href={`${PORTAL_URL}/contribute`}>
            Contribute Data
          </ButtonSecondaryOutline>
        </CTAs>
      </Headline>
      <SummaryCounts />
    </Hero>
  );
};
