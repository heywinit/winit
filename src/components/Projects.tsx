import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="w-1/2 border-4 border-q">
      <div className="flex items-center justify-between space-x-2 bg-q p-1 rounded-sm select-none">
        <h2 className="text-xl font-semibold">projects</h2>
        <Link
          to={`/projects`}
          className="text-md bg-t/50 px-2 hover:bg-p/30 hover:cursor"
        >
          all
        </Link>
      </div>
      <div className="px-2">
        {[
          {
            name: "rootus",
            description: "an all-in-one solution for daily commute",
            link: "https://github.com/heywinit/rootus",
          },
          {
            name: "discodb",
            description: "a key value store powered by discord made using go",
            link: "https://github.com/heywinit/discodb",
          },
          {
            name: "stail",
            description: "css for configuration",
            link: "https://github.com/heywinit/stail",
          },
          {
            name: "minechek",
            description:
              "a minecraft server manager made using java, go & charmcli",
            link: "https://github.com/heywinit/minecheck",
          },
        ].map((work, index) => (
          <div key={index} className="py-2 space-y-1">
            <h3 className="text-xl font-semibold underline">
              <a href={work.link} className="text-p">
                {work.name}
              </a>
            </h3>
            <p className="text-md text-p/70">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
