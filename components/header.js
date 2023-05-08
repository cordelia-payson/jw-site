import Link from 'next/link';

function Header() {
  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">

        <ul className="menu menu-horizontal px-1 lg:flex hidden">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/history">NS Queer History</Link></li>
        </ul>

        <Link href="/" className="lg:hidden text-xl font-bold border-none">Jess Wilton</Link>
      </div>

      <div className="navbar-center">
        <Link href="/" className="normal-case text-xl lg:flex hidden font-bold border-none">Jess Wilton</Link>
      </div>

      <div className="navbar-end">

        <ul className="menu menu-horizontal px-1 lg:flex hidden">
          <li><Link href="/research">Research</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

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
