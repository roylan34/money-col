export type WPPost = {
  content: { rendered: string };
  title: { rendered: string };
  date: Date;
  link: string;
  id: number;
};
