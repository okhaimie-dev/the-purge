// import Header from "@/components/header";
import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/16/solid"

export default function Play() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-full px-2.5">
                {/* <Header /> */}
                <div className="w-full md:w-fit h-full max-h-[85vh] overflow-y-scroll absolute top-10 bg-gradient-to-br from-white via-transparent to-white rounded-xl p-0.5 hide-scrollbar">
                    <div className="bg-black rounded-t-xl flex flex-row items-center justify-between pr-2.5 pt-1.5">
                        <p className="text-3xl font-bold text-white p-1.5 ">The Purge</p>
                        <button className="border-2 border-white rounded-md p-1.5">
                            <Bars2Icon className="w-6 h-6 text-white" />
                        </button>
                    </div>
                    <div className="w-fit bg-black rounded-b-xl">
                        <div className="w-fit">
                            <div className="p-2.5 space-y-2.5 w-fit">
                                {
                                    Array.from({ length: 10 }).map((_, i) => <div className="bg-black w-fit h-fit bg-gradient-to-br from-white via-transparent to-white rounded-xl p-0.5">
                                        <div className="bg-black w-fit h-full rounded-xl py-3.5 px-7 flex flex-col items-start justify-center">
                                            <div className="space-y-2.5">
                                                <div className="flex flex-row items-center justify-center space-x-5">
                                                    <div className="flex flex-col items-center justify-center space-y-0.5">
                                                        <Image src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png" alt="earth" width={175} height={175} className="rounded-full border-2 border-white" />
                                                        <h3 className="text-3xl font-bold text-white">Bitcoin</h3>
                                                        <div className="flex flex-row items-center space-x-2.5">
                                                            <p className="text-white text-lg">Wins: 52</p>
                                                            <p className="text-white text-lg">Losses: 12</p>
                                                        </div>
                                                    </div>
                                                    <h2 className="text-5xl font-bold text-white">VS</h2>
                                                    <div className="flex flex-col items-center justify-center space-y-0.5">
                                                        <Image src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png" alt="earth" width={175} height={175} className="rounded-full border-2 border-white" />
                                                        <h3 className="text-3xl font-bold text-white">Bitcoin</h3>
                                                        <div className="flex flex-row items-center space-x-2.5">
                                                            <p className="text-white text-lg">Wins: 52</p>
                                                            <p className="text-white text-lg">Losses: 12</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg w-full">Purge</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}