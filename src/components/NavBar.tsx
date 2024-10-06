import { RocketIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex bg-p px-3 py-1.5 rounded-sm items-center justify-between w-full font-bold">
      <Link to="/" className="text-xl text-white font-bold">
        <RocketIcon size={24} />
      </Link>
      <div className="flex space-x-2">
        {["projects", "blogs", "socials"].map((link) => (
          <Link
            key={link}
            to={link}
            className="text-white font-semibold hover:underline"
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
