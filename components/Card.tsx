import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 flex flex-col ${className}`}>
      <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">{title}</h3>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Card;
