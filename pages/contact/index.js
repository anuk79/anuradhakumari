import { GraphQLClient } from "graphql-request";
import Head from 'next/head';
import Link from "next/link";
import getPageDetails from '../../queries/getPageDetails';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps() {
    const pageDetails = await getPageDetails();
  
    return {
      props: {
        ...pageDetails
      },
    };
  }

const Contact = () => {
  return (
    <div className="py-2 md:py-16 px-2 sm:px-4 max-w-3xl">
      <Head>
        <title>Anuradha Kumari - Contact</title>
      </Head>
      <h1 className="pt-4 pb-8 text-3xl">Contact Me</h1>
      <div className="text-lg">
        Feel free to {' '}
        <a href="mailto:contact@anuradhakumari.com">drop me an email</a>
        , to discuss about web development, accessibility or if you would like to invite me to speak at your events.

      </div>
      <div className="py-4 text-lg">
        You can also connect with me on twitter or linkedin via links in the footer.
      </div>
    </div>
  );
};

export default Contact;