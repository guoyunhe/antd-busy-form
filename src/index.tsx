import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface AntdBusyFormProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function AntdBusyForm({ children, className, style }: AntdBusyFormProps) {
  return (
    <div className={cn('antd-busy-form', className)} style={style}>
      {children}
    </div>
  );
}
