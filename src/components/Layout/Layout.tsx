import React from 'react';
import Header from '../Header';
import SubscribeForm from '../SubscribeForm';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto pb-10 px-10">
        {children}
      </div>
      <SubscribeForm />
    </div>
  );
}
