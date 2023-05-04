export default function Header() {
  return (
    <div className="navbar bg-base-100">

      {/* regular nav bar */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>NS Queer History</a></li>
        </ul>
      </div>
      <a className="navbar-center hidden lg:flex  btn btn-ghost normal-case text-xl">Jess Wilton</a>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Research</a></li>
          <li><a>CV</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* small screen/mobile with dropdown */}

      <a className="navbar-center lg:hidden btn btn-ghost normal-case text-xl">Jess Wilton</a>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>NS Queer History</a></li>
            <li><a>Research</a></li>
            <li><a>CV</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
