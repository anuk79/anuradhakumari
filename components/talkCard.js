import Link from "next/link";

const TalkCard = ({ talks = [], label }) => {
  return (
    <div>
      <h2 className="text-3xl py-4 font-bold">{ label}</h2>
      {talks?.map(({ id, topic, date, eventDetails: { name, url, resources, video } }) => (
        <div key={id} className="shadow-lg rounded-lg mx-auto mb-8">
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-4">
              <div className="text-gray-900 text-xl mb-2">{topic}</div>
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

export default TalkCard;