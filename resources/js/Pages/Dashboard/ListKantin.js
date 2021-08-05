import React from "react";
import {Icon} from "@material-tailwind/react";
import {Link} from "@inertiajs/inertia-react";
import {MdStar} from "react-icons/md";

const ListKantin= ()=>{
    return (
        <>
            <Link href="/app/kantin">
                <div className="grid grid-cols-7 border-t-2 border-b-2 py-2">
                    <div className="col-span-2 p-2">
                        <img className="img-fluid md:w-56 md:h-36 rounded object-cover" src="https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2017/09/18/dinkes-sebut-ratusan-kantin-sekolah-kurang-sehat_m_14211.jpeg"/>
                    </div>
                    <div className="col-span-3">
                        <p className="text-lg">Kantin A</p>
                        <p className="text-sm">ayam geprek blablabla</p>
                    </div>
                    <div className="col-span-2 text-right">
                        <p className="text-sm">09:00 - 19:00</p>
                        <div className="inline-flex">
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/app/kantin">
                <div className="grid grid-cols-7 border-t-2 border-b-2 py-2">
                    <div className="col-span-2 p-2">
                        <img className="img-fluid md:w-56 md:h-36 rounded object-cover" src="https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2017/09/18/dinkes-sebut-ratusan-kantin-sekolah-kurang-sehat_m_14211.jpeg"/>
                    </div>
                    <div className="col-span-3">
                        <p className="text-lg">Kantin A</p>
                        <p className="text-sm">ayam geprek blablabla</p>
                    </div>
                    <div className="col-span-2 text-right">
                        <p className="text-sm">09:00 - 19:00</p>
                        <div className="inline-flex">
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                            <div className="text-blue-400">
                                <MdStar size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default ListKantin
