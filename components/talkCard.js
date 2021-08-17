import Link from "next/link";

const TalkCard = ({ talks = [], label }) => {
  return (
    <div>
      <h2 className="text-3xl py-4 font-bold">{ label}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {talks?.map(({ id, topic, date, eventDetails }) => (
          <div key={id} className="shadow-lg mx-auto mb-8 w-full">
            <div className="p-4 flex flex-col justify-between leading-normal h-full">
              <div className="mb-4">
                <div className="text-gray-900 text-xl mb-2">{topic}</div>
                {
                  eventDetails?.url && <div>
                    Event name: {' '}
                    <Link href={eventDetails.url}>
                      <a>{eventDetails.name}</a>
                    </Link>
                  </div>
                }
                {eventDetails?.resources && <Link href={eventDetails.resources}>
                  <a>Slides / resources</a>
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
    </div>
  );
};

export default TalkCard;