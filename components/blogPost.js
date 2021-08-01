import Link from "next/link";
import Image from 'next/image';

const BlogPost = ({ post }) => {
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

export default BlogPost;