import Link from 'next/link';

function Header() {
  return (
    <div className="navbar bg-base-100">

      {/* regular nav bar */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/history">NS Queer History</Link></li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Jess Wilton</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/research">Research</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* small screen/mobile with dropdown */}
      <Link href="/" className="navbar-center lg:hidden btn btn-ghost normal-case text-xl">Jess Wilton</Link>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/history">NS Queer History</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/cv">CV</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
