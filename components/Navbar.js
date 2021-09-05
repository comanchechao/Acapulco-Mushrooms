import Link from 'next/link'

const Navbar = () => {
    return (
      <nav className="navbar z-10 bg-Sky-500 fixed grid grid-rows-1 grid-cols-2 w-full p-6 text-white shadow-2xl">
        <div className="z-10">
          <h3 className="text-4xl">Acapulco Mushrooms</h3>
        </div>
        <div className="z-30 flex justify-around">
          <Link href="/">
            <a className="z-10 text-3xl">Home</a>
          </Link>
          <Link href="/Mushrooms">
            <a className="z-10 text-3xl">Mushrooms</a>
          </Link>
          <Link href="/other">
            <a className="z-10 text-3xl">Otehr</a>
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar;