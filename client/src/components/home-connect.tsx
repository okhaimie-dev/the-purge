"use client"

import { useModal } from "connectkit";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation"

export default function HomeConnect() {
    const { setOpen } = useModal();
    const account = useAccount();
    const [profile, setProfile] = useState<{} | undefined>({});
    const router = useRouter();
    if (account) {
        setTimeout(() => {
            //mock account profile
            setProfile(undefined);
            setTimeout(() => {
                router.push("/create-account");
            }, 2000);
        }, 3000);
    }
    return (
        <>
            {
                account ? <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg">{profile === undefined ? "Account not found, redirecting..." : "Checking for account..."}</button>
                    : <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg" onClick={() => setOpen(true)}>Connect wallet to play</button>
            }
        </>
    )
}