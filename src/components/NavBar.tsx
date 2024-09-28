import { RocketIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex bg-q px-3 py-1.5 rounded-sm items-center justify-between w-full">
      <RocketIcon size={24} />
      <nav className="text-lg">
        <ul className="flex space-x-4">
          {["home", "blog"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "home" ? "/" : `/${item}`}
                className="hover:underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
