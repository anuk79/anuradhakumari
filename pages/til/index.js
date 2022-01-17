import getPageDetails from '../../queries/getPageDetails';
import { getBlogs } from '../../queries/getBlogs';
import BlogCard from '../../components/blogCard';
import Head from 'next/head';

export async function getStaticProps() {
  const pageDetails = await getPageDetails();
  const posts = await getBlogs('TIL');

  return {
    props: {
      ...pageDetails,
      posts: Object.values(posts),
    },
  };
}

const TIL = ({ posts }) => {
  return (
    <div className="pb-2 px-2 sm:px-4 max-w-4xl">
      <Head>
        <title>TIL - Anuradha Kumari</title>
      </Head>
      <BlogCard posts={posts} label={`Today I learned (${posts?.length})`} slugPrefix="til" />
    </div>
  );
};

export default TIL;