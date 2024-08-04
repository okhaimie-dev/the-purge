"use client"

import ReactPlayer from "react-player";

export default function Earth() {
    if (typeof window === "undefined") return null;
    const w_70 = window.innerWidth * 0.70;
    const h_70 = window.innerHeight * 0.70;
    return (
        <div className="flex flex-col items-center justify-center">
            <ReactPlayer
                width={`${w_70}px`}
                height={`${h_70}px`}
                url="/videos/earth.mp4"
                controls={false}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
                playing={true}
                loop={true}
                muted={true}
            />
            <source src="/videos/earth.mp4" type="video/mp4" />
            <h3 className="text-5xl sm:text-6xl font-bold text-white">The Purge</h3>
        </div>
    )
}