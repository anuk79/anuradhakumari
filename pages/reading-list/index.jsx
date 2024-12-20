import Head from 'next/head';
import List from "../../components/list";

const books = {
    2022: [
        {
            url: 'https://www.goodreads.com/book/show/23692271-sapiens',
            displayText: 'Sapiens: A Brief History of Humankind',
        },
        {
            url: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
            displayText: 'Atomic Habits',
        },
        {
            url: 'https://www.goodreads.com/book/show/58153391-developer-relations',
            displayText: 'Developer Relations: How to Build and Grow a Successful Developer Program',
        },
        {
            url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
            displayText: 'The Pragmatic Programmer'
        },
        {
            url: 'https://www.goodreads.com/book/show/36312164-accessibility-for-everyone',
            displayText: 'Accessibility for everyone'
        },
        {
            url: 'https://www.goodreads.com/book/show/8696865-how-to-win-friends-influence-people',
            displayText: 'How to Win Friends & Influence People'
        },
        {
            url: 'https://www.goodreads.com/book/show/26156469-never-split-the-difference',
            displayText: 'Never Split the Difference'
        },
        {
            url: 'https://www.goodreads.com/book/show/34964986-how-to-be-yourself',
            displayText: 'How to Be Yourself'
        },
        {
            url: 'https://www.goodreads.com/book/show/40109367-dare-to-lead',
            displayText: 'Dare To Lead'
        },
        {
            url: 'https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big',
            displayText: 'How to Fail at Almost Everything and Still Win Big'
        },
        {
            url: 'https://www.goodreads.com/book/show/25813937-glory-over-everything',
            displayText: 'Glory Over Everything: Beyond The Kitchen House'
        },
        {
            url: 'https://www.goodreads.com/book/show/59007077-seo-for-everyone',
            displayText: 'SEO For Everyone',
        },
        {
            url: 'https://www.goodreads.com/book/show/22211296-how-to-deal-with-difficult-people',
            displayText: 'How to Deal with Difficult People',
        },
        {
            url: 'https://www.goodreads.com/book/show/31138556-homo-deus',
            displayText: 'Homo Deus: A History of Tomorrow',
        },
        {
            url: 'https://www.goodreads.com/book/show/84699.Never_Eat_Alone',
            displayText: 'Never Eat Alone'
        },
        // {
        //     url: '',
        //     displayText: ''
        // },
    ],
    2021: [
        {
            url: 'https://www.goodreads.com/book/show/31423133-make-your-bed',
            displayText: 'Make Your Bed: Little Things That Can Change Your Life',
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
            displayText: 'Show Your Work!',
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
            displayText: 'The Miracle Morning',
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
            displayText: `The Gifts of Imperfection`,
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
    '2022': [
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
        {
            url: 'https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/',
            displayText: 'I’ve had enough! When access friction becomes an access barrier'
        },
        {
            url: 'https://alistapart.com/article/breaking-out-of-the-box/',
            displayText: 'Breaking Out of the Box'
        },
        {
            url: 'https://developers.google.com/search/docs/beginner/seo-starter-guide',
            displayText: 'Search Engine Optimization (SEO) Starter Guide'
        },
        {
            url: 'https://www.gov.uk/guidance/accessibility-monitoring-how-we-test',
            displayText: 'Accessibility monitoring: How we test'
        },
        {
            url: 'https://hbr.org/2020/12/why-you-need-to-stop-using-these-words-and-phrases',
            displayText: 'Why You Need to Stop Using These Words and Phrases'
        },
        {
            url: 'https://dev.to/abbeyperini/weve-been-here-since-the-beginning-2nnp',
            displayText: "We've Been Here Since the Beginning"
        },
        {
            url: 'https://dev.to/debs_obrien/being-an-imposter-4bl7',
            displayText: 'Being an Imposter'
        },
        {
            url: 'https://hbr.org/2022/01/youre-not-an-imposter-youre-actually-pretty-amazing',
            displayText: "You’re Not an Imposter. You’re Actually Pretty Amazing.",
        },
        {
            url: 'https://incl.ca/basic-accessibility-testing/',
            displayText: 'Basic Accessibility testing - by Nicolas Steenhout'
        },
        {
            url: 'https://www.matuzo.at/blog/2022/focus-outline/',
            displayText: 'Outline is your friend',
        },
    ],
    '2024': [
        {
            url: 'https://www.sarasoueidan.com/blog/testing-environment-setup/',
            displayText: 'Setting up a screen reader testing environment on your computer',
        },
        // {
        //     url: '',
        //     displayText: '',
        // },
    ]
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
                            <List key={index} heading={key} headerTag="h3" data={books[key]} ariaLabelForHeading="Books I read in " />
                        ))
                }
            </section>
            <section id="articles">
                <h2 className="pt-4 pb-2 text-3xl font-bold">Articles</h2>
                <p className="text-lg">
                    Below contains list of articles by authors around the world that I enjoyed reading and maintaining this list will
                    help me to revisit these later as well as could be a source of reference for anyone who might find them useful.
                    If you came here and found something interesting, I would be happy to know about it.
                </p>
                {Object.keys(articles).map((key, index) => (
                    <List key={index} heading={key} headerTag="h3" data={articles[key]} ariaLabelForHeading="Articles I read in " />
                ))}
            </section>
        </div>
    );
};

export default ReadingList;
