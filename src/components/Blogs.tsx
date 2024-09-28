import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="w-2/3 border-4 border-q">
      <div className="flex items-center justify-between space-x-2 bg-q p-1 rounded-sm select-none">
        <h2 className="text-xl font-semibold">blogs</h2>
        <Link
          to={`/blogs`}
          className="text-md bg-t/50 px-2 hover:bg-p/30 hover:cursor"
        >
          all
        </Link>
      </div>
      <div className="px-1 py-1 overflow-y-scroll h-32">
        {[
          {
            name: "back at it",
            date: "2024-09-28",
            link: "/blogs/backatit",
          },
          {
            name: "im getting old",
            date: "2024-09-23",
            link: "/blogs/imgettingold",
          },
          {
            name: "im getting old",
            date: "2024-09-23",
            link: "/blogs/imgettingold",
          },
          {
            name: "im getting old",
            date: "2024-09-23",
            link: "/blogs/imgettingold",
          },
          {
            name: "im getting old",
            date: "2024-09-23",
            link: "/blogs/imgettingold",
          },
        ].map((work, index) => (
          <Link
            to={`/blogs/${work.name}`}
            key={index}
            className="space-y-1 flex items-center select-none cursor-pointer justify-between rounded-sm hover:bg-t px-1 py-0.5"
          >
            <h3 className="text-md font-semibold">{work.name}</h3>
            <p className="text-sm text-p/70">{work.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
