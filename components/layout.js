import Footer from './footer';
import Header from './header';

function Layout ({ children, footer, header }) {
  return (
    <>
      <Header {...header} />
      <main className="flex justify-center px-4 sm:px-10" id="main-content">{children}</main>
      <Footer {...footer} />
    </>
  )
}

export default Layout;
