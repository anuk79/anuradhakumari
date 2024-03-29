import Head from 'next/head';

const About = ({ about = {} }) => {
  return (
    <div className="pb-8 px-2 sm:px-4 max-w-4xl">
      <Head>
        <title>About - Anuradha Kumari</title>
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