import { ReactNode } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];

  variant?:
    | 'accent'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'ghost'
    | 'link';
  outline?: boolean;
  sharp?: boolean;
  rounded?: boolean;
  active?: boolean;
  disabled?: boolean;
  glass?: boolean;
  loading?: boolean;
  noAnim?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  wide?: boolean;
  fullSize?: boolean;
  circle?: boolean;
  square?: boolean;
  className?: string;
  center?: boolean;
  LeftIcon?: Element | ReactNode;
  RightIcon?: Element | ReactNode;

  [key: string]: unknown;
}
