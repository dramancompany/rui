import { ButtonProps } from '.';

export type ButtonSizeType = 'small' | 'medium' | 'large' | 'xLarge';

export type ButtonTheme = 'solid' | 'secondary';

export type ButtonStyleType = Pick<
  ButtonProps,
  'block' | 'disabled' | 'outline' | 'size' | 'loading'
> & { theme: ButtonTheme };
