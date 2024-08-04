"use client"

import Earth from "@/components/earth";
import { ConnectKitButton } from "connectkit";

// import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="flex flex-col items-center justify-center space-y-5">
        {/* <ConnectButton /> */}
        {/* <h1 className="text-4xl font-bold mb-4">RandomMuse</h1>

        <GeneratePromptPage /> */}
        <Earth />
        <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg">Connect wallet to play</button>
        <ConnectKitButton />
      </div>
    </main>
  );
}
