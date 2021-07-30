import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import {Button, Icon, NavItem} from "@material-tailwind/react";

const LoginLayout = ({page})=>{
    const {asset} = usePage().props

    return (
        <main className="h-screen bg-blue-500">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-96 p-2 rounded-lg" style={{height: 550}}>
                    <div className="flex justify-center">
                        <img src={asset+'/logo-biru.png'} className="w-16"/>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center">
                            <Link href="/app">
                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="dark"
                                >
                                    Login
                                </Button>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/app/register">
                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="dark"
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <hr className="my-5"/>
                    {page}
                </div>
            </div>
        </main>
    )
}

export default LoginLayout
