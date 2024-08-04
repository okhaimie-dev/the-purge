"use client"

import { truncateString } from "@/lib/utils";
import { useAccount } from "wagmi";
import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Account() {
    const { address } = useAccount();
    const router = useRouter();
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-5">
                <h1 className="text-5xl sm:text-6xl font-bold text-white">User account</h1>
                <div className="w-full sm:w-[500px] h-fit border-2 border-white/50 rounded-lg flex flex-col items-center p-5 space-y-3.5">
                    <Image src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png" alt="profile" className="w-40 h-40 border-2 border-white/50 rounded-full" />
                    <div className="text-white border-2 border-white/50 rounded-3xl py-1.5 px-3.5">{truncateString(address, 6)}</div>
                    <h3 className="text-white text-2xl">Name: John Doe</h3>
                    <p className="text-white">Your power: 100</p>
                    <button className="w-full flex flex-row items-center justify-end" onClick={() => router.push("/play")}>
                        <div className="text-white flex flex-row items-center justify-center"><ChevronLeftIcon className="w-6 h-6" /><p>Go game screen</p></div>
                    </button>
                </div>
            </div>
        </div>
    )
}