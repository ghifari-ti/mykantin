import React from "react";
import {Link} from "@inertiajs/inertia-react";
import ListMenu from "./ListMenu";
import {MdKeyboardArrowLeft, MdStar} from "react-icons/md";

const Index = ()=>{
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full md:w-9/12 ">
                    <div className="bg-blue-500 grid grid-cols-6">
                        <div className="flex justify-center items-center text-2xl mt-1 text-white">
                            <Link href="/app/home">
                                <MdKeyboardArrowLeft size={50} />
                            </Link>
                        </div>
                        <div className="col-span-5 text-white mt-2">
                            <p className="text-2xl font-bold">Kantin A</p>
                            <p className="text-sm">Jam Buka: 07:00 - 19:00</p>
                            <hr/>
                            <div className="inline-flex mt-1">
                                <div className="text-white">
                                    <MdStar size={20}/>
                                </div>
                                <div className="text-white">
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
                    <div className="mt-5 mx-5">
                        <ListMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
