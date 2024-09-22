import NavBar from "@/components/elements/NavBar";
import { useTheme } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";
import { AppWindowIcon, FileSlidersIcon, Music, Rocket } from "lucide-react";

function Projects() {
  const { theme } = useTheme();

  return (
    <div className="w-screen h-screen p-4 flex-grow space-y-4">
      <NavBar />
      <Card
        className={`space-y-3 p-3 ${
          theme === "dark" ? "bg-p text-white" : "bg-white text-black"
        }`}
      >
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <div
          className={` space-y-2 p-3 rounded-lg
            ${
              theme === "dark" ? "bg-white/[0.03] text-white" : "bg-gray-300/50"
            }
          `}
        >
          {[
            {
              name: "QT MHK-26",
              desc: "QuatTar Mobile Homing Krait Guided Missile",
              icon: <Rocket className="w-8" />,
            },
            {
              name: "Stail",
              desc: "CSS as configuration.",
              icon: <FileSlidersIcon className="w-8" />,
            },
            {
              name: "Statisfy",
              desc: "A Spotify data visualization for presenting your music taste in numbers.",
              icon: <Music className="w-8" />,
            },
            {
              name: "Studium",
              desc: "A student planner app for managing your competitive exam progress.",
              icon: <AppWindowIcon className="w-8" />,
            },
            {
              name: "Jesensi",
              desc: "A all in one database for defence technologies and weapons",
              icon: <AppWindowIcon className="w-8" />,
            },
          ].map((project) => (
            <div
              className={`flex space-x-2 items-center p-2 rounded-md select-none ${
                theme === "dark"
                  ? "bg-white/[0.03] text-white"
                  : "bg-white text-black"
              }`}
              key={project.name}
            >
              <div>{project.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-md font-semibold">{project.name}</h3>
                <h3 className="text-sm">{project.desc}</h3>
              </div>
            </div>
          ))}
          <div
            className={`flex space-x-2 items-center p-2 rounded-md select-none ${
              theme === "dark"
                ? "bg-white/[0.03] text-white"
                : "bg-white text-black"
            }`}
          >
            <div>cookin some more</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default Projects;
