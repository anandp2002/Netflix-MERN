import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Menu, Search, X } from 'lucide-react';
import { useAuthStore } from '../store/authUser';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
        <div className="flex items-center  gap-10 z-50">
          <Link to="/">
            <img
              src="/netflix-logo.png"
              alt="Netflix Logo"
              className="w-32 sm:w-40"
            />
          </Link>

          {/* desktop navbar items */}
          <div className="hidden sm:flex gap-2 items-center">
            <Link to="/" className="hover:bg-gray-900 rounded-md py-1 px-2">
              Movies
            </Link>
            <Link to="/" className="hover:bg-gray-900 rounded-md py-1 px-2">
              Tv Shows
            </Link>
            <Link
              to="/history"
              className="hover:bg-gray-900 rounded-md py-1 px-2"
            >
              Search History
            </Link>
          </div>
        </div>

        <div className="flex gap-2 items-center z-50">
          <Link to={'/search'}>
            <Search className="size-6 cursor-pointer mr-2" />
          </Link>
          <img
            src={user.image}
            alt="Avatar"
            className="h-8 rounded cursor-pointer mr-2"
          />
          <LogOut className="size-6 cursor-pointer" onClick={logout} />
          <div className="sm:hidden">
            {isMobileMenuOpen ? (
              <X className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
            ) : (
              <Menu
                className="size-6 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>
      </header>
      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div className="px-3 w-full py-2 sm:hidden relative z-50 bg-black">
          <Link
            to={'/'}
            className="block hover:bg-gray-900 rounded-md p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={'/'}
            className="block hover:bg-gray-900 rounded-md p-2"
            onClick={toggleMobileMenu}
          >
            Tv Shows
          </Link>
          <Link
            to={'/history'}
            className="block hover:bg-gray-900 rounded-md p-2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </>
  );
};
export default Navbar;
