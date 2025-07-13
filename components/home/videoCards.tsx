import React from "react";

const Videos = [
  {
    link: "https://www.youtube.com/embed/sDL60XiiqOY?si=EtukiOnOb_K1Saa7",
    title: "Pacman Remixed",
  },
];
export default function VideoCards() {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
      {Videos.map((video, index) => (
        <div key={index} className="rounded-md max-w-[350px] ring-2 ring-brand-200 mb-6 md:col-span-3">
          <iframe
            className="rounded-md"
            width="350"
            height="197"
            src={video.link}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
