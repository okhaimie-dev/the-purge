import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu";
import HistoryCard from "@/components/history-card";

export default function History() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-full px-2.5">
                {/* <Header /> */}
                <div className="w-full md:w-fit h-full max-h-[85vh] overflow-y-scroll absolute top-10 bg-gradient-to-br from-white via-transparent to-white rounded-xl p-0.5 hide-scrollbar">
                    <div className="bg-black rounded-t-xl flex flex-row items-center justify-between pr-2.5 pt-1.5">
                        <Link href={"/"}>
                            <p className="text-3xl font-bold text-white p-1.5 ">Your Purge History</p>
                        </Link>
                        <Menu />
                    </div>
                    <div className="w-fit bg-black rounded-b-xl">
                        <div className="w-fit">
                            <div className="p-2.5 space-y-2.5 w-fit">
                                {
                                    Array.from({ length: 10 }).map((_, i) => <HistoryCard key={i} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}