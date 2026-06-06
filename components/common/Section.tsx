/**
 * Section Component
 * Wrapper para secciones con padding y layout centrado
 * 
 * Uso:
 * <Section>
 *   <h2>Título</h2>
 *   <p>Contenido</p>
 * </Section>
 */

import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  noVerticalPadding?: boolean;
  innerClassName?: string;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ fullWidth = false, noVerticalPadding = false, className = '', innerClassName = '', children, ...props }, ref) => {
    const verticalPadding = noVerticalPadding ? '' : 'py-24 md:py-32 lg:py-40';
    const innerWidth = fullWidth ? 'w-full' : 'mx-auto max-w-7xl';

    const sectionClasses = `
      relative w-full
      ${verticalPadding}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    const innerClasses = `
      w-full px-5 sm:px-6 lg:px-8
      ${innerWidth}
      ${innerClassName}
    `.trim().replace(/\s+/g, ' ');

    return (
      <section ref={ref} className={sectionClasses} {...props}>
        <div className={innerClasses}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
