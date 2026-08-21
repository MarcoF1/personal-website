export type Note = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

// Add entries here. The homepage link and the /notes index appear on their own
// once this is non-empty, so an empty notes section never ships.
export const notes: Note[] = [];
