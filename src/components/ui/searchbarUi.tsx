// SearchBarUI.tsx
import React from 'react';

interface SearchBarUIProps {
  onSearch: (query: string) => void;
  children: React.ReactNode;
}

const SearchBarUI: React.FC<SearchBarUIProps> = ({ onSearch, children }) => {
  return <div className="mb-4">{React.cloneElement(children as React.ReactElement, { onSearch })}</div>;
};

export default SearchBarUI;
