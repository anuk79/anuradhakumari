import getPageDetails from '../queries/getPageDetails';

export async function getStaticProps() {
  const pageDetails = await getPageDetails();

  return {
    props: {
      ...pageDetails
    },
  };
}

export default function Home({ about }) {
  return (
    <section className="flex flex-wrap items-center justify-center max-w-2xl py-16 sm:py-28">
      <div className="flex items-center justify-center">
        <figure>
          <img width="70" height="70" 
            src={about.person.photo.url} alt="" className="rounded-full" 
          lazy="loaded" />
        </figure>
        <h1 className="px-4 text-3xl">{about.title}</h1> 
      </div>
      <p className="text-center py-8 text-lg">
        {about.subtitle}
      </p>
      <p className="text-center py-2 text-lg">
        {about.details}
      </p>
    </section>
  );
}
