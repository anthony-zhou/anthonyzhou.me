import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layouts/Layout';
import demoSvg from '../components/demo.svg';

function ProjectItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-20">
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Anthony Zhou</title>
      </Head>
      <div>
        <ul>
          <ProjectItem>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col justify-between">
                <h3 className="font-bold text-xl mb-2">TreeChat</h3>
                <p>
                  A chat app that plants trees.
                  Tech stack: DynamoDB, GraphQL, TypeScript, Jest, Flutter
                  Role: backend, integration, and testing.
                </p>
              </div>
              <div className="md:w-96">
                <video className="w-full" autoPlay loop muted>
                  <source src="/assets/projects/treechat_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </ProjectItem>
          <ProjectItem>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-between">
                <h3 className="font-bold text-xl mb-2">Climate model translation</h3>
                <div>
                  <p>
                    Proof-of-concept work to translate and modernize a climate model.
                    Worked with Pierre Gentine and Linnia Hawkins of Columbia University
                    and presented at National Center for Atmospheric Research (NCAR) meetings.
                  </p>
                  <p>
                    <b>Tech stack:</b>
                    {' '}
                    Python, GPT-4, Language Server Protocol (LSP)
                  </p>
                </div>
                <div>
                  Code:
                  {' '}
                  <Link href="https://github.com/anthony-zhou/climate_code_conversion">GitHub</Link>
                </div>
              </div>
              <div className="">
                <object type="image/svg+xml" data="/assets/projects/translation_cli.svg" className="w-full h-auto">
                  Demo of iterative translation CLI
                </object>
              </div>
            </div>
          </ProjectItem>
          <ProjectItem>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col justify-between">
                <h3 className="font-bold text-xl mb-2">Snapnotes</h3>
                <p>
                  Generate lecture notes from your recordings and articles.
                  Tech stack: Supabase, GPT-4, Python, Modal, Next.js, Cohere embeddings
                </p>
              </div>
              <div className="">
                <video className="w-full" autoPlay loop muted>
                  <source src="/assets/projects/snapnotes_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </ProjectItem>
          <li>Floodgate reactor: Aleph, climate API, tastebase, network sensors</li>
          <li>Big & Mini</li>
        </ul>
      </div>
    </Layout>
  );
}
