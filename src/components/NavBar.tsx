import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <aside className="flex flex-col border-x-2 justify-between border-p border-2 select-none lg:min-w-[20%] lg:w-[20%] lg:h-full">
      <div className="flex pr-4 lg:pr-0 lg:block justify-between">
        <div className="flex flex-col justify-center content-center lg:p-8 px-2 py-2 lg:border-b-2 lg:border-p bg-p ">
          <h1 className="lg:text-3xl font-bold">Winit.</h1>
          <h2 className="text-xl italic font-medium hidden lg:block">
            backend developer
          </h2>
        </div>
        <nav className="flex lg:block item-center lg:px-8 lg:py-4 py-2 lg:space-y-2 lg:border-b-2 lg:border-p">
          {["home", "projects", "blog", "contact"].map((e, i) => {
            return (
              <div key={i}>
                <Link
                  className={`font-semibold hover:bg-p px-1 text-lg ${
                    window.location.pathname === (e === "home" ? "/" : `/${e}`)
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
