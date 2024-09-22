import NavBar from "@/components/elements/NavBar";
import { useTheme } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";

function About() {
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
          <h1 className="text-3xl font-bold">Winit.</h1>
          <h2
            className={`text-1xl font-semibold leading-snug ${
              theme === "dark" ? "text-white/[0.9]" : "text-black/[0.9]"
            }`}
          >
            brrr et le bang.
            <br />
          </h2>
        </div>
      </Card>
    </div>
  );
}

export default About;
