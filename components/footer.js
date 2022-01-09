import Link from 'next/link';
import SvgIcons from './Icons';

function Footer({ navLinks = [] }) {
  return (
    <footer className="px-4 sm:px-10 lg:px-28 py-4 lg:py-8 text-white">
        <div className="text-center">
          {navLinks.length > 0 && (
              <nav aria-label="footer navigation">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.id} className="inline-block mx-4" >
                      <Link
                        href={link.url}
                      >
                        <a className="inline-block no-underline p-0 svg-icon" aria-label={link.label}>
                          {SvgIcons[link.label]}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
        </div>
        <div className="py-6 text-center">
          Made using{' '} 
          <a className="no-underline" href="https://nextjs.org/">NextJS</a>,
          {' '}  <a className="no-underline" href="https://graphcms.com/">GraphCMS</a> {' '} 
          and{' '}  <a className="no-underline" href="https://tailwindcss.com/">Tailwind CSS</a>. 
          Hosted on {' '} <a className="no-underline" href="https://www.netlify.com/">Netlify</a>{', and open-sourced on GitHub'} 
        </div>
        <p className="mt-8 text-base md:mt-0 py-4 text-center">
          &copy; 2022 Anuradha Kumari
        </p>
    </footer>
  )
}

export default Footer;
