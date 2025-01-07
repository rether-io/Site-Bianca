import React from 'react';
import ButtonGradient from '../assets/svg/button-gradient.svg';

const Button = ({ 
  className = '',
  href,
  onClick,
  children,
  px = 'px-7',
  white,
}) => {
  const classes = `
    relative inline-flex items-center justify-center h-11 
    transition-colors hover:text-color-1
    ${px} ${white ? 'text-n-8' : 'text-n-1'} ${className}
  `;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      <ButtonGradient />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className="relative z-10">{children}</span>
      <ButtonGradient />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;