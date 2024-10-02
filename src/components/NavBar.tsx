import { PhoneCall, Rocket, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-full p-4 lg:py-8">
      <h1 className="text-3xl font-bold animateHeading">
        <Link to="/">vsh</Link>
      </h1>
      <div className="border-[1px] rounded-lg border-white space-x-1 p-0.5  items-center flex">
        {["Blog", "Projects", "Contact"].map((item, index) => (
          <Link to={item.toLowerCase()} key={index} className="inline-block">
            <span className="lg:block hidden alink">{item}</span>
            <div className="lg:hidden p-1 rounded-lg">
              {item === "Blog" && <ScrollText size={20} />}
              {item === "Projects" && <Rocket size={20} />}
              {item === "Contact" && <PhoneCall size={20} />}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
