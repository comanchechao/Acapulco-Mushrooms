import Link from 'next/link'

const Navbar = () => {
    return (
      <nav className="navbar z-10 bg-Sky-500 fixed grid grid-rows-1 grid-cols-2 w-full p-6 text-Emerald-500 shadow-2xl">
        <div className="z-10">
          <h3 className="text-4xl">Acapulco Mushrooms</h3>
        </div>
        <div className="z-30 flex justify-around">
          <Link className="" href="/">
            <a className="bg-yellow-500 text-white rounded p-2 z-10 text-3xl">Home</a>
          </Link>
          <Link href="/Mushrooms">
            <a className="bg-yellow-500 text-white rounded p-2 z-10 text-3xl">Mushrooms</a>
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar;