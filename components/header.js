import Link from 'next/link';
import Head from 'next/head';

function Header({ navLinks = [] }) {
  return (
    <header className="px-4 sm:px-10 lg:px-28 py-6 sticky top-0 z-10 text-base sm:text-lg">
        <nav className="flex items-center justify-center md:justify-between flex-wrap space-x-4">
          <Link href="/">
            <a>
              Anuradha Kumari
            </a>
          </Link>
          {navLinks.length > 0 && (
            <ul>
              {navLinks.map((page, index) => (
                <li
                  key={page.id || index}
                  className="inline-block"
                >
                  <Link href={`/${page.url}`}>
                    <a className="my-2 mx-3 inline-block font-medium capitalize">
                      {page.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <Head>
          <title>Anuradha Kumari</title>
          <meta name="description" content="Website of Anuradha Kumari" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
    </header>
  )
}

export default Header;
