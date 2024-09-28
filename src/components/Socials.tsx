import { Github, Instagram, Twitter, Youtube } from "lucide-react";

export default function Socials() {
  return (
    <div className="w-1/3 border-4 border-q">
      <div className="flex items-center justify-between space-x-2 bg-q p-1 rounded-sm select-none">
        <h2 className="text-xl font-semibold">socials</h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-2">
        {[
          {
            icon: <Github size={24} />,
            link: "https://github.com/heywinit",
          },
          {
            icon: <Twitter size={24} />,
            link: "https://x.com/hiwinit",
          },
          {
            icon: <Instagram size={24} />,
            link: "https://instagram.com/heywinit",
          },
          {
            icon: <Youtube size={24} />,
            link: "https://youtube.com/@heywinit",
          },
        ].map((social, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 rounded-sm hover:bg-t/50"
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
