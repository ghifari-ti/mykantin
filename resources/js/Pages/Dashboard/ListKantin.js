import React from "react";
import {Icon} from "@material-tailwind/react";
import {Link} from "@inertiajs/inertia-react";
import {MdStar} from "react-icons/md";

const ListKantin= ()=>{
    return (
        <>
            <Link href="/app/kantin">
                <div className="grid grid-cols-7 border-t-2 border-b-2 py-2">
                    <div>
                        img
                    </div>
                    <div className="col-span-4">
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
            <div className="grid grid-cols-7 border-t-2 border-b-2 py-2">
                <div>
                    img
                </div>
                <div className="col-span-4">
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
        </>
    )
}

export default ListKantin
