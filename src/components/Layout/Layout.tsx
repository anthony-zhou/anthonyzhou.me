import React from 'react';
import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
}
