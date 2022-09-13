import Head from "next/head";
import React from "react";
import nextPackage from "next/package.json";

export default function Resume({}) {
  return (
    <div>
      <p className="text-2xl font-semibold font-sans pt-6">Education</p>
      <div className="flex flex-row pt-4 ">
        <div className="basis-1/2">
          <p className="font-serif font-semibold">
            University of Maryland, College Park
          </p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif text-right">August 2020 – May 2024</p>
        </div>
      </div>
      <div className="flex flex-row pt-1">
        <div className="basis-1/2">
          <p className="font-serif italic">
            Bachelor of Science in Computer Science and Math
          </p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif text-right">College Park, MD</p>
        </div>
      </div>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            <span className="font-semibold">Awards & Honors</span>: Honors
            Student part of the Advanced Cybersecurity Experience and awarded
            the full Banneker Key Scholarship —a four year merit-based
            scholarship awarded to 0.02% of undergraduate students at UMD.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            <span className="font-semibold">Coursework</span>: Algorithms and
            Data Structures, Object Oriented Programming I and II, Linear
            Algebra, Multivariable Calculus, Differential Equations, Statistics
            I and II, Probability Theory, Functional Programming, Real Analysis
          </p>
        </li>
      </ul>
      <p className="text-2xl font-semibold font-sans pt-6">Experience</p>
      <div className="md:flex pt-4 ">
        <div className="basis-1/2">
          <p className="font-sans font-semibold text-lg">Yext</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif md:text-right">June 2022 – August 2022</p>
        </div>
      </div>
      <div className="md:flex pt-1">
        <div className="basis-1/2">
          <p className="font-serif italic">Software Engineering Intern</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif invisible md:visible md:text-right">
            Washington, D.C.
          </p>
        </div>
      </div>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Worked on Yext's Search back end development team to provide a
            customize AI search experience for companies.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Helped migrate the old query suggest architecture, in
            <span className="font-semibold"> Java</span>, to a more horizontally
            scalable system with new features.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Learned about distributed systems, message queueing, and databases
            by creating
            <span className="font-semibold"> MySQL</span> tables, making
            <span className="font-semibold"> RabbitMQ </span>
            exchanges to listen for updates, and adding new
            <span className="font-semibold"> gRPC </span>
            endpoints for more API functionality.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Experienced the dev lifecycle using build tools such as
            <span className="font-semibold"> Bazel</span> and version control
            tools such as
            <span className="font-semibold"> Git/Gerrit</span>, and practed a
            scrum workflow using
            <span className="font-semibold"> Jira</span>.
          </p>
        </li>
      </ul>
      <div className="md:flex pt-10 md:pt-4 ">
        <div className="basis-1/2">
          <p className="font-sans font-semibold text-lg">Capital One</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif md:text-right">June 2021 – October 2021</p>
        </div>
      </div>
      <div className="md:flex pt-1">
        <div className="basis-1/2">
          <p className="font-serif italic">Software Engineering Intern</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif invisible md:visible md:text-right">
            McLean, VA
          </p>
        </div>
      </div>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Worked on the second most starred —
            <span className="font-semibold">at 873 stars</span>— public,{" "}
            <span className="font-semibold">open source</span> repository: the
            <a
              className="text-blue-400"
              href="https://github.com/capitalone/DataProfiler"
            >
              {" "}
              Data Profiler
            </a>
            , a <span className="font-semibold">Python</span> library that
            allows for various file types to be opened and analyzed in Python as
            a DataFrame.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Grew functionality to include input String and Byte streams at scale
            to the python library. Additionally, improved the handling of
            buffers in the back end.
          </p>
        </li>
      </ul>
      <div className="md:flex pt-10 md:pt-4">
        <div className="basis-1/2">
          <p className="font-sans font-semibold text-lg">
            Immuta (Series D Startup)
          </p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif md:text-right">June 2021 – August 2021</p>
        </div>
      </div>
      <div className="md:flex pt-1">
        <div className="basis-1/2">
          <p className="font-serif italic">Software Engineering Intern</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif invisible md:visible md:text-right">
            College Park, MD
          </p>
        </div>
      </div>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Hands on experience with full-stack development at a startup: a
            <span className="font-semibold"> AngularJS</span>,{" "}
            <span className="font-semibold">Node.js</span> , and{" "}
            <span className="font-semibold">PostgreSQL</span> tech stack.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Shipped multiple feature upgrades and bug fixes in the v2021.3
            release.
          </p>
        </li>
      </ul>
      <div className="md:flex pt-10 md:pt-4">
        <div className="basis-1/2">
          <p className="font-sans font-semibold text-lg">
            Assured Global Consulting LLC
          </p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif md:text-right">
            January 2021 – January 2022
          </p>
        </div>
      </div>
      <div className="md:flex pt-1">
        <div className="basis-1/2">
          <p className="font-serif italic">Director of Marketing</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif invisible md:visible md:text-right">
            Washington, D.C.
          </p>
        </div>
      </div>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Founded an international education consulting company providing
            a-la-carte admissions services that partnered with{" "}
            <span className="font-semibold">
              {" "}
              three international organizations
            </span>{" "}
            and individuals in{" "}
            <span className="font-semibold"> seven countries</span>.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Shipped multiple feature upgrades and bug fixes in the v2021.3
            release.
          </p>
        </li>
      </ul>
      <div className="md:flex pt-10 md:pt-4">
        <div className="basis-1/2">
          <p className="font-sans font-semibold text-lg">
            Naval Medical Research Center
          </p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif md:text-right">June 2019 – August 2019</p>
        </div>
      </div>
      <div className="md:flex pt-1">
        <div className="basis-1/2">
          <p className="font-serif italic">Research Intern</p>
        </div>
        <div className="basis-1/2">
          <p className="font-serif invisible md:visible md:text-right">
            Silver Spring, MD
          </p>
        </div>
      </div>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Worked on analyzing data from blast exposures to improve diagnoses
            and assessment of traumatic brain injuries.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Gained experience in signal processing, image processing (
            <span className="font-semibold">openCV</span>), and data analysis (
            <span className="font-semibold">R</span>).
          </p>
        </li>
      </ul>

      <p className="text-2xl font-semibold font-sans pt-12 md:pt-6">Projects</p>
      <p className="pt-4 text-lg">
        <span className="font-sans font-semibold pr-2">pyTorrent</span>
        {"   "}|{"   "}
        <span className="font-serif italic pl-2">
          A V1 torrent parser and client in OCaml and Python
        </span>
      </p>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Wrote an <span className="font-semibold">OCaml</span> executable to
            decode and encode, BEncoded ".torrent" files with additional
            functionality to provide a Sha1 info_hash based on the original
            BitTorrent Protocol Specification.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Implemented the peer protocol in{" "}
            <span className="font-semibold">Python</span>. The user client
            inputs a torrent file and use the OCaml interface to generate a hash
            to find and manage peers via the tracker.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Peer messages were handled use{" "}
            <span className="font-semibold">TCP Sockets</span> in Python and was
            done asynchronously (asyncio) using{" "}
            <span className="font-semibold">coroutines</span> to download and
            build a file from multiple sources.
          </p>
        </li>
      </ul>
      <p className="pt-4 text-lg">
        <span className="font-sans font-semibold pr-2">Algoroller</span>
        {"   "}|{"   "}
        <span className="font-serif italic pl-2">
          A full-stack web app for roulette on the Algorand blockchain
        </span>
      </p>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Built a casino game using{" "}
            <span className="font-semibold">PyTeal</span> to run on the{" "}
            <span className="font-semibold">Algorand blockchain</span> that uses
            verifiable random numbers.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Front-end written using <span className="font-semibold">React</span>{" "}
            in <span className="font-semibold">TypeScript</span> and a back-end
            written in <span className="font-semibold">Node.js</span>.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Practiced using multiple <span className="font-semibold">APIs</span>{" "}
            to interact with the blockchain and learned the principles of
            programming on the blockchain.
          </p>
        </li>
      </ul>
      <p className="pt-4 text-lg">
        <span className="font-sans font-semibold pr-2">
          Parkinson's 3D Convolutional Neural Network
        </span>
      </p>
      <ul className="list-disc mx-6 pt-2">
        <li>
          <p className="font-serif pt-2">
            Interned at the University of Maryland Medical Center to attempt to
            classify Parkinson's Disease using convolutional neural networks.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Winner of TensorFlow's #PoweredByTF 2.0 Challenge! Hackathon using
            <span className="font-semibold"> TensorFlow</span> and{" "}
            <span className="font-semibold">Keras</span>.
          </p>
        </li>
        <li>
          <p className="font-serif pt-2">
            Analyzed 3D MRI data (in NIFTI) format and generated 3D heatmaps
            based on neuron activation.
          </p>
        </li>
      </ul>
      <p className="text-2xl font-semibold font-sans pt-6">Skills</p>
      <div className="md:flex pt-4 text-lg">
        <div className="font-sans font-semibold pr-2">Languages:</div>
        <div className="font-serif pl-2">
          Java, Python, C, OCaml, SQL, Rust, JavaScript (& TypeScript), C++, Go,
          Solidity, Bash, Ruby, MATLAB, TEAL
        </div>
      </div>
      <div className="md:flex pt-4 text-lg">
        <div className="font-sans font-semibold pr-2">Tools/Frameworks:</div>
        <div className="font-serif pl-2">
          Git, Docker, Tensorflow/Keras, PyTorch, Pandas, React.js, Node.js,
          UNIX (& Networking)
        </div>
      </div>
    </div>
  );
}
