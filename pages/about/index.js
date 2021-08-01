import Head from 'next/head';
import getPageDetails from '../../queries/getPageDetails';

export async function getStaticProps() {
    const pageDetails = await getPageDetails();
  
    return {
      props: {
        ...pageDetails
      },
    };
  }

const About = ({ about = {} }) => {
  return (
    <div className="py-8">
      <Head>
        <title>Anuradha Kumari - About</title>
      </Head>
      <h1>About me</h1>
      <div>
        Hii, my name is {about.title}.
      </div>
      <div>
        {about.subtitle}
      </div>
      <div>
          {about.details}
      </div>
    </div>
  );
};

export default About;