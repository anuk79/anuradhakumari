import Link from "next/link";
import Head from 'next/head';
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
    <div className="py-2 min-h-screen max-w-4xl w-full">
      <Head>
        <title>{post.title} - Anuradha&apos;s blog</title>
      </Head>
      <div className="head-section">
        <h1 className="text-3xl md:text-4xl py-4 md:px-8">
          {post.title}
        </h1>
        <div className="mx-auto mb-6">
          <div className="flex items-center">
            <div className="md:px-8">
              <p className="text-gray-600 text-md mb-2">{(new Date(post.published)?.toDateString()?.slice(4))}</p>
              <span className="flex flex-wrap">
                {post.topics?.map(topic => <span key={topic} className="tag">{topic}</span>)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white md:px-8 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: post.mdContent }}></div>
        </div>
      </div>
      
      <div className="mx-auto mb-12">
        <Link href="/blog">
          <a className="buttoned">All blog posts</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;