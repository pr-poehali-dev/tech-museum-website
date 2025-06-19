import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Icon name="Building" className="h-8 w-8 text-blue-700" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-montserrat">
                Музей Технического Колледжа
              </h1>
              <p className="text-sm text-gray-600">Цифровая коллекция</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Главная
            </Link>
            <Link
              to="/history"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              История
            </Link>
            <Link
              to="/directors"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Руководители
            </Link>
            <Link
              to="/heroes"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Память без границ. Герои СВО
            </Link>
            <Link
              to="/additional"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Дополнительно
            </Link>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
