import getPageDetails from '../../queries/getPageDetails';

export async function getStaticProps() {
    const pageDetails = await getPageDetails();
  
    return {
      props: {
        ...pageDetails
      },
    };
  }

export default ({ about = {} }) => {
  return (
    <div className="py-8">
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