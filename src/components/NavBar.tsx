import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <aside className="flex flex-col border-x-2 justify-between border-p select-none min-w-[20%] w-[20%] h-full">
      <div className="">
        <div className="p-8 border-b-2 border-p bg-p ">
          <h1 className="text-3xl font-bold">Winit.</h1>
          <h2 className="text-xl italic font-medium">backend developer</h2>
        </div>
        <nav className="p-8 py-4 space-y-2 border-b-2 border-p">
          {["home", "projects", "blog", "contact"].map((e, i) => {
            return (
              <div key={i}>
                <Link
                  className={`font-semibold hover:bg-p px-1 text-lg ${
                    window.location.pathname === (e === "about" ? "/" : `/${e}`)
                      ? "bg-p text-white"
                      : ""
                  }`}
                  to={i === 0 ? "/" : `/${e}`}
                >
                  {e}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
