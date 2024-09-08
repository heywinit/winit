import {
  AppWindowIcon,
  HomeIcon,
  Sun,
  Moon,
  UserCircle,
  Mail,
} from "lucide-react";
import { useTheme } from "../theme-provider";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const page = window.location.pathname.slice(1);
  const pages = ["", "about", "projects", "contact"];

  return (
    <div
      className={`flex w-full select-none rounded-lg px-2 py-1.5 justify-between ${
        theme === "dark" ? "bg-p" : "bg-white"
      }`}
    >
      <div className="flex select-none space-x-2">
        {pages.map((p) => (
          <button
            className={`p-3 ${
              p === page
                ? theme === "dark"
                  ? "bg-white/[.1]"
                  : "bg-black/[.1]"
                : ""
            } rounded-full cursor-pointer flex justify-center items-center transition-colors duration-300 ease-in-out`}
            key={p}
            onClick={() => {
              navigate(`/${p}`);
            }}
          >
            {p === "" ? (
              <HomeIcon className="h-4 w-4" />
            ) : p === "about" ? (
              <UserCircle className="h-4 w-4" />
            ) : p === "contact" ? (
              <Mail className="h-4 w-4" />
            ) : (
              <AppWindowIcon className="h-4 w-4" />
            )}
          </button>
        ))}
      </div>
      <div className="flex select-none space-x-2">
        <button
          className={`p-3 rounded-full cursor-pointer flex justify-center items-center transition-colors duration-300 ease-in-out`}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
