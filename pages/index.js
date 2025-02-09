import Link from 'next/link';
import Intro from '../components/intro';
import TalkCard from '../components/talkCard';
import BlogCard from '../components/blogCard';
import VideoCard from '../components/videoCard';
import { getRecentBlogs } from '../queries/getBlogs';
import talks from '../data/talks';
import videos from '../data/videos';
import { getLatestPosts } from '../utils/api';

export async function getStaticProps() {
  const posts = await getLatestPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const futureTalks = talks.filter(talk => new Date(talk.date) > new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section className="flex flex-wrap items-center px-4 lg:px-8 py-12 sm:py-20 lg:pb-12 max-w-4xl">
      <Intro />

      <div className="py-4 md:py-8 w-full">
        <TalkCard talks={futureTalks} label="I speak at conferences" />
        <Link href="/talks"><a className="text-lg buttoned">All talks</a></Link>
      </div>
      <div className="py-4 w-full">
        <BlogCard posts={posts} label="I write articles" headerTag="h2" showNote={false} />
        <Link href="/blog"><a className="text-lg buttoned">All blog posts</a></Link>
      </div>
      <div className="py-4 w-full">
        <VideoCard data={videos} label="I create YouTube videos" />
        <Link href="https://www.youtube.com/c/AnuradhaK"><a className="text-lg buttoned">All videos</a></Link>
      </div>
      <div className="py-4 w-full">
        <h2 className="py-4 text-3xl font-bold">I read</h2>
        <p className="pb-4 text-lg">
          List of books that I have read since 2021 and articles that I enjoyed reading and learned from since start of 2022.
        </p>
        <Link href="/reading-list"><a className="text-lg mb-8 pl-0 lg:mb-0">My reading list</a></Link>
      </div>
    </section>
  );
}
