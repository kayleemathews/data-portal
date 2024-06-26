import { Code as DXCode } from "@databiosphere/findable-ui/lib/components/common/Code/code";
import styled from "@emotion/styled";

export const Code = styled(DXCode)`
  border: 1px solid ${({ theme }) => theme.palette.info.light};
  flex: none;
  margin: -4px 0 0 0;
  max-height: 72px;
  overflow: hidden;
  padding: 8px 16px;

  &::after {
    border-radius: 0;
  }
`;
