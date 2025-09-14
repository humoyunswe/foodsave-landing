import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  padded?: boolean;
  fullWidth?: boolean;
}

export default function Container({ 
  children, 
  className = '', 
  padded = true,
  fullWidth = false
}: ContainerProps) {
  return (
    <div 
      className={`
        ${!fullWidth ? 'max-w-7xl' : 'w-full'}
        ${padded ? 'px-4 sm:px-6 lg:px-8' : ''}
        mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
}
