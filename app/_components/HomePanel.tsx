import React, { ReactNode } from 'react';

const cardStyles = `rounded-xl border border-indigo-800 dark:bg-gray-800 bg-gray-100 p-6 shadow-lg`;

const HomePanel = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <div className={`${cardStyles} ${className}`}>{children}</div>;
};

export default HomePanel;
