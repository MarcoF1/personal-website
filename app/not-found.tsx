import Link from "next/link";

export const metadata = {
  title: "Not found | Marco Fleming",
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 font-serif">
      <h1 className="text-2xl font-bold mb-4">Not found</h1>
      <p className="mb-4 leading-relaxed">
        There is nothing at this URL. This site is small, so the whole of it is:
      </p>
      <ul className="space-y-2 mb-6">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            /
          </Link>{" "}
          has everything: companies, research, and links.
        </li>
        <li>
          <a href="/llms.txt" className="text-blue-600 hover:underline">
            /llms.txt
          </a>{" "}
          is the same thing, written for agents.
        </li>
        <li>
          <a href="/sitemap.xml" className="text-blue-600 hover:underline">
            /sitemap.xml
          </a>
        </li>
      </ul>
    </div>
  );
}
