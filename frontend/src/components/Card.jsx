import React from 'react';

export default function Card({ 
  children, 
  title, 
  subtitle,
  className = '',
  padding = true,
  hover = false,
  ...props 
}) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${
        hover ? 'hover:shadow-xl transition-shadow duration-200' : ''
      } ${padding ? 'p-6' : ''} ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-xl font-semibold text-gray-800">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
