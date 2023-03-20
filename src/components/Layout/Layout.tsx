import React from 'react';
import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto md:px-32 px-5">
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
}
