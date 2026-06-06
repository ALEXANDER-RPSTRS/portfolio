/**
 * Button Component
 * Componente de botón reutilizable con variantes (primary, secondary, outline)
 * 
 * Uso:
 * <Button variant="primary" size="lg">Click me</Button>
 */

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    children,
    className = '',
    disabled,
    ...props
  }, ref) => {
    // Base styles (común para todos)
    const baseClasses = 'font-semibold transition-all duration-300 outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-full';

    // Variantes
    const variantClasses: Record<string, string> = {
      primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50',
      secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30',
      outline: 'border border-white/20 hover:bg-white/10 text-white hover:border-white/40',
      ghost: 'hover:bg-white/10 text-white hover:text-white',
    };

    // Tamaños
    const sizeClasses: Record<string, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const combinedClasses = `
      ${baseClasses}
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${widthClass}
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={combinedClasses}
        data-cursor-hover
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
