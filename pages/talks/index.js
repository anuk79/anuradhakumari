import Link from "next/link";
import Image from 'next/image';
import getPageDetails from '../../queries/getPageDetails';
import getTalkDetails from '../../queries/getTalkDetails';

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

export default ({ pastTalks = [], futureTalks = [] }) => {
  return (
    <div className="py-8 max-w-3xl ">
      <h1 className="text-3xl pt-4">Tech talks</h1>
      <div className="py-4">
        I am passionate about exploring new technologies and sharing the knowledge and experience with the community. 
        I love the technical discussions and they motivate me to learn and explore further.
      </div>
      <div>
        <h2 className="text-2xl pt-4">Currently accepting speaking invitations</h2>
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
      <h2 className="text-2xl py-4">Upcoming sessions ({futureTalks.length})</h2>
      {futureTalks?.map(({ topic, date, eventDetails: { name, url, resources, video } }) => (
        <div className="shadow-lg rounded-lg mx-auto mb-8">
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-4">
              <div className="text-gray-900 font-bold text-xl mb-2">{topic}</div>
              <div>
                Event name: {' '}<Link href={url}>
                  <a>{name}</a>
                </Link>
              </div>
              {resources && <Link href={resources}>
                <a>Resources</a>
              </Link>}
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-600">{date}</p>
              </div>
            </div>
          </div>
        </div>
      ) )}
      <h2 className="text-2xl py-4">Past sessions ({pastTalks.length})</h2>
      {pastTalks?.map(({ topic, date, eventDetails: { name, url, resources, video } }) => (
        <div className="shadow-lg rounded-lg mx-auto mb-8">
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-4">
              <div className="text-gray-900 font-bold text-xl mb-2">{topic}</div>
              <div>
                Event name: {' '}<Link href={url}>
                  <a>{name}</a>
                </Link>
              </div>
              {resources && <Link href={resources}>
                <a>Resources</a>
              </Link>}
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-600">{date}</p>
              </div>
            </div>
          </div>
        </div>
      ) )}
    </div>
  );
};