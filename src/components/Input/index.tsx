import {
  forwardRef,
  memo,
  ReactNode,
  useState,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from 'react';

import { IconVisibilityS, IconVisibilityOffS } from 'components/Icons';
import { createRandomId } from 'utils/id';

import {
  InputContainer,
  InputError,
  InputHintText,
  InputInner,
  InputLabel,
  InputTogglePasswordVisibilityButton,
} from './index.styles';

export type HintTextColorType = 'roleRed' | 'contents000' | 'contents300';

type BaseInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  `aria-${string}`
>;

type TextInputProps = {
  type?: 'text' | 'number' | 'email' | 'search' | 'tel' | 'url';
  label?: ReactNode;
  hintText?: string;
  hintTextColor?: HintTextColorType;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  errorMessage?: string;
};

type PasswordInputProps = Omit<TextInputProps, 'type'> & {
  type: 'password';
  hasTogglePasswordVisibilityButton: boolean;
};

export type InputProps = BaseInputProps & (TextInputProps | PasswordInputProps);

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    label,
    leftElement,
    rightElement,
    disabled,
    hintText,
    hintTextColor,
    errorMessage,
    ...props
  },
  ref
) => {
  const [inputId] = useState(createRandomId());
  const [labelId] = useState(createRandomId());
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const isForceVisibleInput =
    props.type === 'password' &&
    props.hasTogglePasswordVisibilityButton &&
    isVisiblePassword;
  hintTextColor;
  return (
    <>
      {label && (
        <InputLabel id={labelId} htmlFor={inputId}>
          {label}
          {props.required && <mark>*</mark>}
        </InputLabel>
      )}
      <InputContainer
        disabled={disabled}
        hasError={!!errorMessage}
        className={className}
      >
        {leftElement}
        <InputInner
          disabled={disabled}
          id={inputId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          type={isForceVisibleInput ? 'text' : props.type ?? 'text'}
          ref={ref}
        />
        {hintText && (
          <InputHintText textColor={hintTextColor}>{hintText}</InputHintText>
        )}
        {props.type === 'password' &&
          props.hasTogglePasswordVisibilityButton && (
            <TogglePasswordVisibilityButton
              value={isVisiblePassword}
              onChange={setIsVisiblePassword}
            />
          )}
        {rightElement}
      </InputContainer>
      {errorMessage && <InputError>{errorMessage}</InputError>}
    </>
  );
};

const TogglePasswordVisibilityButton = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => (
  <InputTogglePasswordVisibilityButton
    role="switch"
    aria-checked={value ? 'true' : 'false'}
    aria-label="비밀번호 표시"
    onClick={() => {
      onChange(!value);
    }}
  >
    {value ? <IconVisibilityOffS /> : <IconVisibilityS />}
  </InputTogglePasswordVisibilityButton>
);

export default memo(forwardRef(Input));
