"use client"

import Earth from "@/components/earth";
import { useModal } from "connectkit";

// import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const { setOpen } = useModal();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Earth />
        <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg" onClick={() => setOpen(true)}>Connect wallet to play</button>
      </div>
    </main>
  );
}
