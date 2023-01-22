import Link from "next/link";
import Head from 'next/head';
import markdownToHtml from '../../utils/markdownToHtml';
import styles from '../../styles/Home.module.css';
import { getAllPosts, getPostBySlug } from '../../utils/api';

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'published',
    'topics',
    'excerpt',
    'category'
  ]);
  const content = await markdownToHtml(post.content || '');
  console.log({ content });
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
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
          <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }}></div>
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