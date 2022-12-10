export interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  icon?: JSX.Element;
  variant?: 'info' | 'success' | 'warning' | 'error';
  closeButton?: boolean;
  customCloseButton?: JSX.Element;
}
