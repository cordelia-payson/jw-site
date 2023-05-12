import Header from './header.js';
import Footer from './footer.js';

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
