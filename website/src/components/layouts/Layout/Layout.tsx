import React from 'react';
import Header from '@/components/Header';
import SubscribeForm from '@/components/SubscribeForm';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto pb-10 px-10 pt-20">
        {children}
      </div>
      <SubscribeForm />
    </div>
  );
}
