import OrderLayout from "../../Layouts/OrderLayout";
import {Button} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import Lottie from "react-lottie";
import * as Masak from "../Lottie/Masak.json";
import * as Delivery from "../Lottie/Delivery.json";
import {MdSend} from "react-icons/md";
import {usePage} from "@inertiajs/inertia-react";
import axios from "axios";
import { Widget, addResponseMessage, renderCustomComponent } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../Custom/chat.css';

const WaitProcess = ({status, propMiddleware})=>{
    const [item, setItem] = useState({})
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        window.Echo.private(`chat-${propMiddleware.id_order}`)
            .listen('SendChat', (e) => {
                console.log(e)
                addResponseMessage(e.message)
            })

        axios.post(propMiddleware.base_url + '/api/getorder', {
            'id_order': propMiddleware.id_order
        })
            .then((res) => {
                var items = JSON.parse(res.data.items)
                Object.keys(items).map((key)=>{
                    var _total = 0
                    _total += items[key].qty*items[key].price
                    setTotal(total + _total)

                })
                setItem(items)
            })
    }, [])

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };

    const customButton = (handleToggle)=>{
        return(
            <div className="flex justify-center my-10">
                <Button onClick={handleToggle} color="blue" ripple="light">
                    <MdSend size={25} className="mr-2"/> Chat Penjual
                </Button>
            </div>
        )
    }

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    return (
        <>
            <div className="flex justify-center items-end h-full">
                <div>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: (status == 'process' ? Masak : Delivery),
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={300}
                        width={300}/>
                    <div className="w-96 md:w-full h-72 bg-white rounded px-5 py-3">
                        <p>{status == "process" ? 'Pesananmu diperkirakan siap pada:' : 'Pesanan sedang dikirim'}</p>
                        <p className="text-2xl font-bold">11:50 - 12:00</p>
                        <div className="my-2">
                            <hr/>
                            {Object.keys(item).map((key)=>{
                                return(
                                    <div key={key} className="grid grid-cols-6 my-1">
                                        <div className="col-span-5">
                                            <p>{item[key].name}</p>
                                        </div>
                                        <div>
                                            x{item[key].qty}
                                        </div>
                                    </div>
                                )
                            })}

                            <hr/>
                            <div className="grid grid-cols-6 my-1">
                                <div className="col-span-4">
                                    <p className="font-medium">Total</p>
                                </div>
                                <div className="col-span-2">
                                    {formatter.format(total)}
                                </div>
                            </div>
                            <Widget
                                    launcher={handleToggle => customButton(handleToggle)}
                                    handleNewUserMessage={handleNewUserMessage}
                                    title="Kantin A"
                                    subtitle="Pak jey"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

WaitProcess.layout = pages => <OrderLayout pages={pages}/>

export default WaitProcess;
