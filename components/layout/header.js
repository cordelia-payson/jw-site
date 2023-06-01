import Link from 'next/link';
import { useRouter } from 'next/router';
import HeaderLink from './link.js';
import NameLink from './nameLink.js';

function Header() {
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 border-b border-black bg-secondary">

      <div className="navbar-start">

        <ul className="menu menu-horizontal px-1 lg:flex hidden">
          <li><HeaderLink page="/" name="Home" /></li>
          <li><HeaderLink page="/about" name="About" /></li>
          <li><HeaderLink page="/history" name="NS Queer History" /></li>
        </ul>

        <div className="lg:hidden">
          <NameLink />
        </div>

      </div>

      <div className="navbar-center">
        <div className="lg:flex hidden">
          <NameLink />
        </div>
      </div>

      <div className="navbar-end">

        <ul className="menu menu-horizontal px-1 lg:flex hidden">
          <li><HeaderLink page="/research" name="Research" /></li>
          <li><HeaderLink page="/cv" name="CV" /></li>
          <li><HeaderLink page="/contact" name="Contact" /></li>
        </ul>

        <div className="dropdown dropdown-bottom dropdown-end">
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
