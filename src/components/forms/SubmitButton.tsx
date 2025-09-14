import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({
    children,
    className = '',
    isLoading = false,
    fullWidth = false,
    size = 'md',
    variant = 'primary',
    icon,
    iconPosition = 'left',
    disabled,
    ...props
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const sizeStyles = {
      sm: 'h-9 px-3 text-sm min-w-[2.25rem]',
      md: 'h-11 px-4 py-2 text-base min-w-[2.75rem]',
      lg: 'h-14 px-6 py-3 text-lg min-w-[3.5rem]',
    };
    
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
    };
    
    const fullWidthStyle = fullWidth ? 'w-full' : '';
    const loadingStyle = isLoading ? 'opacity-70 pointer-events-none' : '';

    return (
      <button
        type="submit"
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidthStyle,
          loadingStyle,
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {children}
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="mr-2">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className="ml-2">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

SubmitButton.displayName = 'SubmitButton';
