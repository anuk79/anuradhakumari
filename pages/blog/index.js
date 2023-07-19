import BlogCard from '../../components/blogCard';
import Head from 'next/head';
import { getAllPosts } from '../../utils/api';

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <div className="pb-8 px-1 sm:px-4 max-w-4xl blog-list">
      <Head>
        <title>Blogs - Anuradha Kumari</title>
      </Head>
      <BlogCard posts={posts} label={`Blog posts (${posts?.length})`} />
    </div>
  );
};

export default Blog;