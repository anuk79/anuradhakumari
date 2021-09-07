import Head from 'next/head';
import Link from "next/link";
import TalkCard from '../../components/talkCard';
import getPageDetails from '../../queries/getPageDetails';
import { getTalkDetails } from '../../queries/getTalkDetails';

export async function getStaticProps() {
    const pageDetails = await getPageDetails();
    const talks = await getTalkDetails();
    const futureTalks = [], pastTalks = [];
    talks.talks.forEach(talk => {
      if (talk.talkStatus === 'past') {
        pastTalks.push(talk);
      } else {
        futureTalks.push(talk);
      }
    });
  
    return {
      props: {
        ...pageDetails,
        futureTalks,
        pastTalks
      },
    };
  }

const Talks = ({ pastTalks = [], futureTalks = [] }) => {
  return (
    <div className="pb-8 px-1 sm:px-4 max-w-4xl">
      <Head>
        <title>Anuradha Kumari - Tech talks</title>
      </Head>
      <div className="head-section">
        <h1 className="text-3xl pt-4 font-bold">Tech talks</h1>
        <div className="py-4">
          I am passionate about exploring new technologies and sharing the knowledge and experience with the community. 
          I love the technical discussions and they motivate me to learn and explore further.
        </div>
      </div>
      <div>
        <h2 className="text-3xl pt-4 font-bold">Currently accepting speaking invitations</h2>
        <div className="py-4">
          If you’d like to invite me to speak at your event, please {' '} 
          <a href="mailto:contact@anuradhakumari.com">send me an email</a>.
          <br />
          <br />
          Feedbacks help in improvements. If you would like to give feedback for any of my talks, {' '}
          <Link href="https://forms.gle/DWntc1phDUPrAZBm7">
            <a>please fill the feedback form</a>
          </Link>
           .
        </div>
      </div>
      <TalkCard talks={futureTalks} label={`Upcoming sessions (${futureTalks.length})`} />
      <TalkCard talks={pastTalks} label={`Past sessions (${pastTalks.length})`} />
    </div>
  );
};

export default Talks;