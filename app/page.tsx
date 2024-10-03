import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

// TODO: write a blog post, link to resume when ready, favicon and text at the tab
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-serif">
      <header className="mb-6">
        <div className="flex items-center space-x-6 mb-4">
          <Image
            src="/marco.jpeg"
            alt="Marco Fleming"
            width={120}
            height={120}
            className="rounded-full border-2 border-gray-300"
          />
          <div>
            <h1 className="text-3xl font-bold mb-1">Marco Fleming</h1>
            <p className="text-xl text-gray-600">
              Founder | Software Developer
            </p>
          </div>
        </div>
        <nav>
          <ul className="flex flex-wrap space-x-4">
            <li>
              <Link href="#about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-blue-600 hover:underline">
                Projects
              </Link>
            </li>

            <li>
              <Link href="#blog" className="text-blue-600 hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1emBwWWpQdxsCUZiW_EDJP8pW0mCeXe73F7VVF9vANOw/edit?usp=sharing"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="space-y-8">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I&apos;ve worked on{" "}
            <a
              href="https://news.mit.edu/2019/students-developing-ai-tools-all-0523"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              image segmentation
            </a>{" "}
            at the MIT Media Lab,{" "}
            <a
              href="https://www.bostonfed.org/news-and-events/news/2021/02/how-did-the-feds-digital-dollar-project-get-its-name-project-hamilton.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Central Bank Digital Currencies
            </a>{" "}
            at the Boston Fed, and scaled an{" "}
            <a
              href="https://joininstinct.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AI startup
            </a>{" "}
            to over 100K in revenue. I&apos;ve also worked internships at
            Microsoft&apos;s Linux Subsystem for Windows group, Microsoft Teams,
            and Allstates Machine Learning department. I&apos;m currently
            interested in LLM interpretability and safety.
          </p>
          <p className="mb-4">
            I received my B.S. in Computer Science from MIT in 2022 where I
            joined the first{" "}
            <a
              href="https://www.prod.so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Prod
            </a>{" "}
            cohort and became obsessed with developing products that make an
            impact.
          </p>
          {/* <p className="mb-4 text-gray-600">
            Skills: Python (~ 2000 hours), Typescript (~ 2500 hours), C (~ 400
            hours),
          </p> */}
          <p className="text-gray-600 italic">
            Interests: chess, poker, posting mediocre runs on strava, tennis
          </p>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="space-y-2">
            <li>
              <strong>Gamelan Studio (May 2022):</strong> A fun web app to test
              how different notes in a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Gamelan"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Gamelan
              </a>{" "}
              ensemble sound together developed for the students in my music of
              Indonesia class. [
              <Link
                href="https://www.loom.com/share/50c22efe1e8446ffb5f261471838859a"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Video
              </Link>
              ]
            </li>
            <li>
              <strong>Posture Buddy (May 2021):</strong> We trained a neural
              network that took readings from RFID tags on people&apos;s backs
              in conjunction with a computer vision model (
              <a
                href="https://github.com/CMU-Perceptual-Computing-Lab/openpose"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                OpenPose
              </a>
              ) to detect their postures while sitting at a computer. [
              <Link
                href="https://docs.google.com/presentation/d/1EImu33T1u4yCFaQ8QdPaGFkd7jsqUE3EuaIpNoOws_E/edit?usp=sharing"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Presentation
              </Link>
              ]
            </li>
            <li>
              <strong>Sigma Nu URL shortener (January 2021):</strong> I made a
              URL shortener for my fraternity to share internal links in a
              memorable way [
              <Link
                href="https://github.com/MarcoF1/sn-shortener"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Github
              </Link>
              ]
            </li>
            <li>
              <strong>Sigma Nu Website (April 2020):</strong> I re-designed my
              college fraternities website [
              <Link
                href="https://sigmanu.mit.edu"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Website
              </Link>
              ]
            </li>

            <li>
              <strong>Banjo Hero (May 2019):</strong> A game where you play your
              favorite song on a Banjo [
              <Link
                href="https://drive.google.com/file/d/1sfXF5o0JBXLXrEOPql91aksTYqynAoMq/view?usp=sharing"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Video
              </Link>
              ]
            </li>
          </ul>
        </section>

        <section id="blog">
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          Coming soon
          {/* <div className="space-y-4">
            <article>
              <h3 className="text-xl font-semibold mb-2">
                <Link href="#" className="text-blue-600 hover:underline">
                  Example Post 1
                </Link>
              </h3>
              <p className="text-gray-600 mb-2">
                Published on October 02, 2024
              </p>
              <p>In this post, we talk about blah </p>
            </article>
          </div>
          <div className="mt-4">
            <Link href="#" className="text-blue-600 hover:underline">
              View all blog posts →
            </Link>
          </div> */}
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:marco1fleming@gmail.com"
              target="_blank"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://github.com/MarcoF1"
              target="_blank"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/marcofleming/"
              target="_blank"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
