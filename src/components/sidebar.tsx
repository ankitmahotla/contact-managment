import { useState } from 'react';
import { Menu, X, Home, ChartLine } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: Home, text: 'Contacts', link: '/' },
    { icon: ChartLine, text: 'Charts and Maps', link: '/charts' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 ${isOpen ? "left-52" : "left-4"} z-20 md:hidden`}
      >
        {isOpen ? <X className='text-white mt-2' size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Contacts Management</h2>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.link}
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <item.icon size={20} className="mr-3" />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="md:ml-64 pl-4 pt-14 md:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;