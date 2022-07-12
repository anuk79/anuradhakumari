import Link from "next/link";
import Image from 'next/image';

const ImageCard = ({ data, label, headerTag }) => {
    const HeadingTag = headerTag || 'h2';
    return (
        <div className="py-2">
            <HeadingTag className="py-4 text-3xl font-bold">{label}</HeadingTag>
            <div className="grid grid-cols-1">
                {data?.map((detail) => {
                    return (
                        <div key={detail.id} className="w-full mx-auto flex">
                            <div className="py-4 flex flex-col justify-between leading-normal">
                                <Link href={detail?.link?.url || '/'}>
                                    <a>{detail?.link?.displayText}</a>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageCard;