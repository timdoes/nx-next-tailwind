import { readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export function Article({slug}: ArticleProps) {
  return (
    <div>
      <h1>Visiting, {slug}</h1>
    </div>
  );
}

const POSTS_PATH = join(process.cwd(), '_articles');

export const getStaticProps: GetStaticProps<ArticleProps> = async ({params}: {params: ArticleProps}) => {
  return {
    props: {
      slug: params.slug,
    }
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async (context) => {
  const paths = readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug }}));

  return {
    paths,
    fallback: false,
  }
}

export default Article;
