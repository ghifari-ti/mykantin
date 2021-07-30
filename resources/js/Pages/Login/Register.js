import React, {useEffect} from 'react';
import LoginLayout from "../../Layouts/LoginLayout";
import {Button, InputIcon} from "@material-tailwind/react";
import {useForm, usePage} from "@inertiajs/inertia-react";
import toast, {Toaster} from "react-hot-toast";


const Register = ()=>{
    const {data, setData, post, processing, errors, reset, wasSuccessful} = useForm({
        name: '',
        handphone: '',
        password: '',
        password_confirmation: '',
    })

    useEffect(()=>{
        if(wasSuccessful)
        {
            reset('name', 'handphone', 'password', 'password_confirmation');
            toast.success("Berhasil registrasi");

        }
    }, [wasSuccessful])

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

    function submitForm(e)
    {
        e.preventDefault()
        post('/app/register')
    }

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <div className="flex items-center" style={{height: 400}}>
                <div className="w-full">
                    <div className="my-2">
                        <InputIcon
                            id="name"
                            value={data.name}
                            type="text"
                            color="blue"
                            size="regular"
                            outline={false}
                            placeholder="Nama"
                            iconFamily="material-icons"
                            iconName={errors.name ? 'error': ''}
                            error={errors.name ? true:false}
                            onChange={changeData}
                        />
                    </div>
                    <div className="my-2">
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
                    </div>
                    <div className="my-2">
                        <InputIcon
                            id="password"
                            value={data.password}
                            type="password"
                            color={errors.password ? 'red':'blue'}
                            iconFamily="material-icons"
                            iconName={errors.password ? 'error': ''}
                            error={errors.password? true:false}
                            size="regular"
                            outline={false}
                            placeholder="Password"
                            onChange={changeData}
                        />
                    </div>
                    <div className="my-2">
                        <InputIcon
                            id="password_confirmation"
                            value={data.password_confirmation}
                            type="password"
                            color={errors.password_confirmation ? 'red':'blue'}
                            iconFamily="material-icons"
                            iconName={errors.password_confirmation ? 'error': ''}
                            error={errors.password_confirmation ? true:false}
                            size="regular"
                            outline={false}
                            placeholder="confirm password"
                            onChange={changeData}
                        />
                    </div>
                    <div className="flex justify-center mt-5">
                        <Button color="blue" ripple="light" onClick={submitForm}>Register</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

Register.layout = page => <LoginLayout page={page} />

export default Register
