'use client'

import Link from "next/link";
import { useAccount, useDisconnect } from "wagmi";
import { useModal, Avatar } from "connectkit";

export default function Header() {
    const { address } = useAccount();
    const account = useAccount();
    const { setOpen } = useModal();
    const { disconnect } = useDisconnect();
    return (
        <div className="fixed h-20 backdrop-blur-3xl bg-transparent/10 w-[360px] sm:w-[600px] top-10 rounded-l-full rounded-r-full px-2.5
        flex flex-col items-center justify-center bg-gradient-to-br from-white via-transparent to-white z-20">
            <div className="flex flex-row items-center justify-between w-full">
                <Link href={"/"}>
                    <h3 className="text-3xl text-white font-bold">PURGE</h3>
                </Link>
                {
                    address ? <button onClick={() => disconnect()} className="flex flex-row items-center">
                        <Avatar address={address} size={65} />
                    </button> : <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg" onClick={() => setOpen(true)}>Connect wallet to play</button>
                }
            </div>
        </div>
    )
}