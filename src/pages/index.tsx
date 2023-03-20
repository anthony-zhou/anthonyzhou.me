import React from 'react';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="md:flex">
        <div>
          <h1 className="text-4xl font-display">Anthony Zhou</h1>
          <p>Psychology, Economics, Programming, or anything interesting.</p>
        </div>
        <div>
          Image goes here.
        </div>
      </div>
    </Layout>
  );
}
