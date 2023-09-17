import Image from 'next/image';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const about = {
  "title": "Hi, I am Anuradha",
  "subtitle": "A frontend developer, working towards making the web accessible, one website at a time.",
};

const Intro = () => {
  return (
    <div className="flex">
      <div className="w-full sm:w-3/4 sm:pr-12">
        <div className="w-full sm:hidden flex justify-around pb-4">
          <Image width="150" height="150" src="/android-chrome-512x512.png" alt=""
          />
        </div>
        <div>
          <h1 className="pr-4 text-3xl md:text-4xl font-bold text-center sm:text-left">{about.title}</h1>
          <p className="pt-8 text-lg font-semibold">
            {about.subtitle}
          </p>
          <p>
            I am a senior frontend developer, with experience of more than 9.5 years. I have extensive experience in HTML, CSS, JavaScript, React, and Next JS with a focus on web accessibility, user experience, performance, and test-driven development.
            <br />
            I am also a {' '} <a href="https://developers.google.com/community/experts" target="_blank" rel="noopener noreferrer">Google Developers Expert</a> for Web technologies,
            <a href='https://cloudinary.com/mde' target="_blank" rel="noopener noreferrer">Cloudinary Media Developer Expert</a>, {' '}
            <a href="https://mvp.microsoft.com/en-us/PublicProfile/5004678?fullName=Anuradha%20Kumari" target="_blank" rel="noopener noreferrer">Microsoft Most Valuable Professional</a> for Developer Technologies, {' '}
            <a href="https://www.womentechmakers.com/ambassadors/profiles/62878f3f8807513825e4475f/anuradha_kumari" target="_blank" rel="noopener noreferrer">Women Techmakers Ambassador</a> {' '}
            and an Accessibility Advocate.
          </p>
        </div>
      </div>
      <div className="sm:w-1/4 hidden sm:block">
        <Image width="200" height="200" src="/android-chrome-512x512.png" alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
