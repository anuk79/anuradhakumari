import Link from "next/link";
import Image from 'next/image';

const Blogcard = ({ posts, label }) => {
  return (
    <div className="py-2">
      <h1 className="py-4 text-3xl font-bold">{label}</h1>
      <div>
        Note: I am working on migrating my blog posts to the website. Till that time, you can {' '}
      <Link href="https://anuradhak.medium.com/"><a className="text-lg">check all my blogs on medium</a></Link>.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
        {posts.map((post) => {
          return (
              <div key={post.id} className="max-w-3xl shadow-lg mb-8 mx-auto flex">
                {/* <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url(${post.coverImage.url})` }}
                  title={post.title}
                /> */}
                <div className="p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
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
    </div>
  );
};

export default Blogcard;