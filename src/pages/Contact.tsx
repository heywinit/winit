import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen justify-center lg:px-32">
      <NavBar />
      <div className="flex flex-col flex-grow lg:border-r-2 border-r-p overflow-y-auto">
        <div className="flex flex-col flex-grow p-8 h-full">
          <h1 className="text-3xl font-bold">/contact</h1>
          <hr className="my-4 bg-p" />
          <div className="flex border-p border-2 divide-x-2 divide-p h-full">
            <div className="flex flex-col lg:lw-2/3 lg:grid grid-cols-4 grid-rows-4 p-4 gap-2">
              <a
                className="w-full h-full border-2 border-p col-span-2 hover:bg-p group"
                href="https://github.com/heywinit"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  github
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  i have a lot of repositories on github. feel free to check
                  them out. you'll find most of my projects there. i also try
                  and contribute to open source projects when i can.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p hover:bg-p group"
                href="mailto:heywinit@gmail.com"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  email
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  drop me a mail if you wanna get all formal and that.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p hover:bg-p group"
                href="https://reddit.com/u/heywinit"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  reddit
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  i don't use reddit much, but i have an account.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p hover:bg-p group"
                href="https://x.com/hiwinit"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  twitter
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  find me tweetin (NOT X). feel free to follow me. i'm kinda
                  active there.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p col-span-2 hover:bg-p group"
                href="https://youtube.com/@heywinit"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  youtube
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  i make videos on youtube. mostly programming stuff and
                  rockets. if you're into that, feel free to subscribe.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p hover:bg-p group"
                href="https://stackoverflow.com/users/27690793/heywinit"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  stackoverflow
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  just the usual stackoverflow profile. nothing special.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p hover:bg-p group"
                href="https://instagram.com/heywinit"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  instagram
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  i post pictures of my projects and stuff on ig.
                </div>
              </a>
              <a
                className="w-full h-full border-2 border-p row-span-2 hover:bg-p group"
                href="https://discord.gg/6knmrzHtPz"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  discord
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  i have a discord server. feel free to join. i'm most active on
                  discord.
                </div>
              </a>
              <div className="hidden lg:block w-full h-full border-2 border-p col-span-2 row-span-2 bg-p p-2 leading-tight font-bwold space-y-2">
                <p>
                  these are my socials. feel free to reach out to me on any of
                  these platforms. i usually respond within 24 hours.
                </p>
                <p>
                  join my discord server for a more interactive experience. my
                  server is based around programming, aerospace, and gaming.
                </p>
                <p>
                  generally, i'm most active on discord, so if you want a quick
                  response, that's the way to go.
                </p>
              </div>
              <a
                className="w-full h-full border-2 border-p hover:bg-p group"
                href="https://open.spotify.com/user/31qaxo2d5x6vwgmeae4ed5c6lnmi?si=39e358d55cef4063"
                target="_blank"
              >
                <div className="flex group-hover:hidden justify-center items-center w-full h-full text-lg">
                  spotify
                </div>
                <div className=" hidden group-hover:flex p-2 leading-tight">
                  mostly listenin to the regular old hiphop, add me if you want.
                </div>
              </a>{" "}
              <div className="block lg:hidden w-full h-full border-2 border-p col-span-2 row-span-2 bg-p p-2 leading-tight font-bwold space-y-2">
                <p>
                  these are my socials. feel free to reach out to me on any of
                  these platforms. i usually respond within 24 hours.
                </p>
                <p>
                  join my discord server for a more interactive experience. my
                  server is based around programming, aerospace, and gaming.
                </p>
                <p>
                  generally, i'm most active on discord, so if you want a quick
                  response, that's the way to go.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
