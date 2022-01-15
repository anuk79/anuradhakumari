import Link from "next/link";

const LinkComponent = ({ url, displayText }) => (
    <Link href={url}>
        <a className="inline-block text-xl" target="_blank" rel="noopener noreferrer">{displayText}</a>
    </Link>
);

export default LinkComponent;
