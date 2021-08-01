import Link from 'next/link';
import Head from 'next/head';

function Header({ navLinks = [] }) {
  return (
    <header className="px-4  sm:px-10 py-6 sticky top-0 z-4">
        <nav className="flex items-center justify-between flex-wrap space-x-4">
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
                  className="block my-4 md:inline-block md:my-0"
                >
                  <Link href={`/${page.url}`}>
                    <a className="py-2 px-3 font-medium capitalize">
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
          <meta name="description" content="Personal website of Anuradha Kumari" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
    </header>
  )
}

export default Header;
