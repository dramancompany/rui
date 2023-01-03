import styled, { css } from 'styled-components';
import * as Label from '@radix-ui/react-label';

import {
  bg200,
  contents000,
  contents200,
  contents300,
  contents999,
  roleRed,
} from 'colors/v3';
import { ellipsis, getTypographyStyles } from 'mixins/typography';

import { HintTextColorType } from '.';

export const InputContainer = styled.div<{
  disabled?: boolean;
  hasError?: boolean;
}>`
  display: flex;
  align-items: center;
  border: 1px solid ${contents300};
  border-radius: 4px;
  padding: 0 12px;
  background-color: ${contents999};
  gap: 8px;

  transition: border-color 0.2s, background-color 0.2s;

  ${({ hasError, disabled }) => [
    hasError
      ? css`
          border-color: ${roleRed};
        `
      : css`
          &:focus-within {
            border-color: ${contents000};
          }
        `,
    disabled &&
      css`
        background-color: ${bg200};
      `,
  ]}
`;

export const InputInner = styled.input`
  ${getTypographyStyles('Body1_M')}

  display: block;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  border: 0;
  color: ${contents000};
  background-color: transparent;

  &:placeholder-shown {
    ${ellipsis()}
  }

  &::placeholder {
    color: ${contents200};
  }

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled(Label.Label)`
  ${getTypographyStyles('Headline4_B')}
  display: block;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  > mark {
    all: unset;
    color: ${roleRed};
  }
`;

export const InputError = styled.div`
  ${getTypographyStyles('Body2_M')}
  color: ${roleRed};

  margin-top: 8px;
`;

export const InputHintText = styled.span<{ textColor?: HintTextColorType }>`
  ${getTypographyStyles('Body1_M')}
  color: ${({ textColor }) =>
    ({ roleRed, contents000, contents300 }[textColor ?? 'roleRed'] ?? roleRed)};
  white-space: nowrap;
`;

export const InputTogglePasswordVisibilityButton = styled.button`
  all: unset;
  appearance: none;
  cursor: pointer;

  > svg {
    display: block;
  }
`;
