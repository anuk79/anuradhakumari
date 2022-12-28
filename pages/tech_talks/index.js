import Head from 'next/head';
import Link from "next/link";
import TalkCard from '../../components/talkCard';
import data from '../../data/talks';

const Talks = ({ }) => {
  const pastTalks = data.filter(talk => new Date(talk.date) <= new Date());
  const futureTalks = data.filter(talk => new Date(talk.date) > new Date());

  return (
    <div className="pb-8 px-1 sm:px-4 max-w-4xl">
      <Head>
        <title>Talks - Anuradha Kumari</title>
      </Head>
      <section>
        <h1 className="text-4xl py-4 md:pt-12 font-bold">Tech talks</h1>
        <p className="py-4 text-lg">
          I am passionate about exploring new technologies and sharing the knowledge and experience with the community.
          I love the technical discussions and they motivate me to learn and explore further.
        </p>
      </section>
      <section>
        <h2 className="text-3xl pt-4 pb-2 font-bold">Currently accepting speaking invitations</h2>
        <div className="py-4 text-lg">
          If you’d like to invite me to speak at your event,
          please <a href="mailto:contact@anuradhakumari.com">send me an email</a>.
        </div>
        <div className="pb-8 text-lg">
          Feedbacks help in improvements. If you would like to give feedback for any of my
          talks, <Link href="https://forms.gle/DWntc1phDUPrAZBm7">
            <a>please fill the feedback form</a>
          </Link>
        </div>
      </section>
      <section>

      </section>
      <TalkCard talks={futureTalks} label={`Upcoming events (${futureTalks.length})`} />
      <TalkCard talks={pastTalks} label={`Past events (${pastTalks.length})`} />
    </div>
  );
};

export default Talks;