import OrderLayout from "../../Layouts/OrderLayout";
import Progress from "@material-tailwind/react/Progress";
import {useEffect, useState} from "react";
import {useForm} from "@inertiajs/inertia-react";
import {Button} from "@material-tailwind/react";
import Lottie from "react-lottie";
import * as animationData from "../Lottie/Confirm.json";
import axios from "axios";

const WaitConfirm = ({loader, setLoader, propMiddleware})=>{
    const {get} = useForm('')
    const [time, setTime] = useState(20)
    const maxTime = 20;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const timer = setTimeout(()=>{
        var now = (time/maxTime)*100;
        setLoader(parseFloat(now.toFixed(2)))
        setTime(time - 0.5)
    }, 500)

    function cancelReq()
    {
        clearTimeout(timer)
        axios.post(propMiddleware.base_url + '/api/changeorder', {
            'id_order': propMiddleware.id_order,
            'status': 'failed',
        })
            .then(res => {
                console.log(res)
                window.history.back()
            }).catch(err => {
                console.log(err)
            })

    }

    useEffect(()=>{
        if(loader == 0)
        {
            setTimeout(()=>{
                window.history.back()
            },2000)
            clearTimeout(timer)
        }
    }, [time])

    return(
        <>
            <div className="flex justify-center items-center h-full">
                <div className="w-96">
                    <Lottie
                    options={defaultOptions}
                    height={300}
                    width={300}/>
                    <div className="text-center text-white font-medium">
                        {loader > 0 ? <div>Menunggu Konfirmasi Pesanan</div> : <div className="text-black">
                            Pesanan gagal dilakukan, penjual tidak merespon!
                        </div>}
                    </div>
                    <div className="mt-5">
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400">
                                <div style={{
                                    width: `${loader}%`,
                                    transition: 'width 1s ease'
                                }}
                                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"></div>
                            </div>
                        </div>
                    </div>
                    {loader > 10 ? <div className="my-5">
                        <Button block={true} onClick={cancelReq}>
                        Batalkan
                        </Button>
                        </div> : ''}
                </div>
            </div>
        </>
    )
}

WaitConfirm.layout = pages => <OrderLayout pages={pages} />

export default WaitConfirm
