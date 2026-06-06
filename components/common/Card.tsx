/**
 * Card Component
 * Componente de tarjeta reutilizable con glassmorphism
 * 
 * Uso:
 * <Card className="p-6">
 *   <h3>Título</h3>
 *   <p>Contenido</p>
 * </Card>
 */

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ elevated = false, interactive = false, className = '', children, ...props }, ref) => {
    const baseClasses = 'rounded-3xl overflow-hidden transition-all duration-300';
    
    const styleClasses = elevated
      ? 'bg-white/[0.04] border border-white/10 backdrop-blur-3xl'
      : 'bg-white/[0.03] border border-white/8 backdrop-blur-2xl';

    const interactiveClasses = interactive
      ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 data-[cursor-hover]:hover:shadow-blue-400/15'
      : '';

    const combinedClasses = `${baseClasses} ${styleClasses} ${interactiveClasses} ${className}`.trim();

    return (
      <div
        ref={ref}
        className={combinedClasses}
        {...(interactive ? { 'data-cursor-hover': true } : {})}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
