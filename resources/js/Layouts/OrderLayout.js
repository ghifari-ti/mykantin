import Progress from "@material-tailwind/react/Progress";
import React, {useEffect, useState} from "react";
import WaitConfirm from "../Pages/Order/WaitConfirm";
import WaitProcess from "../Pages/Order/WaitProcess";
import {useForm, usePage} from "@inertiajs/inertia-react";
import DeliverySuccess from "../Pages/Order/DeliverySuccess";
import axios from "axios";
import Echo from "laravel-echo";
import {Button} from "@material-tailwind/react";
import {MdSend} from "react-icons/md";


const OrderLayout = ({pages}) => {
    const propMiddleware = usePage().props
    const {asset} = usePage().props
    const [status, setStatus] = useState('req')
    const [loader, setLoader] = useState(100)
    const [confirm, setConfirm] = useState(false)

    useEffect(()=>{
        window.Echo.private('statusupdate').listen('StatusUpdate', (e) =>{
            console.log(e)
            setStatus(e.status)
        })
    }, [])

    useEffect(() => {
        if (loader == 0) {
            const data = {
                'id_order': propMiddleware.id_order,
                'status': 'failed',
            }
            axios.post(propMiddleware.base_url + '/api/changeorder', data)
                .then(res => {
                    console.log(res)
                    window.location.href = propMiddleware.base_url +'/app'
                })

        }
    }, [loader])

    return (
        <>
            <div className="absolute right-0 top-0">
                <img className="w-56 h-56" src={asset + '/bakso-putih.png'}/>
            </div>
            <div className="h-screen w-screen bg-blue-500">

                {status == 'req' ? <WaitConfirm confirm={confirm}
                                                loader={loader}
                                                setLoader={setLoader} propMiddleware={propMiddleware}/> : ''}
                {(status == 'process' || status == 'delivery') ? <WaitProcess status={status} propMiddleware={propMiddleware}/> : ''}
                {status == 'success' ? <DeliverySuccess propMiddleware={propMiddleware}/> : ''}

            </div>
        </>
    )
}

export default OrderLayout
