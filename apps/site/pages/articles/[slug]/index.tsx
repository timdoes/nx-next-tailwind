import { readdirSync } from "fs";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import {
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@nx-next-tailwind/markdown';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from "next/dynamic";

export interface ArticleProps extends ParsedUrlQuery {
  slug?: string;
}

const mdxElements = {
  Youtube: dynamic(async () => {
    return await import('@nx-next-tailwind/shared/mdx-elements/youtube/youtube');
  }),
};

const POSTS_PATH = join(process.cwd(), process.env.ARTICLES_PATH);

export function Article({frontMatter, html}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps = async ({params}: {params: ArticleProps}) => {
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
