import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-col w-full lg:w-[45%] px-4 lg:px-8">
        <NavBar />
        <p>
          Good Morning! I'm a software engineer and I love to build things with
        </p>
      </div>
    </div>
  );
}
