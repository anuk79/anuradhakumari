import Head from 'next/head';
import List from "../../components/list";
import getPageDetails from '../../queries/getPageDetails';

const books = {
    2022: [
        {
            url: 'https://www.goodreads.com/book/show/23692271-sapiens',
            displayText: 'Sapiens: A Brief History of Humankind',
        },
        {
            url: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
            displayText: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        },
        {
            url: 'https://www.goodreads.com/book/show/58153391-developer-relations',
            displayText: 'Developer Relations: How to Build and Grow a Successful Developer Program',
        },
        {
            url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
            displayText: 'The Pragmatic Programmer'
        }
    ],
    2021: [
        {
            url: 'https://www.goodreads.com/book/show/31423133-make-your-bed',
            displayText: 'Make Your Bed: Little Things That Can Change Your Life...And Maybe the World',
        },
        {
            url: 'https://www.goodreads.com/book/show/40534545-ikigai',
            displayText: 'Ikigai: The Japanese Secret to a Long and Happy Life',
        },
        {
            url: 'https://www.goodreads.com/book/show/40672036-digital-minimalism',
            displayText: 'Digital Minimalism: Choosing a Focused Life in a Noisy World',
        },
        {
            url: 'https://www.goodreads.com/book/show/18144590-the-alchemist',
            displayText: 'The Alchemist',
        },
        {
            url: 'https://www.goodreads.com/book/show/18290401-show-your-work',
            displayText: 'Show Your Work!: 10 Ways to Share Your Creativity and Get Discovered',
        },
        {
            url: 'https://www.goodreads.com/book/show/759945.The_Magic_of_Thinking_Big',
            displayText: 'The Magic of Thinking Big',
        },
        {
            url: 'https://www.goodreads.com/book/show/3735293-clean-code',
            displayText: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        },
        {
            url: 'https://www.goodreads.com/book/show/17166225-the-miracle-morning',
            displayText: 'The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life: Before 8AM',
        },
        {
            url: 'https://www.goodreads.com/book/show/2333956.The_Annotated_Turing',
            displayText: `The Annotated Turing: A Guided Tour Through Alan Turing's Historic Paper on Computability and the Turing Machine`,
        },
        {
            url: 'https://www.goodreads.com/book/show/168484.Feminism_Is_for_Everybody',
            displayText: 'Feminism Is for Everybody: Passionate Politics',
        },
        {
            url: 'https://www.goodreads.com/book/show/68984.The_Power_of_Your_Subconscious_Mind',
            displayText: 'The Power of Your Subconscious Mind',
        },
        {
            url: 'https://www.goodreads.com/book/show/35683024-unf-ck-yourself',
            displayText: 'Unf*ck Yourself: Get Out of Your Head and into Your Life',
        },
        {
            url: 'https://www.goodreads.com/book/show/40591677-keep-going',
            displayText: 'Keep Going: 10 Ways to Stay Creative in Good Times and Bad',
        },
        {
            url: 'https://www.goodreads.com/book/show/35496817-atomic-design',
            displayText: 'Atomic Design',
        },
        {
            url: 'https://www.goodreads.com/book/show/28675571-the-gifts-of-imperfection',
            displayText: `The Gifts of Imperfection: Let Go of Who You Think You're Supposed to Be and Embrace Who You Are`,
        },
        {
            url: 'https://www.goodreads.com/book/show/51603736-how-to-improve-your-writing',
            displayText: 'How to Improve Your Writing',
        },
        {
            url: 'https://www.goodreads.com/book/show/29499354-public-speaking',
            displayText: 'PUBLIC SPEAKING: Why Your Presentation Sucks ',
        },
        {
            url: 'https://www.goodreads.com/book/show/40591267-girl-stop-apologizing',
            displayText: 'Girl, Stop Apologizing',
        },
        {
            url: 'https://www.goodreads.com/book/show/36149297-improve-your-people-skills',
            displayText: 'Improve Your People Skills',
        },
        {
            url: 'https://www.goodreads.com/book/show/23001125-everybody-writes',
            displayText: 'Everybody Writes',
        },
        {
            url: 'https://www.goodreads.com/book/show/13623848-the-song-of-achilles',
            displayText: 'The Song of Achilles',
        },
    ],
};

const articles = {
    'January 2022': [
        {
            url: 'https://medium.com/designing-atlassian/create-accessible-designs-using-the-figma-a11y-annotation-kit-35371f00dac5',
            displayText: 'Create accessible designs using the Figma A11y Annotation kit',
        },
        {
            url: 'https://alistapart.com/article/paint-the-picture-not-the-frame/',
            displayText: 'Paint the Picture, Not the Frame: How Browsers Provide Everything Users Need',
        },
        {
            url: 'https://12daysofweb.dev/2021/preference-queries/',
            displayText: 'Preference Queries',
        },
        // {
        //     url: '',
        //     displayText: '',
        // }
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

const ReadingList = () => {
    return (
        <div className="py-4 md:pb-16 md:pt-12 px-2 sm:px-4 max-w-4xl">
            <Head>
                <title>Reading List - Anuradha Kumari</title>
            </Head>
            <h1 className="pt-4 pb-8 text-4xl font-bold">My reading list</h1>
            <p className="text-lg pb-4">
                I love reading, sometimes I read a lot. The below lists contain
                the <a href="#books">books</a> and <a href="#articles">articles</a> I read.
            </p>
            <section id="books">
                <h2 className="pt-4 pb-2 text-3xl font-bold">Books</h2>
                <p className="text-lg pb-4">
                    I loved reading from when I was a kid. I remember reading comics, and science magazines (Pratiyogita Darpan)
                    in one sitting. My parents used to scold me for reading too much (ah the irony of it),
                    so much that I used to read sometimes inside my blanket with a torch (this explains
                    why I have to wear spectacles now, doesnt it?).
                </p>
                <p className="text-lg pb-4">
                    I started tracking all my reading since 2021, at a place
                    called <a href="https://www.goodreads.com/review/list/105616872-anuradha-kumari?shelf=read&sort=date_read">Goodreads</a>. This really works as I feel accountable.
                    I read 21 books in 2021, and my reading goal for 2021 is atleast 25 books.
                </p>
                <p className="text-lg pb-4">
                    While Goodreads is a great place to track books, I wanted to have something on my own website, hence this list.
                    I always take notes when I am reading, so that i can revisit them later.
                    So in below list, I will add few notes about the books too. It is an in-progress list, and will forever be so.
                </p>
                {
                    Object.keys(books)
                        .sort((d1, d2) => d1 > d2 ? -1 : d1 < d2 ? 1 : 0)
                        .map((key, index) => (
                            <List key={index} heading={key} headerTag="h3" data={books[key]} />
                        ))
                }
            </section>
            <section id="articles">
                <h2 className="pt-4 pb-2 text-3xl font-bold">Articles</h2>
                <p className="text-lg">
                    Below contains list of articles that I enjoyed reading and maintaining this list will
                    help me to revisit these later as well as could be a source of reference for anyone who might find them useful.
                    If you came here and found something interesting, I would be happy to know about it.
                </p>
                {Object.keys(articles).map((key, index) => (
                    <List key={index} heading={key} headerTag="h3" data={articles[key]} />
                ))}
            </section>
        </div>
    );
};

export default ReadingList;