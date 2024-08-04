"use client"

import { LegacyRef, useRef } from "react";

export default function CreateAccount() {
    const ref: LegacyRef<HTMLInputElement> = useRef(null);
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-5">
                <h1 className="text-5xl sm:text-6xl font-bold text-white">Create account</h1>
                <div className="w-[500px] h-[600px] border-2 border-white/50 rounded-lg flex flex-col items-center p-5">
                    <div className="hover:cursor-pointer" onClick={() => ref.current?.click()}>
                        {
                            ref.current?.files ? <img src={URL.createObjectURL(ref.current?.files[0])} alt="profile" className="w-40 h-40 border-2 border-white/50 rounded-full" />
                                : <div className="w-40 h-40 border-2 border-white/50 rounded-full flex flex-col items-center justify-center">
                                    <p className="text-white">Click to set photo</p>
                                </div>
                        }
                        <input type="file" ref={ref} className="hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}