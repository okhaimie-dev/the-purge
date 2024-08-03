import GeneratePromptPage from "@/components/generate-prompt";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ConnectButton />
        <h1 className="text-4xl font-bold mb-4">RandomMuse</h1>

        <GeneratePromptPage />
      </div>
    </main>
  );
}
