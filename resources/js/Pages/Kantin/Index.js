import React, {useEffect, useState} from "react";
import {Link} from "@inertiajs/inertia-react";
import ListMenu from "./ListMenu";
import {MdKeyboardArrowLeft, MdStar} from "react-icons/md";
import {Button} from "@material-tailwind/react";
import Checkout from "./Checkout";
import {Transition} from "@headlessui/react";

const Index = ()=>{
    const [item, setItem] = useState({})
    const [trigger, setTrigger] = useState(false)
    const [checkout, setCheckout] = useState(false)
    const [sumItem, setSumItem] = useState(0)

    useEffect(()=>{
        setSumItem(Object.keys(item).length)
        console.log(sumItem)
    },[trigger])

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
                        <ListMenu item={item} setItem={setItem} trigger={trigger} setTrigger={setTrigger}/>
                    </div>
                </div>
            </div>
            {sumItem > 0 ? <div className="fixed bottom-10 left-0 right-0">
                <div className="flex justify-center">
                    <Button color="blue" onClick={() => setCheckout(!checkout)}>Checkout</Button>
                </div>
            </div>: ''}
            <div>
                <div>
                        {checkout? <Checkout checkout={checkout} setCheckOut={setCheckout} item={item} />: ''}
                </div>
            </div>


        </>
    )
}

export default Index
