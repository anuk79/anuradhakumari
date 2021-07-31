import Link from "next/link";
import Image from 'next/image';
import getPageDetails from '../../queries/getPageDetails';
import { getBlogs } from '../../queries/getBlogs';

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
      <h1 className="py-8 text-3xl">Blog posts ({posts?.length})</h1>
      {posts.map((post, index) => {
        return (
            <div className="max-w-3xl shadow-lg mb-16 rounded-lg mx-auto flex">
              {/* <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${post.coverImage.url})` }}
                title={post.title}
              /> */}
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    <Link key={post.id || index} as={`/blog/${post.slug}`} href="/blog/[slug]">
                      <a>{post.title}</a>
                    </Link>
                  </div>
                  <p className="text-gray-700 text-base">{post.excerpt}</p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-600">{post.published}</p>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};