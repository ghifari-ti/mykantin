import {Link, useForm, usePage} from "@inertiajs/inertia-react";
import {Button, InputIcon} from "@material-tailwind/react";
import React, {useEffect} from "react";
import toast, {Toaster} from "react-hot-toast";

const Otp = ()=>{
    const {asset} = usePage().props
    const {otp_id} = usePage().props
    const {handphone} = usePage().props
    const {data, setData, post, get, processing, errors, reset, wasSuccessful} = useForm({
        otp_id: 0,
        otp: '',
        handphone: handphone,
    });


    useEffect(()=>{
        console.log(otp_id)
        setData({...data, otp_id: otp_id});
    },[otp_id])

    useEffect(()=>{
        if(Object.keys(errors).length !== 0)
        {
            Object.keys(errors).forEach(key =>{
                toast.error(errors[key])
            })
        }
    }, [errors])

    function changeData(e)
    {
        const key = e.target.id;
        const value = e.target.value;
        setData(key, value)
    }

    function submitOtp(e)
    {
        e.preventDefault()
        post('/app/otpcheck')
    }

    function reSubmitOtp(e)
    {
        e.preventDefault()
        setData({...data, otp: ''})
        post('/app/login')
    }


    return (
        <main className="h-screen bg-blue-500">
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-96 p-2 rounded-lg" style={{height: 550}}>
                    <div className="flex justify-center">
                        <img src={asset+'/logo-biru.png'} className="w-16"/>
                    </div>
                    <hr className="my-5"/>
                    <div className="flex justify-center items-center h-96">
                        <div>
                            <InputIcon
                                id="otp"
                                value={data.otp}
                                type="text"
                                color={errors.otp ? 'red':'blue'}
                                size="regular"
                                outline={false}
                                placeholder="Kode OTP"
                                iconFamily="material-icons"
                                iconName={errors.otp ? 'error': ''}
                                error={errors.otp ? true:false}
                                onChange={changeData}
                            />
                            <div className="flex flex-col justify-center mt-5 gap-3">
                                <Button color="blue" ripple="light" onClick={submitOtp}>Submit</Button>
                                <Button color="blue"
                                        buttonType="link"
                                        rounded={false}
                                        block={false}
                                        iconOnly={false}
                                        onClick={reSubmitOtp}>Kirim OTP baru</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Otp
