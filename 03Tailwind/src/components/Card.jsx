import React from 'react';


function Card({username = "John Doe",
  jobRole = "Engineer",
  company ="ABC", 
  profilePic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.WdUjooYsGw5I04qYSIKkswHaHa%3Fpid%3DApi&f=1&ipt=035134a8ba062f27a1cd6a0ddf7de67a0922e6c356ade70f6dd5b1730d978a1d&ipo=images"
}) {
  return (
    <article className="mx-auto w-full max-w-[632px] overflow-hidden rounded-md shadow-lg">
      <h2 className="bg-[#18c45a] px-4 text-center text-[23px] leading-[46px] font-normal text-white">
        Vite with Tailwind
      </h2>
      <div className="flex min-h-[120px] bg-slate-800 text-left">
        <img
          className="w-[148px] shrink-0 object-cover max-sm:w-[30%]"
          src={profilePic}
          alt={username}
        />
        <div className="flex min-w-0 flex-col justify-center gap-1 px-6 py-4 max-sm:px-4">
          <p className="text-[14px] leading-5 text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            quaerat.
          </p>
          <p className="mt-2 text-[14px] leading-4 text-sky-400">{username }</p>
          <p className="text-[12px] leading-4 text-slate-500">
            {jobRole}, {company}
          </p>
        </div>
      </div>
    </article>
  )
}

export default Card
