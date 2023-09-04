import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layouts/Layout';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Anthony Zhou</title>
      </Head>
      <h2 className="font-bold text-4xl mt-10">Projects</h2>
      <div className="mb-5 mt-5">Here are some things I&apos;ve worked on.  </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">
        <ProjectCard
          title="TreeChat"
          description="TreeChat is the free messaging app that reforests the planet as you chat. You send messages, we plant trees."
          techStack={['DynamoDB', 'GraphQL', 'TypeScript', 'Jest', 'Flutter']}
          image="/assets/projects/treechat_screenshots.png"
          alt="Screenshots of the TreeChat app"
          details={(
            <div className="md:flex gap-4">
              <div className="opacity-50">
                <p className="">
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
          title="Dream Air Quality Sensor"
          description="A decentralized wireless sensor network for measuring pollution and tracing emissions sources. "
          techStack={['Arduino', 'CAD', 'Elixir', 'C++', 'Shopify']}
          alt="."
          image="/assets/projects/dream_multiple_shots.png"
          details={(
            <div className="opacity-50">
              <p className="mt-4">
                We made this as part of the Floodgate Reactor program, a startup incubator of sorts.
              </p>
              <p className="mt-4">
                I wrote all about the Dream Air Quality Sensor in a
                {' '}
                <Link href="/posts/air-quality-report" className="underline">recent blog post</Link>
              </p>
            </div>
)}
        />
        <ProjectCard
          title="Snapnotes"
          description="Read books faster with AI sparknotes for pdfs and epubs."
          techStack={['Supabase', 'GPT-4', 'Python', 'Modal', 'Next.js']}
          alt="Screenshot of Snapnotes logo with an otter in an inflatable tube."
          image="/assets/projects/snapnotes_graphic.png"
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

        <ProjectCard
          title="Big & Mini"
          description="Big & Mini is a platform that connects young and older adults for 1:1 conversations to combat social isolation and bridge the generation gap."
          techStack={['DynamoDB', 'Lambda', 'EC2', 'Jitsi', 'React', 'Next.js']}
          alt="Screenshot of the Big & Mini homepage"
          image="/assets/projects/bm_graphic.png"
          details={(
            <div className="flex flex-col gap-4">
              <div>
                <p className="mt-4 opacity-50">
                  COVID-19 caused a lot of problems. We didn&apos;t have
                  the expertise to develop vaccines or serve on the front
                  lines, but we did know how to build software.
                </p>
                <p className="mt-4 opacity-50">
                  Loneliness has been a growing problem for years.
                  COVID made many in-person connections infeasible, exacerbating the issue.
                </p>
                <p className="mt-4 opacity-50">
                  Big & Mini addresses this problem by connecting young
                  and older adults for 1:1 virtual conversations.
                </p>
                <div className="my-10">
                  <img src="/assets/projects/bm_dashboard_screenshot.png" alt="Screenshot of the Big & Mini dashboard" />
                  <p className="opacity-50 italic">Screenshot of the Big & Mini dashboard</p>
                </div>
                <p className="mt-4 opacity-50">
                  We implemented features like in-browser video call and integrated chat,
                  to ensure both convenience and privacy. We used serverless technologies to make
                  the backend simple and scalable.
                </p>
                <p className="mt-4 opacity-50">
                  Over the course of 2 years, we grew the platform
                  to thousands of Bigs & Minis from 50 states and 62 countries.
                  We received coverage in The New York Times, the TODAY Show,
                  and many other outlets, forming a virtuous cycle for growth.
                </p>
                <p className="mt-4 opacity-50">
                  Now, the world is largely open again. But loneliness
                  is still a problem, and it continues to get worse.
                  How do we make technology that connects people rather
                  than pushing us apart? Big & Mini is one attempt
                  to answer this question, but I hope there will be many more.
                </p>
              </div>
              <div className="">
                <div className="my-10">
                  <img src="/assets/projects/today_show.jpeg" alt="Screenshot of Big & Mini on the NBC TODAY Show" />
                  <p className="opacity-50 italic">Big & Mini on the TODAY Show</p>
                </div>

              </div>
            </div>
)}
        />
      </div>
    </Layout>
  );
}
