import LinkComponent from "./link";

const List = ({ heading, data, headerTag = 'h2' }) => {
  const HeadingTag = headerTag;
  
  return (
    <section>
        <HeadingTag className="pt-4 pb-2 text-2xl">{heading}</HeadingTag>
        <ul className="pt-4 pb-8">
            {data.map((item, index) => (
                <li key={index}>
                    <LinkComponent url={item.url} displayText={item.displayText} />
                    <p className="text-gray-800 text-lg mb-4">{item.description}</p>
                </li>
            ))}
        </ul>
    </section>
);
            }

export default List;