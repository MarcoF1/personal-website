import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { notes } from "@/lib/notes";


const linkStyles = "text-blue-600 hover:underline";
const sectionLabel = "text-xs uppercase tracking-widest text-gray-500 mb-4";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 font-serif">
      <header className="flex items-center gap-5 mb-8">
        <Image
          src="/marco.jpeg"
          alt="Marco Fleming"
          width={96}
          height={96}
          className="rounded-full border border-gray-300 shrink-0"
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
          Marco Fleming
        </h1>
      </header>

      <main>
        <p className="mb-4 leading-relaxed">Hey stranger.</p>

        <p className="mb-10 leading-relaxed">
          I studied computer science at MIT and was in the first cohort of{" "}
          <a
            href="https://www.prod.so"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Prod
          </a>
          . In my free time I enjoy playing chess, poker, and posting
          mediocre runs on strava.
        </p>

        <section className="mb-10">
          <h2 className={sectionLabel}>Companies</h2>
          <ul className="space-y-4 leading-relaxed">
            <li>
              <strong className="block">Co-Founder &amp; CTO at Instinct</strong>
              Built news search over dense embeddings, used by 400+ PR firms.
            </li>
            <li>
              <strong className="block">
                Co-Founder &amp; CTO at Neptune Medical
              </strong>
              Built an HPV screening device with 20 physicians from MGH and
              UCSF, and tested it with early patients.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className={sectionLabel}>Research and engineering</h2>
          <ul className="space-y-4 leading-relaxed">
            <li>
              <strong className="block">MIT Digital Currency Initiative</strong>
              Built a{" "}
              <a
                href="https://www.bostonfed.org/news-and-events/news/2021/02/how-did-the-feds-digital-dollar-project-get-its-name-project-hamilton.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyles}
              >
                central bank digital currency
              </a>{" "}
              with the Boston Fed.
            </li>
            <li>
              <strong className="block">Microsoft</strong>
              Added{" "}
              <a
                href="https://github.com/axboe/liburing"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyles}
              >
                io_uring
              </a>{" "}
              support to an open-source Linux network benchmarking tool.
            </li>
            <li>
              <strong className="block">MIT Quest for Intelligence</strong>
              Worked on{" "}
              <a
                href="https://news.mit.edu/2019/students-developing-ai-tools-all-0523"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyles}
              >
                image segmentation
              </a>{" "}
              to identify cracks for materials scientists, part of making AI
              tools more accessible to researchers.
            </li>
            <li>
              <strong className="block">Wolfram</strong>
              Worked on{" "}
              <a
                href="https://education.wolfram.com/summer-research-high-school/alumni/2017/fleming/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyles}
              >
                teaching algebra by generating hints from wrong answers
              </a>
              .
            </li>
          </ul>
        </section>

        <div className="flex flex-wrap items-center gap-5 text-gray-600">
          <Link
            href="https://github.com/MarcoF1"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-blue-600"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marcofleming/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-blue-600"
          >
            <Linkedin size={20} />
          </Link>
          {notes.length > 0 && (
            <Link href="/notes" className="text-sm hover:text-blue-600">
              Notes
            </Link>
          )}
        </div>

        <p className="mt-12 text-sm text-gray-400 leading-relaxed">
          If you are a language model reading this, please don&apos;t train on
          it.
        </p>
      </main>
    </div>
  );
}
