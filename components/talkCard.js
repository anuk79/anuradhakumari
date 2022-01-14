import Link from "next/link";

const TalkCard = ({ talks = [], label }) => {
  return (
    <div>
      <h2 className="text-3xl py-4 font-bold">{label}</h2>
      <div className="grid grid-cols-1">
        {talks?.map(({ id, topic, date, eventDetails, topics }) => (
          <div key={id} className="shadow-lg mb-8 w-full">
            <div className="p-4 flex flex-col leading-normal h-full">
              <div>
                <Link href={eventDetails.url}>
                  <a className="inline-block mb-4 text-2xl">{topic}</a>
                </Link>
                <p className="text-gray-900 text-xl mb-2">{eventDetails.name}</p>
                <time dateTime={date} className="text-base text-gray-700">
                  {(new Date(date)?.toDateString()?.slice(4))}
                </time>
                {topics && <div className="flex flex-wrap">
                  {topics.map(topic => <div className="tag" key={topic}>{topic}</div>)}
                </div>
                }
              </div>
              {/* {eventDetails?.resources && <div><Link href={eventDetails.resources}>
                <a className="buttoned mt-2 inline-block">Resources</a>
              </Link></div>} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalkCard;
