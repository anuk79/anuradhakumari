import Link from "next/link";
import Image from 'next/image';

const Blogcard = ({ posts, label, headerTag, showNote=true }) => {
  const HeadingTag = headerTag || 'h1';
  return (
    <div className="py-2">
      <HeadingTag className="py-4 text-3xl font-bold">{label}</HeadingTag>
      {showNote && <div className="pb-8">
        Note: This is not the complete list of blogs. I am working on migrating my blog posts to the website. You can also {' '}
      <Link href="https://anuradhak.medium.com/"><a>check my blogs on medium</a></Link>.
      </div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => {
          return (
              <div key={post.id} className="w-full shadow-lg mb-8 mx-auto flex">
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
                    <div className="text-base text-gray-600">
                    <div>
                      Tags:
                        {post.topics?.map(topic => <div className="inline-block mx-1 my-2" key={topic}>{topic}</div>)}
                    </div>
                      <p>Published:&nbsp;{post.published}</p>
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

{/* <div>
    {post.topics?.map(topic => <div className="inline-block tag mt-2" key={topic}>{topic}</div>)}
</div> */}