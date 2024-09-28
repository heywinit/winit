export default function Work() {
  return (
    <div className="w-1/2 border-4 border-q">
      <div className="flex items-center justify-between space-x-2 bg-q p-1 rounded-sm select-none">
        <h2 className="text-xl font-semibold">work</h2>
      </div>
      <div className="px-2">
        {[
          {
            company: "SOL Decoder",
            role: "freelance sde",
            duration: "mar 2024 - present",
            description:
              "working on a solana blockchain airdrop farming tool using electron & node",
            link: "soldecoder.app",
          },
          {
            company: "SOL Decoder",
            role: "freelance sde",
            duration: "mar 2024 - present",
            description:
              "working on a solana blockchain airdrop farming tool using electron & node",
            link: "soldecoder.app",
          },
        ].map((work, index) => (
          <div key={index} className="py-2 space-y-2">
            <h3 className="text-xl font-semibold underline">
              <a href={work.link} className="text-p">
                {work.company}
              </a>
            </h3>
            <div>
              <h4 className="text-md font-semibold text-p/70">{work.role}</h4>
              <h5 className="text-md font-semibold text-p/50">
                {work.duration}
              </h5>
            </div>
            <p className="text-md text-p/90">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
