import Head from "next/head";
import React from "react";
import nextPackage from "next/package.json";
import Resume from "pages/resume";

export default function Home({}) {
  return (
    <div className="container mx-auto px-12 md:px-48 lg:px-96">
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>{" "}
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js"></script>
      <script src="./sketch.js" async></script>
      <script src="./vimStyleBindings.js" async></script>
      <p className="text-3xl font-semibold font-sans pt-16 md:pt-32">
        Hi, my name is Gautom Das
      </p>
      <p className="italic font-serif pt-8">[Last updated on 9/7/22]</p>
      <div className="font-normal font-serif">
        <p className="pt-8">Welcome to my website.</p>
        <p className="pt-8">
          I’m a junior at the University of Maryland, College Park interested in
          a lot of things but mainly Computer Science and Math. I've always
          though of Computer Science as the study of digital information; how
          it's stored, transformed, and manipulated. For me, the intersection
          between Computer Science and Math has some of the most unique ideas. I
          love learning about anything and everything. My goal as of now is to
          be the best software and algorithm engineer I can be.
        </p>
        <p className="pt-8">Interests at the moment:</p>
        <ul className="list-disc pt-2 mx-6">
          <li>Functional programming</li>
          <li>Compiler design</li>
          <li>Type theory</li>
        </ul>
      </div>
      <p className="text-3xl font-semibold font-sans pt-12">Socials</p>
      <p className="pt-8 font-serif">
        Here's my{" "}
        <a
          className="font-semibold"
          href="https://www.linkedin.com/in/das-gautom/"
        >
          [L]inkedIn
        </a>
        ,{" "}
        <a className="font-semibold" href="https://github.com/gautomdas">
          [G]itHub
        </a>
        , and{" "}
        <a className="font-semibold" href="https://devpost.com/gautom">
          [D]evpost
        </a>
        . I'm not the best at keeping them updated so if you have any questions
        please feel free to email me.
      </p>
      <p className="pt-8 font-serif italic">
        BTW, this page just has random Vim-inspired keybindings (e.g. j and k to
        go up and down). Hyperlinks can be clicked on by hitting the first
        letter in the link text. I hope to add more but this page doesn't have
        the functionality yet to deserve it. The main goal is to make the whole
        page accessible without requiring a mouse.
      </p>
      <p className="text-3xl font-semibold font-sans pt-12">An animation</p>
      <a href="./sketch.js">
        <div id="sketch-holder" className="pt-4"></div>
      </a>
      <p className="pt-8 font-serif">
        Why? I didn’t want you to think this page is just static. I mean,
        technically it is, but I'm a visual learner and love animations so,
        enjoy. Unless this didn’t load, which would be disappointing (just try
        to imagine some fancy circles spinning).
      </p>
      <p className="text-3xl font-semibold font-sans pt-12">Resume</p>
      <p className="pt-8 font-serif">
        Now onto the meat. This is for all the scrapers （っ＾▿＾) . Also, you
        find the pdf version{" "}
        <a className="text-blue-400" href="./gautom_das_resume.pdf">
          here
        </a>
        .
      </p>
      <Resume />
      <div className="relative flex pt-10 pb-5 items-center">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="font-serif flex-shrink mx-4 italic text-gray-600">
          fin
        </span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <p className="pt-8 font-serif text-center md:px-20 text-lg italic">
        That's all I had for the moment, I hope you enjoyed. If you're
        interested in contacting me or getting in touch, please email me at
        "gdas `at` terpmail.umd.edu".
      </p>
      <p className="text-xs pt-24 pb-24 font-sans font-medium	">
        &copy; Gautom Das 2022
      </p>
    </div>
  );
}
