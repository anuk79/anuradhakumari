import Footer from './footer';
import Header from './header';

function Layout ({ children, footer, header }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header {...header} />
      <main className="flex justify-center px-4" id="main-content">{children}</main>
      <Footer {...footer} />
    </div>
  )
}

export default Layout;
