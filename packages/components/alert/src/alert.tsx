import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '@Excelente/button';
import { Props } from './alert.types';

export default function Alert({
  children,
  icon,
  variant,
  className,
  closeButton,
  customCloseButton,
}: Props) {
  const [unmount, setUnmount] = useState(false);

  let customCloseButtonInstance = null;

  const classes = twMerge(
    'flex alert shadow-lg',
    clsx({
      'alert-info': variant === 'info',
      'alert-success': variant === 'success',
      'alert-warning': variant === 'warning',
      'alert-error': variant === 'error',
    }),
    className
  );

  if (typeof customCloseButton !== 'undefined') {
    // passing alert unmount function to provided customCloseButton
    customCloseButtonInstance = React.cloneElement(customCloseButton, {
      onClick: () => {
        setUnmount(true);
      },
    });
  } else {
    customCloseButtonInstance = null;
  }

  if (unmount) {
    return null;
  }

  return (
    <div className={classes}>
      <div className="w-full">
        {icon}
        <span className="w-full">{children}</span>
      </div>

      <div className="flex-none">
        {closeButton
          ? customCloseButtonInstance || (
              <Button
                size="sm"
                circle
                variant="ghost"
                //   className="absolute top-2 right-2"
                onClick={() => {
                  setUnmount(true);
                }}
              >
                x
              </Button>
            )
          : null}
      </div>
    </div>
  );
}
