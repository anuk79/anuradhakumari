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
    <div className="py-2">
      <Head>
        <title>Anuradha Kumari - Blogs</title>
      </Head>
      <BlogCard posts={posts} label={`Blog posts (${posts?.length})`} />
    </div>
  );
};

export default Blog;