import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <a href="#new" className="text-neutral-400 hover:text-white">Nuevo</a>
              <a href="#featured" className="text-neutral-400 hover:text-white">Destacados</a>
              <a href="#categories" className="text-neutral-400 hover:text-white">Categorías</a>
              <a href="#offers" className="text-neutral-400 hover:text-white">Ofertas</a>
            </div>
          </div>

          <div className="text-2xl font-bold text-white">MiTienda</div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-400 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-neutral-400 hover:text-white">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-neutral-400 hover:text-white relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-white text-black rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-900">
          <a href="#new" className="block px-3 py-2 text-neutral-400 hover:text-white">Nuevo</a>
          <a href="#featured" className="block px-3 py-2 text-neutral-400 hover:text-white">Destacados</a>
          <a href="#categories" className="block px-3 py-2 text-neutral-400 hover:text-white">Categorías</a>
          <a href="#offers" className="block px-3 py-2 text-neutral-400 hover:text-white">Ofertas</a>
        </div>
      </div>
    </nav>
  );
}