import styled, { css } from 'styled-components';

import {
  background200,
  contents000,
  contents200,
  contents300,
  contents999,
} from 'GlobalStyle/color';

export const InputContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  border: 1px solid ${contents300};
  border-radius: 4px;
  padding: 0 12px;
  background-color: ${contents999};
  gap: 8px;

  &:focus-within {
    border-color: ${contents000};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${background200};
    `}
`;

export const InputInner = styled.input`
  /* Body1_M */
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  display: block;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  border: 0;
  color: ${contents000};
  background-color: transparent;

  &::placeholder {
    color: ${contents200};
  }

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 12px;
`;
