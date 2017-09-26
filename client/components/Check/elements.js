import styled, { css } from 'styled-components';

import SquareIcon from 'material-ui/svg-icons/image/crop-square';
import CheckIcon from 'material-ui/svg-icons/action/done';

const icon = css`
  margin: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
`;

export const Checkmark = styled(CheckIcon)`
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  color: green;
  ${icon};
  top: -3px;
  left: 3px;
`;

export const Box = styled(SquareIcon)`
  color: red;
  ${icon};
`;
