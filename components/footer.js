import Link from 'next/link';

function Footer({ navLinks = [] }) {
  return (
    <footer className="px-4 sm:px-10 lg:px-28 py-4 lg:py-8 text-white">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navLinks.length > 0 && (
                <nav aria-label="footer navigation">
                  <ul className="mt-4 space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.url}
                        >
                          <a className="text-base">
                            {link.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
          </div>
          <p className="mt-8 text-base md:mt-0 md:order-1">
            &copy; 2021 Anuradha Kumari
          </p>
        </div>
        <div className="py-4">
          Made using{' '} 
          <a href="https://nextjs.org/">NextJS</a>,
          {' '}  <a href="https://graphcms.com/">GraphCMS</a> {' '} 
          and{' '}  <a href="https://tailwindcss.com/">Tailwind CSS</a>. Hosted on {' '} <a href="https://www.netlify.com/">Netlify</a> {'.'} 
        </div>
    </footer>
  )
}

export default Footer;
