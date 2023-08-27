import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import profileImage from '@/components/profile.jpg';
import Heading from '@/components/Heading';
import CommentSection from '@/components/CommentSection';

export default function About() {
  const router = useRouter();
  const paragraphs = [
    "Occasionally, I'll mix things up a bit by blogging about my personal experiences and opinions. As a food lover, I hope this site will be like a nice big helping of my mom's fried rice — sure, the ingredients don't always sound like they go together (probably because they're all leftovers from yesterday), but if you give it a try it just makes sense. Hopefully my articles on economics, psychology, and Florentine security guards will go together just as well as edamame and scallions and fajita chicken.",
    'Maybe, though, there is a thread of sanity amidst the madness: thanks to modern psychology, we now know that "better" is a highly subjective experience, which depends mainly on your reference point. So making the world a better place requires that, in addition to technical skill, we must acquire an understanding of how humans think.',
    'Now that I have explained exactly nothing about the subject matter of this blog, here\'s a little about me: I am currently a college undergrad at Columbia University in New York.  In my free time, I like to play trumpet, piano, and guitar, rock climb, hike, travel, play soccer, hang out with friends, and eat fried rice (not always at the same time).',
    'So that, in just under 300 words, is what you can expect from this website — I might come back later and revise this page if I ever decide to do a complete 180 and start blogging about fashion or something. For now, though, I will take a break and go eat some fajita chicken fried rice. If you ever want to chat, drop me a line at azhou.blog@gmail.com!',
  ];
  const url = typeof window !== 'undefined' ? window.location.href : `https://anthonyzhou.com${router.asPath}`;

  return (
    <Layout>

      <div className="py-10">
        <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
        <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting. </h1>
      </div>

      <Heading text="About Me" />
      <div className="md:grid md:grid-cols-12 gap-12 py-8">
        <div className="prose md:col-span-8">
          <p>
            Hi there!
            My name is Anthony Zhou and
            I believe that science and technology can be used to make the world a better place.
            Kumbaya!
          </p>

          <Image src={profileImage} alt="profile image" className="my-0 " />

          <p>On this blog, I will mainly post two types of articles:</p>

          <ul>
            <li>
              <a href="/writing#essays">Essays</a>
            </li>
            <li>
              <a href="/writing#tutorials">Tutorials</a>
            </li>
          </ul>

          {paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>

        <div className="md:col-span-4">
          <div className="sticky top-20">
            <h5 className="font-bold text-xl mb-4">Links</h5>

            <p className="mb-3">
              If you&apos;d like to see what else I&apos;m coding,
              here is a good place to start:
            </p>

            <a target="_blank" href="https://github.com/anthony-zhou" className="p-2 text-white bg-blue-500 rounded-md" rel="noreferrer">
              GitHub
              {' '}
              <FontAwesomeIcon
                icon={faGithub}
              />
            </a>

          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-12 gap-12 py-8">
        <div className="md:col-span-8">
          <CommentSection title="About Me | Anthony Zhou" url={url} />
        </div>
      </div>
    </Layout>
  );
}
