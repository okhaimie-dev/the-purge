"use client"

import { truncateString } from "@/lib/utils";
import { LegacyRef, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreateAccount() {
    const ref: LegacyRef<HTMLInputElement> = useRef(null);
    const { address } = useAccount();
    const [profileImage, setProfileImage] = useState<string | undefined>(undefined);
    const router = useRouter();
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-5">
                <h1 className="text-5xl sm:text-6xl font-bold text-white">Create account</h1>
                <div className="w-full sm:w-[500px] h-fit border-2 border-white/50 rounded-lg flex flex-col items-center p-5 space-y-3.5">
                    <div className="hover:cursor-pointer" onClick={() => ref.current?.click()}>
                        {
                            profileImage ? <Image src={profileImage} width={50} height={50} alt="profile" className="w-40 h-40 border-2 border-white/50 rounded-full" />
                                : <div className="w-40 h-40 border-2 border-white/50 rounded-full flex flex-col items-center justify-center">
                                    <p className="text-white">Click to set photo</p>
                                </div>
                        }
                        <input type="file" ref={ref} accept="image/*" onChange={e => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setProfileImage(URL.createObjectURL(file));
                            }
                        }} className="hidden" />
                    </div>
                    <div className="text-white border-2 border-white/50 rounded-3xl py-1.5 px-3.5">{truncateString(address, 6)}</div>
                    <input type="text" placeholder="Enter name" className="w-full border-2 border-white/50 rounded-lg p-3.5 bg-transparent outline-0 text-white" />
                    <div className="w-full">
                        <p className="text-white">Your power: ******</p>
                    </div>
                    <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg" onClick={() => router.push("/play")}>Create account</button>
                    <button className="w-full flex flex-row items-center justify-end" onClick={() => router.push("/")}>
                        <div className="text-white flex flex-row items-center justify-center"><ChevronLeftIcon className="w-6 h-6" /><p>Go back</p></div>
                    </button>
                </div>
            </div>
        </div>
    )
}