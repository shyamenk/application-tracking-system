import { Home, ChevronRight } from "lucide-react";

const TabMenu = () => {
  return (
    <nav className="flex mt-10  h-20 bg-gray-200 px-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <Home className="mr-4 h-4 w-4" />
            Program Details
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
            >
              Application Form
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              Workflow
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default TabMenu;
