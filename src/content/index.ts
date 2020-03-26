export type Post = {
  title: string;
  path: string;
  subPosts?: Post[];
};

export const Posts: Post[] = [
  {
    title: "Əsas səhifə",
    path: "Home.md",
    subPosts: [
      { title: "Haqqında", path: "About.md" },
      { title: "Əlaqə", path: "Contact.md" }
    ]
  }
];
