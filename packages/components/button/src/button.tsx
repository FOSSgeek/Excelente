import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './button.types';

export default function Button({
  children,
  variant,
  outline,
  sharp,
  rounded,
  active,
  disabled,
  glass,
  loading,
  noAnim,
  size,
  wide,
  fullSize,
  circle,
  square,
  center,
  LeftIcon,
  RightIcon,
  className,
  ...props
}: ButtonProps): JSX.Element {
  const classes: string = clsx({
    'btn-primary': variant === 'primary',
    'btn-accent': variant === 'accent',
    'btn-secondary': variant === 'secondary',
    'btn-info': variant === 'info',
    'btn-success': variant === 'success',
    'btn-warning': variant === 'warning',
    'btn-error': variant === 'error',
    'btn-link': variant === 'link',
    'btn-ghost': variant === 'ghost',

    'btn-outline': outline,
    'rounded-none': sharp,
    'rounded-full': rounded,

    'btn-lg': size === 'lg',
    'btn-md': size === 'md',
    'btn-sm': size === 'sm',
    'btn-xs': size === 'xs',

    'btn-wide': wide,
    'btn-block': fullSize,
    'btn-circle': circle,
    'btn-square': square,

    'no-animation': noAnim,
    glass,
    loading,
    'btn-disabled': disabled,
    'btn-active': active,
    'm-auto': center,
  });

  const allStyles = twMerge(
    // giving className (if exist) value precedence over "classes" to  not override customization
    className !== undefined ? `${classes} ${className}` : classes
  );

  return (
    <button type="button" className={`flex gap-2 btn ${allStyles}`} {...props}>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        {LeftIcon || null}
        {children}
        {RightIcon || null}
      </>
    </button>
  );
}
