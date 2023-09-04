import React from 'react';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Anthony Zhou</title>
      </Head>

      <div className="grid md:grid-cols-2 mt-10 gap-6">
        <ProjectCard
          title="TreeChat"
          description="TreeChat is the free messaging app that reforests the planet as you chat. You send messages, we plant trees."
          techStack={['DynamoDB', 'GraphQL', 'TypeScript', 'Jest', 'Flutter']}
          image="/assets/projects/treechat_screenshots.png"
          alt="Screenshots of the TreeChat app"
          details={(
            <div className="md:flex gap-4">
              <div className="opacity-50">
                <p className="mt-4">
                  What happens when we build products that make sustainability
                  a feature instead of a tradeoff?
                </p>
                <p className="mt-4">
                  TreeChat was an app my brother and I built to show how the apps
                  we use every day can be made just as well in
                  a way that doesn&apos;t harm the planet.
                </p>
                <p className="mt-4">
                  Beyond providing the same features as existing chat apps — like
                  group messages, contact sync, and reactions — TreeChat features
                  an eco-friendly shop offering sustainable products through affiliate links.
                </p>
                <p className="mt-4">
                  Environmentalists have long recognized that lifestyle changes
                  can affirm our commitments to sustainability, even if their impact is small.
                </p>
                <p className="mt-4">
                  We don’t want to just sit back and wait for someone
                  else to solve the problem of climate change.
                  It’s time for each and every one of us to play
                  our own part in helping our planet breathe again. And it starts now.
                </p>
              </div>
              <div className="">
                <video className="w-full" autoPlay loop muted>
                  <source src="/assets/projects/treechat_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
)}
        />
        <ProjectCard
          title="Climate Model Translation"
          description="Proof-of-concept work to translate and modernize a climate model."
          techStack={['Python', 'Fortran', 'GPT-4', 'Language Server Protocol']}
          alt="Subset of the dependency graph for the NCAR CESM climate model. Represents functions and their dependencies, as an input to GPT-4. "
          image="/assets/projects/cli_screenshot.png"
          details={(
            <div className="flex flex-col gap-4">
              <div className="opacity-50">
                <p className="mt-4">
                  Climate models have changed from coarse ocean-atmosphere models
                  to complex Earth system models that include all Earth components, like
                  ocean, atmosphere, cryosphere and land and detailed biogeochemical cycles.
                </p>
                <p className="mt-4">
                  Where carbon is getting stored? How will land use change affect
                  the climate? These are some questions that climate models help us answer.
                </p>
                <p className="mt-4">
                  But the field is held back by technical debt. Most models are
                  coded in Fortran or C for legacy reasons, and run
                  on resource-intensive parallelized CPUs.
                </p>
                <p className="mt-4">
                  To address this issue, we can now translate climate models into fast and
                  differentiable Python using large language models like GPT-4,
                  together with traditional tools like static analysis and unit tests.
                </p>
                <p className="mt-4">
                  Together with Pierre Gentine and Linnia Hawkins of Columbia and LEAP STC, I
                  built tools for performing translation from Fortran to Python, and
                  presented the work to scientists and software engineers at NCAR
                  (National Center for Atmospheric Research). Code is on
                  {' '}
                  <a href="https://github.com/anthony-zhou/climate_code_conversion/">GitHub</a>
                  {' '}
                  and paper is on the way.
                </p>
                <p className="mt-4">
                  Eventually, this work aims for a future where climate models
                  are differentiable and GPU/TPU-friendly, making them faster
                  and more accurate.
                </p>
              </div>
              <div className="">
                <object type="image/svg+xml" data="/assets/projects/translation_cli.svg" className="w-full h-auto">
                  Demo of iterative translation CLI
                </object>
                <p className="italic opacity-50">Demo of the iterative translation module</p>
              </div>
            </div>
)}
        />
        <ProjectCard
          title="Snapnotes"
          description="Read books faster with AI sparknotes for pdfs and epubs."
          techStack={['Supabase', 'GPT-4', 'Python', 'Modal', 'Next.js']}
          alt="Subset of the dependency graph for the NCAR CESM climate model. Represents functions and their dependencies, as an input to GPT-4. "
          image="/assets/projects/snapnotes_screenshot.png"
          details={(
            <div className="flex flex-col gap-4">
              <div className="opacity-50">
                <p className="mt-4">
                  Taking notes is valuable for two reasons: learning and review.
                </p>
                <p className="mt-4">
                  For the purpose of review, taking notes seems
                  like wasted time, since you&apos;e just trying
                  to copy information from paragraph form into bullet form.
                </p>
                <p className="mt-4">
                  Snapnotes does this automatically for you, by converting lecture recordings and
                  readings into bulleted outline notes. Every bullet is linked to a section of the
                  original text, so that you can read more if needed.
                </p>
                <p className="mt-4">
                  From a technical perspective, I learned how to work with
                  embeddings, context windows, and chained calls to a language model. I also
                  polished my (soon-to-be-obsolete) ability to convert Figma designs
                  into React code.
                </p>
                <p className="mt-4">
                  Working on Snapnotes has confirmed by conviction that
                  human note-taking, and writing in general, is still critical as a
                  basis for thinking clearly.
                </p>
                <p className="mt-4">
                  Language models can be either a crutch or an exoskeleton.
                  By continuing to tinker, I believe we can build tools that don&apos;t
                  just replace human tasks but enhance our ability to think, reason, and
                  become better version of ourselves.
                </p>
              </div>
              <div className="">
                <video className="w-full" autoPlay loop muted>
                  <source src="/assets/projects/snapnotes_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="italic opacity-50">Demo of the Snapnotes reading interface</p>
              </div>
            </div>
)}
        />
      </div>

      {/* <div>
        <ul> */}
      {/*
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
      </div> */}
    </Layout>
  );
}
