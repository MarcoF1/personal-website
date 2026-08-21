import Link from "next/link";
import { notes } from "@/lib/notes";

export const metadata = {
  title: "Notes | Marco Fleming",
};

export default function NotesPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 font-serif">
      <Link href="/" className="text-blue-600 hover:underline">
        Marco Fleming
      </Link>

      <h1 className="text-2xl font-bold mt-8 mb-8">Notes</h1>

      {notes.length === 0 ? (
        <p className="text-gray-600">Nothing here yet.</p>
      ) : (
        <ul className="space-y-5 leading-relaxed">
          {notes.map((note) => (
            <li key={note.slug}>
              <span className="font-mono text-xs text-gray-400 mr-2">
                {note.date}
              </span>
              <strong>{note.title}</strong>
              <span className="block text-gray-600">{note.summary}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
