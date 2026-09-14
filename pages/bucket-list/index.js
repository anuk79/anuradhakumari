import Head from 'next/head';
import List from "../../components/list";

const data = {
    Hardware: [
        {
            displayText: 'Speak on a stage',
        },
        {
            displayText: 'Walk below the falling autumn leaves',
        },
        {
            displayText: 'Foreign trip with family',
        },
        {
            displayText: 'Canal boat trip',
        },
        {
            displayText: 'Go up a windmill',
        },
        {
            displayText: 'Candlelight concert',
        },
        {
            displayText: 'Witness Northern Lights dancing on my head',
        },
        {
            displayText: 'Play in lots of snow',
        },
        {
            displayText: 'See the Alps',
        },
        {
            displayText: 'Twirl in a tulip field',
        },
        {
            displayText: 'Walk in a hyacinth field and inhale the wonderfull scent',
        },
        {
            displayText: 'Visit Stonehenge',
        },
        {
            displayText: 'See a black swan for real',
        },
        {
            displayText: 'Visit Rome, see Colosseum, walk around the city',
        },
        {
            displayText: 'Visit Greece and walk in those historical places',
        },
        {
            displayText: 'Speak in a conference in front of my parents',
        },
        {
            displayText: 'Visit cat cafe',
        },
        {
            displayText: 'Adopt a black cat',
        },
        {
            displayText: 'Try a dance workshop',
        },
        {
            displayText: 'Goto a painting workshop',
        },
        {
            displayText: 'Goto Opera in Vienna',
        },
        {
            displayText: 'See a ballet dance',
        },
        {
            displayText: 'Watch a live orchestra concert (LOTR)',
        },
        {
            displayText: 'Visit Valkenburg caves',
        },
        {
            displayText: 'Goto a christmas circus event',
        },
        {
            displayText: 'Visit Iceland',
        },
        {
            displayText: 'See glaciers',
        },
        {
            displayText: 'See a Volcano',
        },
        {
            displayText: 'See a whale in the sea',
        },
        {
            displayText: 'See Southern lights',
        },
        {
            displayText: 'Visit New Zealand',
        },
        {
            displayText: 'See sloths',
        },
        {
            displayText: 'Alpaca petting',
        },
        {
            displayText: 'See kangaroo in Australia',
        },
        {
            displayText: 'See Koalas in Australia',
        },
        {
            displayText: 'See a starry night with a clear sky',
        },
        {
            displayText: 'Visit Kerala',
        },
        {
            displayText: 'Visit Seven Sisters of India',
        },
        {
            displayText: 'Visit Nepal',
        },
        {
            displayText: 'Visit Auschwitz',
        },
        {
            displayText: '',
        },
    ],
}

const Uses = () => {
    return (
        <div className="py-4 md:pb-16 md:pt-12 px-2 sm:px-4 max-w-4xl">
            <Head>
                <title>Bucket list - Anuradha Kumari</title>
            </Head>
            <h1 className="pt-4 pb-8 text-4xl font-bold">On my bucket list</h1>
            <p className="text-lg pb-4">
                I always have a list of things that I would like to experience, and so I thought to maintain it somewhere. Why not on my website then? 
                I will decide later how to make this better, but for now I would like to out in raw data, with a list where some things are already done, and some will get added later.
            </p>
            <ul className="pt-4 pb-8">
                {data.map((item, index) => (
                    <li key={index}>
                        <p className="text-gray-800 text-lg mb-4">{item.displayText}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Uses;