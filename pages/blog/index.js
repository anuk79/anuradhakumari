import getPageDetails from '../../queries/getPageDetails';
import { getBlogs } from '../../queries/getBlogs';
import BlogCard from '../../components/blogCard';

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

export default ({ posts }) => {
  return (
    <div className="py-2">
      <BlogCard posts={posts} label={`Blog posts (${posts?.length})`} />
    </div>
  );
};