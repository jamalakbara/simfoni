import Logo from "../Logo/Logo";
import Navlinks from "../Navlinks/Navlinks";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between
                    fixed top-0 left-0 w-full h-28 px-12 z-20 bg-white">
      <Logo />

      <Navlinks />
    </nav>
  )
}

export default Navbar