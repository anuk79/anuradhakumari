import Head from 'next/head';
import List from "../../components/list";
import getPageDetails from '../../queries/getPageDetails';

const data = {
    Hardware: [
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
    ],
    'For Recording': [
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
    ],
}

export async function getStaticProps() {
    const pageDetails = await getPageDetails();

    return {
        props: {
            ...pageDetails
        },
    };
}

const Uses = () => {
    return (
        <div className="py-4 md:pb-16 md:pt-12 px-2 sm:px-4 max-w-4xl">
            <Head>
                <title>Things I use - Anuradha Kumari</title>
            </Head>
            <h1 className="pt-4 pb-8 text-4xl font-bold">What do I use</h1>
            <p className="text-lg pb-4">
                I use a lot of different things. I use them for different purposes. I see the uses sections 
                on lots of websites, so I thought I would create one for myself too. 
                This list is not exhaustive, and could change depending upon what I exploring at the moment.
            </p>
            <p className="text-lg pb-4">
                P.S. Most of the above text were suggestions by GitHub co-pilot. I think I might have started to like this co-pilot thing haha.
                Might as well try writing blog posts in VSCode to see how it goes.
            </p>
            {Object.keys(data).map((key, index) => (
                <List key={index} heading={key} data={data[key]} />
            ))}
        </div>
    );
};

export default Uses;