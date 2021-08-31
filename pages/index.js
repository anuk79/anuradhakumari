import Link from 'next/link';
import Image from 'next/image';
import TalkCard from '../components/talkCard';
import BlogCard from '../components/blogCard';
import getPageDetails from '../queries/getPageDetails';
import { getFutureTalkDetails } from '../queries/getTalkDetails';
import { getRecentBlogs } from '../queries/getBlogs';
import markdownToHtml from '../utils/markdownToHtml';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const pageDetails = await getPageDetails();
  const futureTalks = await getFutureTalkDetails();
  const blogPosts = await getRecentBlogs();
  const mdDetails = await markdownToHtml(pageDetails.about.details || '')

  return {
    props: {
      ...pageDetails,
      ...futureTalks,
      posts: Object.values(blogPosts).filter(blog => blog.category !== 'TIL'),
      mdDetails
    },
  };
}

export default function Home({ about, futureTalks, posts, mdDetails }) {
  return (
    <section className="flex flex-wrap items-center px-4 sm:px-10 py-4 lg:py-16 max-w-7xl">
      <div className="flex w-full justify-center bio">
        <div className="max-w-3xl">
          <div className="flex items-center justify-center w-full">
            <Image width="70" height="70" src={about.person.photo.url} alt="" className="rounded-full"  />
            <h1 className="px-4 text-4xl font-bold hidden sm:block">{about.title}</h1> 
          </div>
          <p className="text-center pt-8 text-lg w-3xl font-semibold">
            {about.subtitle}
          </p>
          <div className="w-2xl">
            <div className={styles['details-md']} dangerouslySetInnerHTML={{ __html:mdDetails }}></div>
          </div>
        </div>
      </div>
      <div className="py-12">
       <TalkCard talks={futureTalks} label="Upcoming speaking engagements" />
       <Link href="/talks"><a className="text-lg">All talks</a></Link>
      </div>
      <div>
        <BlogCard posts={posts} label="Recent Blog posts" headerTag="h2" showNote={false} />
        <Link href="/blog"><a className="text-lg">All blog posts</a></Link>
      </div>
    </section>
  );
}
