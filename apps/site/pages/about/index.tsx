import { GetStaticProps } from "next";

export interface AboutProps {
  title: string;
}

export function About({title}: AboutProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      title: 'About',
    }
  };
};

export default About;
