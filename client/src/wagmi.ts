import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { optimism, base, mode, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Random Muse App",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID as string,
  chains: [
    optimism,
    mode,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
