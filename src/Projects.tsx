import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Select from "./components/Select";

export default function Projects() {
  const [status, setStatus] = React.useState("all");
  const [tech, setTech] = React.useState("all");

  return (
    <div className="flex h-screen w-screen justify-center px-32">
      <NavBar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow p-8">
          <h1 className="text-3xl font-bold">/projects</h1>
          <hr className="my-4 bg-p" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <div></div>
              <div className="">
                {/* Two dropdowns, one for status filter, one for tech filter */}
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <Select
                      options={["all", "active", "inactive"]}
                      selected={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Select
                      options={["all", "react", "node", "go", "python"]}
                      selected={tech}
                      onChange={(e) => {
                        setTech(e.target.value);
                      }}
                    />
                  </div>
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
