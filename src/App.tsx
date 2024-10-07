import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-screen w-screen justify-center px-32">
      <NavBar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow p-8">
          <h1 className="text-3xl font-bold">about me</h1>
          <hr className="my-4 bg-p" />
          <div className="text-lg leading-tight space-y-3">
            <p>
              Good morning! I'm a backend developer and avionics enthusiast,
              currently studying computer science and aerospace engineering.
              I've been programming since I was 12, and professionally for about
              4 years now. My current favorite languages are GoLang &
              TypeScript.
            </p>

            <p>
              I love to build things, usually software, sometimes hardware.
              Currently, I'm working on two exciting projects:
              <ul className="list-disc ml-5">
                <li>
                  <Link
                    className="font-semibold hover:bg-p px-1"
                    to={"/projects"}
                  >
                    DiscoDB
                  </Link>
                  : A database stored on Discord, offering theoretically
                  infinite storage.
                </li>
                <li>
                  <Link
                    className="font-semibold hover:bg-p px-1"
                    to={"/projects"}
                  >
                    QT MHK-26X
                  </Link>
                  : A supermaneuverable missile I'm building, capable of
                  executing an S maneuver.
                </li>
              </ul>
            </p>

            <p>
              I am a BIG nerd when it comes to fighter jets, missiles,
              helicopters, and anything related to defense technology. This
              passion was ignited by the original Top Gun movie, and I've been
              learning more about defense technology every day since. I'm
              particularly fascinated by aircraft that push the boundaries of
              speed and technology.
            </p>

            <p>
              My personal favorite aircraft are:
              <ul className="list-disc ml-5">
                <li>
                  <a className="font-semibold hover:bg-p px-1">
                    Lockheed Martin F-117 NightHawk
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:bg-p px-1">
                    Rockwell B-1B Lancer
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:bg-p px-1">
                    Ilyushin IL-76
                  </a>
                </li>
              </ul>
            </p>

            <p>
              Beyond tech and aviation, I'm also a huge fan of music, especially
              hip-hop. I enjoy French rap, trap, and Desi hip-hop. Recently,
              I've been learning to play the flute, adding a new dimension to my
              musical interests.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
