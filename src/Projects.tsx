import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Select from "./components/Select";
import MultiSelect from "./components/MultiSelect";

export default function Projects() {
  const [status, setStatus] = React.useState("status");
  const [tech, setTech] = React.useState<[]>([]);
  const [search, setSearch] = React.useState("");

  const techs = [
    "golang",
    "js/ts",
    "java",
    "python",
    "mysql",
    "node",
    "express",
    "react",
    "mongodb",
    "springboot",
    "tailwindcss",
    "webassembly",
  ];

  const projects = [
    {
      name: "discodb",
      desc: "database that stores data in discord allowing for unlimited storage.",
      tech: ["golang", "discordgo"],
      status: "work in progress",
      github: "https://github.com/heywinit/discodb",
    },
    {
      name: "rootus",
      desc: "rootus is a one stop solution for commuters.",
      tech: ["golang", "reactnative", "react", "tailwindcss"],
      status: "work in progress",
      github: "https://github.com/heywinit/rootus",
    },
    {
      name: "statisfy-api",
      desc: "api for my music taste visualization app that presents your listening habits in fancy charts and graphs.",
      tech: ["golang", "spotify web api", "mysql"],
      status: "work in progress",
      github: "https://github.com/heywinit/statisfy-api",
    },
    {
      name: "statisfy-app",
      desc: "mobile app that visualizes your spotify listening habits in fancy charts and graphs.",
      tech: ["react native", "expo", "react-native-paper", "d3.js"],
      status: "work in progress",
      github: "https://github.com/heywinit/statisfy-app",
    },
    {
      name: "jesensi-api",
      desc: "api for my defence technology encyclopedia web app.",
      tech: ["springboot", "java", "mongodb"],
      status: "work in progress",
      github: "https://github.com/heywinit/jesensi-api",
    },
    {
      name: "jesensi-web",
      desc: "web app that provides information about defence technologies.",
      tech: ["react", "tailwindcss"],
      status: "work in progress",
      github: "https://github.com/heywinit/jesensi-web",
    },
    {
      name: "minechek",
      desc: "tui minecraft server management tool",
      tech: ["golang", "minecraft protocol", "spigot", "paper", "charm"],
      status: "work in progress",
      github: "https://github.com/heywinit/minechek",
    },
    {
      name: "gomine",
      desc: "minecraft protocol library for go",
      tech: ["golang", "minecraft protocol"],
      status: "work in progress",
      github: "https://github.com/heywinit/gomine",
    },
    {
      name: "goise",
      desc: "web app built with wasm that delivers a wide range of noises and textures using paramters.",
      tech: ["golang", "webassembly"],
      status: "work in progress",
      github: "https://github.com/heywinit/Goise",
    },
    {
      name: "gort",
      desc: "web app for visualizing data structures, sorting and pathfinding algorithms.",
      tech: ["golang", "webassembly"],
      status: "work in progress",
      github: "https://github.com/heywinit/Gort",
    },
    {
      name: "heytab",
      desc: "firefox extension that replaces new tab page with a more customized dashboard.",
      tech: ["javascript", "webextension api", "react", "tailwindcss"],
      status: "work in progress",
      github: "https://github.com/heywinit/heytab",
    },
  ];

  return (
    <div className="flex h-screen w-screen justify-center px-32">
      <NavBar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow border-r-2 border-r-p p-8">
          <h1 className="text-3xl font-bold">/projects</h1>
          <hr className="my-4 bg-p" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <input
                  type="text"
                  placeholder="search"
                  className="bg-black border-2 text-white placeholder-white border-p p-2 py-1 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <Select
                      options={["status", "work in progress", "done"]}
                      selected={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <MultiSelect
                      options={techs.map((e) => {
                        return { key: e, value: e };
                      })}
                      selected={tech}
                      setSelected={setTech}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow flex-col">
              <div className="h-full overflow-y-auto">
                <div className="grid grid-cols-4 gap-2">
                  {projects.map((e, i) => {
                    // Filter by search
                    if (!e.name.toLowerCase().includes(search.toLowerCase())) {
                      return null;
                    }
                    // Filter by status
                    if (status !== "status" && e.status !== status) {
                      return null;
                    }
                    // Filter by tech
                    if (tech.length > 0) {
                      let found = false;
                      for (const t of tech) {
                        if (e.tech.includes(t)) {
                          found = true;
                          break;
                        }
                      }
                      if (!found) {
                        return null;
                      }
                    }
                    return (
                      <div
                        key={i}
                        className="flex flex-col justify-between space-y-2 border-2 border-p px-2 py-1"
                      >
                        <div>
                          <h4 className="text-xl font-semibold">{e.name}</h4>
                          <p className="text-sm leading-tight">{e.desc}</p>
                        </div>
                        <p className="text-sm font-medium">
                          {e.tech.join(", ")}
                        </p>
                      </div>
                    );
                  })}
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
