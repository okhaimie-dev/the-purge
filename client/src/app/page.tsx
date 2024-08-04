import Earth from "@/components/earth";
import HomeConnect from "@/components/home-connect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Earth />
        <HomeConnect />
      </div>
    </main>
  );
}
