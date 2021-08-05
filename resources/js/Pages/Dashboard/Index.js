import {Fragment, useEffect, useRef, useState} from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import {Icon, InputIcon} from "@material-tailwind/react";
import {Link, usePage} from "@inertiajs/inertia-react";
import {MdHistory, MdPerson, MdStar} from "react-icons/md";
import {Menu, Transition } from "@headlessui/react";
import ListKantin from "./ListKantin";
import ListPromo from "./ListPromo";


const Index = ()=>{
    const props = usePage().props

    function changePlace(e)
    {
        setDataOrder({...dataOrder, tempat: e.state.value()})
    }

    return (
        <>
            <div className="w-full md:w-9/12 ">
                <div className="bg-blue-500">
                    <div className="grid grid-cols-5 w-full pt-3">
                        <div className="col-span-2 flex justify-start gap-2 text-white ml-4">

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex justify-center w-full px-1 py-2 text-sm font-medium text-white rounded-md focus:outline-none">
                                            <MdPerson size={30} />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href="logout"
                                                            className={`${
                                                                active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        >
                                                            Keluar
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            <div className="relative inline-block text-left">
                                <div className="inline-flex justify-center w-full px-1 py-2 text-sm font-medium text-white rounded-md focus:outline-none">
                                    <Link href="/app/history">
                                        <MdHistory size={30} />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative inline-block text-left">
                                <div className="inline-flex justify-center w-full px-1 py-2 text-sm font-medium text-white rounded-md focus:outline-none">
                                    <MdStar size={30} />
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center">
                            <img src={props.asset+'/logo-putih.png'} className="w-10" />
                        </div>
                        <div className="col-span-2 flex justify-center items-center bg-white mx-2 md:mx-7 rounded p-1 text-sm text-center">
                            Saldo: 70.000
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 relative rounded-md shadow-sm mx-3">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                            <span className="text-gray-500">
                            <Icon name="place" size="lg" family="material-icons"/>
                            </span>
                            </div>
                            <input type="text" name="price" id="price"
                                   className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                   onChange={changePlace}
                                   placeholder="Mau diantar kemana?"/>
                        </div>

                    </div>
                </div>
                <div className="mx-3 mt-7">
                    <ListKantin/>
                </div>
                <div className="mt-7">
                    <ListPromo/>
                </div>
            </div>
        </>
    )
}
Index.layout = page => <DashboardLayout page={page}/>

export default Index;
