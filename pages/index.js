import Link from 'next/link';
import Image from 'next/image';
import TalkCard from '../components/talkCard';
import BlogCard from '../components/blogCard';
import VideoCard from '../components/videoCard';
import getPageDetails from '../queries/getPageDetails';
import { getFutureTalkDetails } from '../queries/getTalkDetails';
import { getRecentBlogs } from '../queries/getBlogs';
import { getVideoDetails } from '../queries/getVideoDetails';
import markdownToHtml from '../utils/markdownToHtml';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const pageDetails = await getPageDetails();
  const futureTalks = await getFutureTalkDetails();
  const blogPosts = await getRecentBlogs();
  const videos = await getVideoDetails();
  const mdDetails = await markdownToHtml(pageDetails.about.details || '');

  return {
    props: {
      ...pageDetails,
      ...futureTalks,
      posts: Object.values(blogPosts).filter(blog => blog.category !== 'TIL'),
      mdDetails,
      ...videos
    },
  };
}

export default function Home({ about, futureTalks, posts, mdDetails, videos }) {
  return (
    <section className="flex flex-wrap items-center px-4 lg:px-8 py-12 sm:py-20 lg:pb-12 max-w-4xl">
      <div className="flex">
        <div className="w-full sm:w-3/4 sm:pr-12">
          <div className="w-full block sm:hidden flex justify-around pb-8">
            <Image width="150" height="150" src={about.person.photo.url} alt="" className="rounded-full" />
          </div>
          <div>
            <h1 className="pr-4 text-3xl md:text-4xl font-bold text-center sm:text-left">{about.title}</h1>
            <p className="pt-8 text-lg font-semibold">
              {about.subtitle}
            </p>
            <div className={styles['details-md']} dangerouslySetInnerHTML={{ __html: mdDetails }}></div>
          </div>
        </div>
        <div className="sm:w-1/4 hidden sm:block">
          <Image width="200" height="200" src={about.person.photo.url} alt="" className="rounded-full" />
        </div>
      </div>
      <div className="py-4 md:py-8 w-full">
        <VideoCard data={videos} label="I create YouTube videos" />
        <Link href="https://www.youtube.com/channel/UCzv8q9-tSIQuTDzgB1BgXMQ"><a className="text-lg buttoned">All videos</a></Link>
      </div>
      <div className="py-4 md:py-8 w-full">
        <TalkCard talks={futureTalks} label="I speak at conferences" />
        <Link href="/talks"><a className="text-lg buttoned">All talks</a></Link>
      </div>
      <div className="py-4 md:py-8 w-full">
        <BlogCard posts={posts} label="I write articles" headerTag="h2" showNote={false} />
        <Link href="/blog"><a className="text-lg buttoned mb-8 lg:mb-0 inline-block">All blog posts</a></Link>
      </div>
      <div className="py-4 md:py-8 w-full">
        <h2 className="py-4 text-3xl font-bold">I read</h2>
        <p className="pb-4 text-lg">
          Below contains list of books that I have read since 2021 and articles that I enjoyed reading and learned from since start of 2022.
                    </p>
        <Link href="/reading List"><a className="text-lg mb-8 pl-0 lg:mb-0 inline-block">Check my reading list</a></Link>
      </div>
    </section>
  );
}
