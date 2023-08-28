import React from 'react';
import Header from '@/components/Header';
import SubscribeForm from '@/components/SubscribeForm';
import Footer from '@/components/Footer';

// Idential to Layout but it has a footer with category links.
export default function ArticleLayout({ children, categoryCounts }:
{ children: React.ReactNode, categoryCounts: { [key: string]: number } }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto pb-10 px-10 pt-20">
        {children}
      </div>
      <SubscribeForm />
      <Footer categoryCounts={categoryCounts} />
    </div>
  );
}
