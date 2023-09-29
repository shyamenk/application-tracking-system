import { Home, FileText, Menu } from "lucide-react";

const SideBar = () => {
  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white ">
      <nav className="flex flex-1 flex-col items-center space-y-6">
        <a href="#">
          <Menu size={28} />
        </a>
        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Home size={24} />
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <FileText size={24} />
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
