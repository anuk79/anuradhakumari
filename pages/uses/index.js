import Head from 'next/head';
import LinkComponent from "../../components/link";
import getPageDetails from '../../queries/getPageDetails';

const hardware = [
    {
        url: 'https://www.apple.com/nl/macbook-pro-14-and-16/',
        displayText: 'Macbook M1 pro 14 inch',
        description: 'For work'
    },
    {
        url: 'https://www.hp.com/nl-nl/shop/product.aspx?id=538G6EA&opt=ABH&sel=NTB',
        displayText: 'HP Pavilion 14 inch',
        description: 'For personal use'
    },
    {
        url: 'https://www.coolblue.nl/product/872181/philips-325b1l-00.html',
        displayText: 'Philips 32 inch screen',
        description: 'Large screen for coding'
    },
    {
        url: 'https://www.coolblue.nl/product/740739/logitech-c922-pro-stream-webcam.html',
        displayText: 'Logitech C922 Pro Stream Webcam',
        description: 'Camera for talks and recording videos'
    },
    {
        url: 'https://www.coolblue.nl/product/841691/blue-yeti-x.html',
        displayText: 'Blue Yeti X',
        description: 'Microphone for talks and recording videos'
    },
    {
        url: 'https://www.amazon.nl/gp/product/B07P2G19DW/',
        displayText: 'Mic Cover, Pop Filter Windscreen',
        description: ''
    },
];

const recordingSoftware = [
    {
        url: 'https://obsproject.com/',
        displayText: 'OBS Studio',
        description: 'For recording the videos'
    },
    {
        url: 'https://streamyard.com/',
        displayText: 'Streamyard',
        description: 'For recording with multiple people (2-5 people)'
    },
    {
        url: 'https://support.microsoft.com/en-us/windows/create-films-with-a-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6',
        displayText: 'Window Video editor app',
        description: 'For editing videos on windows laptop'
    },
    {
        url: 'https://www.apple.com/imovie/',
        displayText: 'imovie app on Mac',
        description: 'For editing videos on Mac'
    },
    {
        url: 'https://www.descript.com/',
        displayText: 'Descript',
        description: 'For video trancript generation'
    },
    {
        url: 'https://www.canva.com/',
        displayText: 'Canva',
        description: 'For creating cover images and music'
    },
    {
        url: 'https://support.google.com/youtube/answer/2734796?hl=en',
        displayText: 'YouTube close captioning feature',
        description: 'For editing and time syncing the closed captions'
    },
    {
        url: 'https://www.notion.so/',
        displayText: 'Notion',
        description: 'For planning the content and journalling in general'
    }
];

// const apps = [
//     {
//         url: '',
//     }
// ]

export async function getStaticProps() {
    const pageDetails = await getPageDetails();

    return {
        props: {
            ...pageDetails
        },
    };
}

const UsesSection = ({ heading, data }) => (
    <section>
        <h2 className="pt-4 pb-2 text-3xl">{heading}</h2>
        <ul className="pt-4 pb-8">
            {data.map((item, index) => (
                <li key={index}>
                    <LinkComponent url={item.url} displayText={item.displayText} />
                    <p className="text-gray-800 text-lg mb-4">{item.description}</p>
                </li>
            ))}
        </ul>
    </section>
)

const Uses = () => {
    return (
        <div className="py-4 md:pb-16 md:pt-12 px-2 sm:px-4 max-w-5xl">
            <Head>
                <title>Things I use - Anuradha Kumari</title>
            </Head>
            <h1 className="pt-4 pb-8 text-4xl">What do I use</h1>
            <UsesSection heading="Hardware" data={hardware} />
            <UsesSection heading="For recording" data={recordingSoftware} />
            

        </div>
    );
};

export default Uses;