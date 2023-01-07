import Link from "next/link";

const Blogcard = ({ posts, label, headerTag, showNote = false, slugPrefix = 'blog' }) => {
  const HeadingTag = headerTag || 'h1';
  return (
    <div className="py-2">
      <HeadingTag className="pt-8 md:pt-12 pb-8 text-3xl font-bold">{label}</HeadingTag>
      {showNote && <div className="pb-8">
        Note: This is work in progress list. I am working on migrating all my blog posts to the website. You can also {' '}
        <Link href="https://anuradhak.medium.com/"><a>read my blogs on medium</a></Link>.
      </div>}
      <div className="grid grid-cols-1">
        {posts.map((post) => {
          return (
            <div key={post.id} className="w-full shadow-lg mb-8 mx-auto flex">
              <div className="p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="font-bold text-2xl">
                    <Link as={`/${slugPrefix}/${post.slug}`} href={`/${slugPrefix}/[slug]`}>
                      <a>{post.title}</a>
                    </Link>
                  </div>
                  {/* {!!post.excerpt && <p className="text-gray-800 text-lg mt-4">{post.excerpt}</p>} */}
                </div>
                <time dateTime={post.published} className="text-base text-gray-600">
                  {(new Date(post.published)?.toDateString()?.slice(4))}
                </time>

                {post.topics && <div className="flex flex-wrap">
                  {post.topics.map(topic => <div className="my-2 tag" key={topic}>{topic}</div>)}
                </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogcard;