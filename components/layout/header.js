import Link from 'next/link';
import HeaderLink from './link.js';

function Header() {
  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">

        <ul className="menu menu-horizontal px-1 lg:flex hidden">
          <li><HeaderLink page="/" name="Home" /></li>
          <li><HeaderLink page="/about" name="About" /></li>
          <li><HeaderLink page="/history" name="NS Queer History" /></li>
        </ul>

        <Link href="/" className="lg:hidden text-xl font-bold border-none">Jess Wilton</Link>
      </div>

      <div className="navbar-center">
        <Link href="/" className="normal-case text-xl lg:flex hidden border-none link-hover">Jess Wilton</Link>
      </div>

      <div className="navbar-end">

        <ul className="menu menu-horizontal px-1 lg:flex hidden">
          <li><HeaderLink page="/research" name="Research" /></li>
          <li><HeaderLink page="/cv" name="CV" /></li>
          <li><HeaderLink page="/contact" name="Contact" /></li>
        </ul>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><HeaderLink page="/" name="Home" /></li>
            <li><HeaderLink page="/about" name="About" /></li>
            <li><HeaderLink page="/history" name="NS Queer History" /></li>
            <li><HeaderLink page="/research" name="Research" /></li>
            <li><HeaderLink page="/cv" name="CV" /></li>
            <li><HeaderLink page="/contact" name="Contact" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
