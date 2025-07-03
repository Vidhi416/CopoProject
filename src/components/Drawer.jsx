import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Drawer({ isOpen }) {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 flex flex-col h-full`}>
      <div className="p-4 flex items-center justify-center">
        <Logo />
        {isOpen && <span className="ml-2 text-xl font-bold">COPO</span>}
      </div>
      <nav className="flex-1">
        <ul>
          <li className="hover:bg-gray-700">
            <Link to="/" className="flex items-center p-4 w-full">
              <span>🏠</span>
              {isOpen && <span className="ml-2">Home</span>}
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link to="/course1" className="flex items-center p-4 w-full">
              <span>📚</span>
              {isOpen && <span className="ml-2">Course 1</span>}
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link to="/course2" className="flex items-center p-4 w-full">
              <span>📚</span>
              {isOpen && <span className="ml-2">Course 2</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}