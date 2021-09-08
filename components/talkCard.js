import Link from "next/link";

const TalkCard = ({ talks = [], label }) => {
  return (
    <div>
      <h2 className="text-3xl py-4 font-bold">{ label}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {talks?.map(({ id, topic, date, eventDetails, topics }) => (
          <div key={id} className="shadow-lg mx-auto mb-8 w-full">
            <div className="p-4 flex flex-col leading-normal h-full">
              <div>
                <Link href={eventDetails.url}>
                  <a className="inline-block mb-4 text-2xl">{eventDetails.name}</a>
                </Link>
                <div className="text-gray-900 text-xl mb-2">{topic}</div>
                <div className="text-base text-gray-600">
                <p>{(new Date(date)?.toDateString()?.slice(4))}</p>
                <div className="flex flex-wrap">
                    {topics?.map(topic => <div className="tag" key={topic}>{topic}</div>)}
                </div>
              </div>
              </div>
              {eventDetails?.resources && <div><Link href={eventDetails.resources}>
                <a className="buttoned mt-2 inline-block">Resources</a>
              </Link></div>}
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default TalkCard;
