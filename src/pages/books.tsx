import React from 'react';

import Layout from '@/components/layouts/Layout';

export default function Books() {
  return (
    <Layout>
      <div className="prose">
        <h2 className="text-4xl mt-10">Bookshelf</h2>
        <div className="mb-5 mt-5">I enjoyed most of these books; standouts are bolded. </div>
        <ul className="mb-10">
          <li>The Next Shift - Gabriel Winant</li>
          <li>Capitalism and Freedom - Milton Friedman (1962)</li>
          <li>Myth of the Happy Worker - Harvey Swados (1957)</li>
          <li>The Power Elite - C. Wright Mills (1956)</li>
          <li>The Other America - Michael Harrington (1962)</li>
          <li>The Scout Mindset - Julia Galef</li>
          <li>A Consumers’ Republic - Lizabeth Cohen</li>
          <li>The Status Seekers - Vance Packard</li>
          <li><b>The End of Reform - Alan Brinkley</b></li>
          <li>The Great Crash, 1929 - John Kenneth Galbraith</li>
          <li>Killing for Coal - Thomas G. Andrews</li>
          <li>New Power - Jeremy Heimans, Henry Timms</li>
          <li><b>The Coddling of the American Mind (Greg Lukianoff and Jonathan Haidt)</b></li>
          <li><b>This is How They Tell Me the World Ends (Nicole Perlroth)</b></li>
          <li>The Left Hand of Darkness (Ursula K. Le Guin)</li>
          <li>How to Talk to Anyone (Leil Lowndes)</li>
          <li>Siddhartha (Herman Hesse)</li>
          <li>Letters from a Stoic (Seneca) - in progress</li>
          <li><b>Demian (Herman Hesse)</b></li>
          <li>On the Shortness of Life (Seneca)</li>
          <li><b>Snow Crash (Neal Stephenson)</b></li>
          <li>Principles (Ray Dalio)</li>
          <li>Tools of Titans (Tim Ferriss)</li>
          <li>How to Live (Derek Sivers)</li>
          <li><b>Onward (Howard Schultz)</b></li>
          <li>A Life on Our Planet (David Attenborough)</li>
          <li>The Good Luck of Right Now (Matthew Quick)</li>
          <li>The Tao of Pooh (Benjamin Hoff)</li>
          <li>Catch-22 (Joseph Heller)</li>
          <li>The Restaurant at the End of the Universe (Douglas Adams)</li>
          <li>Hot, Flat, and Crowded (Thomas Friedman)</li>
          <li>The Ministry for the Future (Kim Stanley Robinson)</li>
          <li><b>Pride and Prejudice (Jane Austen)</b></li>
          <li>Thinking in Bets (Annie Duke)</li>
          <li><b>Crying in H Mart (Michelle Zauner)</b></li>
          <li>Song of Solomon (Toni Morrison)</li>
          <li>The Magicians (Lev Grossman)</li>
          <li>The Alignment Problem (Brian Christian)</li>
          <li>Tao Te Ching - Lao Tzu</li>
          <li>Modern Romance - Aziz Ansari</li>
          <li>Confessions - St. Augustine (Books 1-7)</li>
          <li>Stillness is the Key - Ryan Holiday</li>
          <li><b>The Art of Learning - Josh Waitzkin</b></li>
          <li>How to Take Smart Notes - Sonke Ahrens</li>
          <li><b>Cryptonomicon - Neal Stephenson</b></li>
          <li>Excellent Sheep - William Deresiewicz</li>
          <li>To Serve God and Wal-Mart - Bethany Moreton</li>
          <li>Antifragile - Nassim Nicholas Taleb</li>
          <li><b>Homo Deus - Yuval Noah Harari</b></li>
          <li>Smarter Better Faster - Charles Duhigg</li>
        </ul>
      </div>
    </Layout>
  );
}
