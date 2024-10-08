import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Blogs() {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const { blogTitle } = useParams();

  const blogs = [
    {
      title: "im getting old",
      content: "i turn 19 god damn. 6 gray hair we're reaching the unc status.",
      date: "2024-09-23",
      hidden: false,
    },
  ];

  useEffect(() => {
    if (blogTitle) {
      const decodedTitle = decodeURIComponent(blogTitle).replace(/-/g, " ");
      const matchingBlog = blogs.find(
        (blog) => blog.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      if (matchingBlog) {
        setSelected(matchingBlog.title);
      }
    }
  }, [blogTitle]);

  return (
    <div className="flex h-screen w-screen justify-center px-32">
      <NavBar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow border-r-2 border-r-p p-8 h-full">
          <h1 className="text-3xl font-bold">/blogs</h1>
          <hr className="my-4 bg-p" />
          <div className="space-y-2 h-full">
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="search"
                  className="bg-black border-2 text-white placeholder-white border-p p-2 py-0.5 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => setSearch("")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-grow flex-col h-full">
              <div className="flex h-full overflow-y-auto">
                <div className="flex flex-col w-1/5 h-full border-x-2 border-t-2 border-p">
                  {blogs.map((e, i) => {
                    if (e.hidden) return null;
                    if (!e.title.toLowerCase().includes(search.toLowerCase()))
                      return null;
                    return (
                      <div
                        key={i}
                        className={`flex flex-col justify-between space-y-2 border-b-2 border-p px-2 py-1 ${
                          selected === e.title ? "bg-p text-black" : ""
                        }`}
                      >
                        <Link
                          to={`/blog/${encodeURIComponent(
                            e.title.toLowerCase().replace(/ /g, "-")
                          )}`}
                          className={`text-xl font-semibold hover:underline cursor-pointer ${
                            selected === e.title ? "bg-p text-black" : ""
                          }`}
                          onClick={() => setSelected(e.title)}
                        >
                          {e.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="w-4/5 border-y-2 border-r-2 border-p h-full">
                  {selected && (
                    <div className="flex flex-col p-2">
                      <h1 className="text-2xl font-semibold">{selected}</h1>
                      <p className="text-lg">
                        {blogs.find((e) => e.title === selected)?.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
