"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAccount, useDisconnect } from "wagmi";
import { useModal } from "connectkit";
import { Bars2Icon } from "@heroicons/react/16/solid"
import Link from "next/link";

export default function Menu() {
    const { address } = useAccount()
    const { setOpen } = useModal()
    const { disconnect } = useDisconnect()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="border-2 border-white rounded-md p-1.5">
                    <Bars2Icon className="w-6 h-6 text-white" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border border-white/50">
                <Link href="/account">
                    <DropdownMenuLabel className="text-white/50 font-normal hover:cursor-pointer hover:text-white">Account</DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator className="bg-white/50" />
                <Link href="/history">
                    <DropdownMenuLabel className="text-white/50 font-normal hover:cursor-pointer hover:text-white">History</DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator className="bg-white/50" />
                <DropdownMenuLabel className="text-white/50 font-normal hover:cursor-pointer hover:text-white" onClick={address ? () => disconnect() : () => setOpen(true)}>{address ? "Disconnect wallet" : "Connect wallet"}</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}