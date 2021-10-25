import Link from 'next/link';
import Head from 'next/head';

function Header({ navLinks = [] }) {
  return (
    <header className="px-4 sm:px-10 lg:px-28 py-6 sticky top-0 z-10 text-base sm:text-lg">
       <a href="#main-content" className="skip-to-main-link">
          Skip to main content
        </a>
        <nav className="flex items-center justify-center md:justify-between flex-wrap space-x-4">
          <Link href="/">
            <a className="no-underline">
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
          <meta name="description" content="My name is Anuradha Kumari. I am a frontend developer, making the web accessible, one website at a time." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="og:title" content="Anuradha Kumari - a11y advocate, GDE for web, MDE" />
          <meta name="og:description" content="Frontend developer, making the web accessible - one website at a time." />
          <meta name="og:type" content="website" />
          <meta name="og:image" content="https://www.anuradhakumari.com/og.png" />
        </Head>
        
    </header>
  )
}

export default Header;
