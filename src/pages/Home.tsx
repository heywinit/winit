import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/elements/NavBar";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { AppWindowIcon, Github, Music, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [githubData, setGithubData] = useState<{
    login: string;
    public_repos: number;
    created_at: string;
    followers: number;
    following: number;
  }>();

  useEffect(() => {
    fetch("https://api.github.com/users/heywinit")
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
      });
  }, []);

  return (
    <div className="w-screen h-screen p-4 flex-grow space-y-4">
      <NavBar />
      <Card
        className={`space-y-3 p-3 ${
          theme === "dark" ? "bg-p text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <Badge
            variant="default"
            onClick={() => {
              navigate("/contact");
            }}
            className={theme === "dark" ? "text-black" : "text-white"}
          >
            Back-End Dev
          </Badge>

          <Badge
            className={`bg-green-500/[.5] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Open To Work
          </Badge>
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Winit.</h1>
          <h2
            className={`text-1xl font-semibold leading-snug ${
              theme === "dark" ? "text-white/[0.9]" : "text-black/[0.9]"
            }`}
          >
            I'm a 18 y/o Software Developer & Avionics Engineer from India. This
            is my personal website where I share my projects, thoughts and
            experiences.
          </h2>
        </div>
        <div
          className={`flex space-x-2${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          {/* Hire Me button */}
          <Button
            className={
              theme === "dark"
                ? "bg-white/[0.03] text-white"
                : "bg-p text-white"
            }
            onClick={() => {
              navigate("/contact");
            }}
          >
            <span className="text-sm mr-2">🚀</span> Hire Me
          </Button>
        </div>
        <div
          className={`p-2 px-3 space-y-2 rounded-md w-full ${
            theme === "dark"
              ? "bg-white/[0.03] text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex items-center">
            <div
              className={`text-md font-bold w-max rounded-md ${
                theme === "dark" ? " text-white" : "text-black"
              }`}
            >
              Arsenal
            </div>
          </div>
          <div className={`slide-container text-white`}>
            <div className="slide-track">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(() =>
                [
                  "golang",
                  "js/ts",
                  "java",
                  "c/c++",
                  "html/css",
                  "python",
                  "bash",
                ].map((item, idx) => (
                  <div key={idx} className="slide-item">
                    {item}
                  </div>
                ))
              )}
            </div>

            <div className="slide-track">
              {[1, 2, 3, 4, 5, 6].map(() =>
                [
                  "spring",
                  "javalin",
                  "react",
                  "express",
                  "node",
                  "mysql",
                  "mongodb",
                  "angular",
                  "nextjs",
                ].map((item, idx) => (
                  <div key={idx} className="slide-item">
                    {item}
                  </div>
                ))
              )}
            </div>

            <div className="slide-track">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() =>
                ["linux", "git", "vercel", "docker", "kubernetes", "aws"].map(
                  (item, idx) => (
                    <div key={idx} className="slide-item">
                      {item}
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
        <div
          className={`p-2 px-3 space-y-2 rounded-md w-full ${
            theme === "dark"
              ? "bg-white/[0.03] text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`text-md font-bold w-max rounded-md ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Projects
            </div>
            <Button
              className={
                theme === "dark"
                  ? "bg-white/[0.03] text-white"
                  : "bg-p text-white"
              }
              onClick={() => {
                navigate("/projects");
              }}
            >
              View All
              <span className="text-sm ml-1">👉</span>
            </Button>
          </div>
          {[
            {
              name: "QT MHK-28",
              desc: "QuatTar Mobile High-Impact Guided Rocket",
              icon: <Rocket className="w-8" />,
            },
            // {
            //   name: "QT LaDE-2",
            //   desc: "QuatTar Low-Altitude Direct Engagement Guided Missile.",
            //   icon: <Rocket className="w-8" />,
            // },
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
          ].map((project) => (
            <div
              className={`flex space-x-2 items-center p-2 rounded-md select-none ${
                theme === "dark"
                  ? "bg-white/[0.03] text-white"
                  : "bg-gray-300/50"
              }`}
              onClick={() => {
                navigate("/projects");
              }}
              key={project.name}
            >
              <div>{project.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-md font-semibold">{project.name}</h3>
                <h3 className="text-sm">{project.desc}</h3>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`p-2 px-3 space-y-2 rounded-md w-full ${
            theme === "dark"
              ? "bg-white/[0.03] text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`text-md font-bold w-max rounded-md ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              GitHub Stats
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <Badge
              className={`bg-p text-sm text-white underline`}
              onClick={() =>
                window.open("https://github.com/heywinit", "_blank")
              }
            >
              <Github className="w-4 mr-2" />
              {githubData?.login}
            </Badge>
            <Badge className={`bg-p text-sm text-white`}>
              {githubData?.public_repos} repos
            </Badge>
            <Badge className={`bg-p text-sm text-white`}>
              Member since{" "}
              {new Date(githubData?.created_at || "2024").getFullYear()}
            </Badge>
            <Badge className={`bg-p text-sm text-white`}>
              {githubData?.followers} followers
            </Badge>
            <Badge className={`bg-p text-sm text-white`}>
              {githubData?.following} following
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
