import { mediaTabletUp } from "@databiosphere/findable-ui/lib/styles/common/mixins/breakpoints";
import {
  inkMain,
  smokeDark,
  smokeLight,
  smokeMain,
  white,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { primaryMain } from "@databiosphere/findable-ui/lib/theme/common/palette";
import styled from "@emotion/styled";

export const SectionContent = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 1232px;
  padding: 56px 16px 80px;
`;

export const BioNetworkAtlases = styled.div`
  display: grid;
  gap: 12px;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  margin-top: 40px;

  ${mediaTabletUp} {
    gap: 16px;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const BioNetworkAtlas = styled.span`
  align-items: center;
  border: 1px solid ${smokeMain};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  gap: 0 8px;
  height: 64px;
  padding: 8px;

  &:hover {
    background-color: ${smokeLight};
    border: 1px solid ${smokeDark};
  }

  img {
    box-sizing: content-box;
    flex: none;
    margin: 0;
    padding: 6px;
  }

  .MuiTypography-text-body-large-500 {
    color: ${inkMain};
    flex: 1;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Badge = styled.div`
  align-items: center;
  background-color: ${primaryMain};
  border-radius: 10px;
  color: ${white};
  display: flex;
  flex: none;
  font-size: 11px;
  font-weight: 700;
  justify-content: center;
  line-height: 20px;
  min-width: 20px;
  padding: 0 6px;
`;
