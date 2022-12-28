import { getBlogs } from '../../queries/getBlogs';
import BlogCard from '../../components/blogCard';
import Head from 'next/head';

export async function getStaticProps() {
  const posts = await getBlogs('TIL');

  return {
    props: {
      posts: Object.values(posts),
    },
  };
}

const TIL = ({ posts }) => {
  return (
    <div className="pb-2 px-2 sm:px-4 max-w-4xl">
      <Head>
        <title>Tips - Anuradha Kumari</title>
      </Head>
      <BlogCard posts={posts} label={`Coding tips and snippets`} slugPrefix="tips" />
    </div>
  );
};

export default TIL;