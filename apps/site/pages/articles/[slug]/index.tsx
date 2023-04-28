import { readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import {
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@nx-next-tailwind/markdown';
import { Youtube } from '@nx-next-tailwind/shared/mdx-elements';
import { MDXRemote } from 'next-mdx-remote';

export interface ArticleProps extends ParsedUrlQuery {
  slug?: string;
}

const mdxElements = {
  Youtube
};

const POSTS_PATH = join(process.cwd(), '_articles');

export function Article({frontMatter, html}) {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{ frontMatter.title }</h1>
        <div>by { frontMatter.author.name }</div>
      </article>
      <hr />
      <MDXRemote {...html} components={mdxElements} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({params}: {params: ArticleProps}) => {
  const articleMarkdownContent = getParsedFileContentBySlug(params.slug, POSTS_PATH);
  const renderHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderHTML,
    }
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug }}));

  return {
    paths,
    fallback: false,
  }
}

export default Article;
