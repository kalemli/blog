import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

interface Props {
  source?: string;
}

export default function Home({ source }: Props) {
  const [post, setPost] = useState("");
  import(`../content/${source}`).then(file => {
    fetch(file.default)
      .then(res => res.text())
      .then(res => setPost(res));
  });
  return (
    <div>
      <ReactMarkdown
        source={post}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  );
}
