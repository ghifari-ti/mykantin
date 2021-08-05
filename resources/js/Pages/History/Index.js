import {Link, usePage} from "@inertiajs/inertia-react";
import {MdKeyboardArrowLeft, MdStar} from "react-icons/md";
import React, {useEffect, useState} from "react";

const Index = ()=>{
    const {order} = usePage().props

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    useEffect(()=>{
        console.log(order)
    }, [])

    return(
        <div className="flex justify-center">
            <div className="w-full md:w-9/12 ">
                <div className="bg-blue-500 grid grid-cols-6">
                    <div className="flex justify-center items-center text-2xl mt-1 text-white">
                        <Link href="/app/home">
                            <MdKeyboardArrowLeft size={50} />
                        </Link>
                    </div>
                    <div className="col-span-5 flex items-center text-white">
                        <p className="text-2xl font-bold">Riwayat Pesanan</p>
                    </div>

                </div>
                <div className="mt-5 mx-5">
                    {Object.keys(order).map((key)=>{
                        return (
                            <div key={key} className="grid grid-cols-7 border-t-2 border-b-2 py-2">
                                <div className="col-span-2 p-2">
                                    <img className="img-fluid md:w-56 md:h-36 rounded object-cover" src="https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2017/09/18/dinkes-sebut-ratusan-kantin-sekolah-kurang-sehat_m_14211.jpeg"/>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-lg">Kantin A</p>
                                    {Object.keys(JSON.parse(order[key].items)).map((item) =>{
                                        var it = JSON.parse(order[key].items)
                                        return (
                                            <p key={item} className="text-sm">{it[item].name} x{it[item].qty}</p>
                                        )
                                    })}

                                </div>
                                <div className="col-span-2 text-right">
                                    <p className="text-sm">Sunday</p>
                                    <p>{formatter.format(order[key].total_price)}</p>
                                    {(order[key].status == "failed") ? <p className="font-medium text-red-500">Gagal</p>:
                                        <p className="font-medium text-green-500">Sukses</p>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Index
