import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-col w-[35%] p-4">
        <NavBar />
        <div className="flex flex-grow flex-col py-4 space-y-2">
          <div className="flex flex-row justify-between items-center">
            <div className="flex justify-between content-center select-none">
              <h1 className="text-5xl font-semibold">
                winit<span className="text-p">.</span>
              </h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6">
                programming & avionics
              </h2>
            </div>
          </div>
          <div className="space-y-2 text-lg leading-5 text-white/85 font-medium">
            <div className="">
              good morning. i'm winit. i code, i write, and most importantly, i
              make shit go brrr and banggg. (i make rockets).
            </div>
            <div className="">
              i've been programming for about 6-7 years now, professionally for
              4 years.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
