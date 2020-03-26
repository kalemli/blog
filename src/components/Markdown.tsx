import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core";

interface MarkdownProps {
  className: string;
  children: React.ReactNode;
}

const styles = (theme: Theme) => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5"
      }
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h6" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" }
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true }
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link }
  }
};

export default function Markdown(props: MarkdownProps) {
  return <ReactMarkdown options={options} {...props} />;
}
