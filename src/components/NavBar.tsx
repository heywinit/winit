import { Link } from "react-router-dom";

export default function NavBar() {
  function getRandomLyric() {
    const lyrics = ["random lyric"];

    return lyrics[Math.floor(Math.random() * lyrics.length)];
  }

  return (
    <aside className="flex flex-col border-x-2 justify-between border-p select-none w-1/2">
      <div>
        <div className="p-8 border-b-2 border-p bg-p">
          <h1 className="text-3xl font-bold">Winit.</h1>
          <h2 className="text-xl italic font-medium">backend developer</h2>
        </div>
        <nav className="p-8 py-4 space-y-2 border-b-2 border-p">
          {["home", "projects", "blog", "contact"].map((e) => {
            return (
              <div>
                <Link
                  className={`font-semibold hover:bg-p px-1 text-lg ${
                    window.location.pathname === (e === "home" ? "/" : `/${e}`)
                      ? "bg-p text-white"
                      : ""
                  }`}
                  to={e === "home" ? "/" : `/${e}`}
                >
                  {e}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="border-t-2 border-p p-2 py-1">
        <h3 className="text-lg font-bold">{getRandomLyric()}</h3>
      </div>
    </aside>
  );
}
