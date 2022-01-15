import getPageDetails from '../../queries/getPageDetails';
import { getBlogs } from '../../queries/getBlogs';
import BlogCard from '../../components/blogCard';
import Head from 'next/head';

export async function getStaticProps() {
    const pageDetails = await getPageDetails();
    const posts = await getBlogs();
  
    return {
      props: {
        ...pageDetails,
        posts: Object.values(posts),
      },
    };
  }

const Blog = ({ posts }) => {
  return (
    <div className="pb-2 px-2 sm:px-4 max-w-4xl">
      <Head>
        <title>Blogs - Anuradha Kumari</title>
      </Head>
      <BlogCard posts={posts} label={`Blog posts (${posts?.length})`} />
    </div>
  );
};

export default Blog;