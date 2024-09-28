import { Handshake, Pin } from "lucide-react";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-col w-[35%] p-4">
        <NavBar />
        <div className="py-4 space-y-3">
          <h1 className="text-6xl font-semibold">winit</h1>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2  bg-q px-2 rounded-sm">
              <Pin size={16} />
              <h3 className="text-xl text-p">amd, ind</h3>
            </div>
            <div className="flex items-center space-x-2 bg-q px-2 rounded-sm">
              <Handshake size={16} />
              <h3 className="text-xl text-p">open to work</h3>
            </div>
          </div>
          <div className="flex space-x-2">
            <Work />
            <Projects />
          </div>
          <div className="flex space-x-2">
            <Blogs />
            <Socials />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
