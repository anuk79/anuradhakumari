import Link from "next/link";
import Image from 'next/image';
import { getBlogs, getBlogPost } from '../../queries/getBlogs';
import getPageDetails from '../../queries/getPageDetails';
import markdownToHtml from '../../utils/markdownToHtml';
import styles from '../../styles/Home.module.css';

export async function getStaticProps({ params }) {
    const pageDetails = await getPageDetails();
    const { post } = await getBlogPost(params.slug);
    const mdContent = await markdownToHtml(post.content || '')
    return {
        props: {
          ...pageDetails,
          post: {...post, mdContent},
        },
    };
}

export async function getStaticPaths() {
    const posts = await getBlogs();
    return {
        paths: Object.values(posts).map(({ slug }) => ({
        params: { slug },
        })),
        fallback: false,
    };
}

const Post = ({ post }) => {
  return (
    <div className="py-2 min-h-screen max-w-3xl">
      
      <h1 className="text-gray-900 font-bold text-3xl py-4">
        {post.title}
      </h1>
      <div className="mx-auto mb-8">
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-600">{post.published}</p>
          </div>
        </div>
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: post.mdContent }}></div>
          </div>
          
        </div>
      </div>
      <div className="mx-auto">
        <Link href="/blog">
          <a>Back to all blog posts</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;