import React from 'react';

export const Logo: React.FC<{ className?: string, variant?: 'light' | 'dark' }> = ({ className = '', variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-dark';
  const accentColor = variant === 'light' ? 'text-brand-light' : 'text-brand-light';

  return (
    <div className={`font-display font-bold tracking-wider text-2xl flex items-center gap-1 ${className}`}>
      <span className={textColor}>A</span>
      <span className={accentColor}>S</span>
      <span className={textColor}>R</span>
    </div>
  );
};