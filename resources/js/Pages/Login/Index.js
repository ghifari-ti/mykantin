import React, {useEffect} from 'react'
import LoginLayout from "../../Layouts/LoginLayout";
import {Button, InputIcon} from "@material-tailwind/react";
import Input from "@material-tailwind/react/Input";
import {useForm, usePage} from "@inertiajs/inertia-react";
import toast, {Toaster} from "react-hot-toast";

const IndexLogin = ()=>{
    const {flash} = usePage().props
    const {data, setData, post, processing, errors, reset, wasSuccessful} = useForm({
        handphone: '',
    })

    useEffect(()=>{
        if(flash.reg_status == 'gagal')
        {
            toast.error("No hp tidak ditemukan")
        }
    }, [flash])

    function changeData(e)
    {
        const key = e.target.id;
        const value = e.target.value;
        setData(key, value)
    }

    function submitForm(e)
    {
        e.preventDefault()
        post('/app/login')
    }

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />

            <div className="flex items-center" style={{height: 400}}>
                <div className="w-full">
                    <InputIcon
                        id="handphone"
                        value={data.handphone}
                        type="text"
                        color={errors.handphone ? 'red':'blue'}
                        size="regular"
                        outline={false}
                        placeholder="No Handphone"
                        iconFamily="material-icons"
                        iconName={errors.handphone ? 'error': ''}
                        error={errors.handphone ? true:false}
                        onChange={changeData}
                    />
                    <div className="flex justify-center mt-5">
                        <Button color="blue" ripple="light" onClick={submitForm}>Login</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
IndexLogin.layout = page => <LoginLayout page={page} />

export default IndexLogin;
