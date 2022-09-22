import {
  useMemo,
  forwardRef,
  memo,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
  ReactNode,
} from 'react';

import { InputContainer, InputInner, InputLabel } from './Input.styles';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, `aria-${string}`> {
  label: string;
  leftElements?: ReactNode;
  rightElements?: ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, leftElements, rightElements, ...props },
  ref
) => {
  const labelId = useMemo(() => String(Date.now()), []);
  return (
    <>
      {label && <InputLabel htmlFor={labelId}>{label}</InputLabel>}
      <InputContainer>
        {leftElements}
        <InputInner
          id={labelId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          ref={ref}
        />
        {rightElements}
      </InputContainer>
    </>
  );
};

export default memo(forwardRef(Input));
