import Header from "@/components/header";

export default function Play() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-full px-2.5">
                <Header />
                <div className="w-full md:w-[768px] h-full max-h-[85vh] overflow-y-scroll absolute top-14 bg-gradient-to-br from-white via-transparent to-white rounded-xl p-0.5 hide-scrollbar">
                    <div className="w-full bg-black rounded-xl">
                        <div className="w-full">
                            <div className="p-2.5 space-y-2.5 w-full">
                                {
                                    Array.from({ length: 10 }).map((_, i) => <div className="bg-black w-full h-64 bg-gradient-to-br from-white via-transparent to-white rounded-xl p-0.5">
                                        <div className="bg-black w-full h-full rounded-xl"></div>
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