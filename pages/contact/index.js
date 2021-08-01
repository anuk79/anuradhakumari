import { GraphQLClient } from "graphql-request";
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
    <div className="py-8 sm:py-28 max-w-3xl">
      <h1 className="pt-4 pb-8 text-3xl">Contact</h1>
      <div className="text-lg">
        Feel free to {' '}
        <a href="mailto:contact@anuradhakumari.com">drop me an email</a>
        , to discuss about tech, accessibility or if you have any speaking/writing opportunities for me.

      </div>
      <div className="py-4 text-lg">
        You can also connect with me on twitter or linkedin via links in the footer.
      </div>
    </div>
  );
};

export default Contact;