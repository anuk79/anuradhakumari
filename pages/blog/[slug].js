import Link from "next/link";
import Head from 'next/head';
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
    <div className="py-2 min-h-screen max-w-4xl">
      <Head>
        <title>Anuradha&apos;s blog - {post.title}</title>
      </Head>
      <h1 className="text-3xl py-4 px-8">
        {post.title}
      </h1>
      <div className="mx-auto mb-6">
        <div className="flex items-center">
          <div className="px-8">
            <p className="text-gray-600 text-md">{`Published on: ${post.published}`}</p>
            <span className="text-md inline-block" style={{color: '#E14369'}}>
              Tags: {post.topics?.map(topic => <span key={topic} className="inline-block p-2">{topic}</span>)}
            </span>
          </div>
        </div>
        <div className="bg-white px-8 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: post.mdContent }}></div>
          </div>
          
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