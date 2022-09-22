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
  // TODO: useId로 대체해야 함, 랜덤 ID생성하는 로직 작성할 것
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
