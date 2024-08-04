import Image from "next/image";

export default function HistoryCard() {
    return (
        <div className="bg-black w-fit h-fit bg-gradient-to-br from-white via-transparent to-white rounded-xl p-0.5">
            <div className="bg-black w-fit h-full rounded-xl py-3.5 px-7 flex flex-col items-start justify-center">
                <div className="space-y-2.5">
                    <div className="flex flex-row items-center justify-center sm:space-x-5">
                        <div className="flex flex-col items-center justify-center space-y-0.5">
                            <Image src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png" alt="earth" width={175} height={175} className="rounded-full border-2 border-white" />
                            <h3 className="text-3xl font-bold text-white">Bitcoin</h3>
                            <div className="flex flex-row items-center space-x-2.5">
                                <p className="text-white text-lg text-center">Wins: 52</p>
                                <p className="text-white text-lg text-center">Losses: 12</p>
                            </div>
                        </div>
                        <h2 className="text-5xl font-bold text-white">VS</h2>
                        <div className="flex flex-col items-center justify-center space-y-0.5">
                            <Image src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png" alt="earth" width={175} height={175} className="rounded-full border-2 border-white" />
                            <h3 className="text-3xl font-bold text-white">Bitcoin</h3>
                            <div className="flex flex-row items-center space-x-2.5">
                                <p className="text-white text-lg text-center">Wins: 52</p>
                                <p className="text-white text-lg text-center">Losses: 12</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-white bg-transparent text-white p-2.5 rounded-lg w-full text-center">You won</div>
                </div>
            </div>
        </div>
    )
}