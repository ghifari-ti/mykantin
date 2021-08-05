import {MdAdd, MdPlusOne, MdRemove} from "react-icons/md";
import {useEffect, useState} from "react";
import {Button} from "@material-tailwind/react";

const ListMenu = ({item, setItem, trigger, setTrigger})=>{

    useEffect(()=>{
        console.log(item)
    }, [trigger])

    function addItem(content)
    {
        let found = false;
        if(item[content.id])
        {
            item[content.id].qty++
        } else {
            item[content.id] = content
        }
        setTrigger(!trigger)
    }

    function removeItem(id)
    {
        if(item[id])
        {
            if(item[id].qty==1)
            {
                delete item[id]
            } else{
                item[id].qty--
            }
        }
        setTrigger(!trigger)
    }

    return (
        <>
            <div>
                <div>
                    <p className="font-medium ml-2 text-xl">Makanan</p>
                </div>
                <div className="grid grid-cols-4 mt-2 border-b-2 border-blue-500 p-2">
                    <div className="mr-2">
                        <img
                            className="h-28 w-32 rounded object-cover"
                            src="https://awsimages.detik.net.id/community/media/visual/2021/03/29/trik-masak-nasi-goreng-3.jpeg?w=700&q=90" />
                    </div>
                    <div className="col-span-3 ml-2">
                        <p className="text-xl text-blue-800 font-bold">Ayam Geprek Mozarella</p>
                        <p style={{ fontSize: 14}}>
                            ayam goreng mozarella mantap
                        </p>
                        <div className="flex justify-between items-end h-16">
                            <div>
                                Rp.<span className="line-through">15.000</span>
                                <span className="text-green-700"> 4.000</span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <button onClick={()=>{
                                    addItem({
                                        id: 1,
                                        name: 'ayam goreng mozarella mantap',
                                        price: 4000,
                                        qty: 1,
                                    })
                                }}>
                                    <MdAdd/>
                                </button>
                                <p className="bg-blue-500 p-1 text-white rounded">
                                    {item[1]? item[1].qty: '0'}
                                </p>
                                <button onClick={()=>{
                                    removeItem(1)
                                }}>
                                    <MdRemove />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-2 border-b-2 border-blue-500 p-2">
                    <div className="mr-2">
                        <img
                            className="h-28 w-32 rounded object-cover"
                            src="https://awsimages.detik.net.id/community/media/visual/2021/03/29/trik-masak-nasi-goreng-3.jpeg?w=700&q=90" />
                    </div>
                    <div className="col-span-3 ml-2">
                        <p className="text-xl text-blue-800 font-bold">Ayam Geprek Godzilla</p>
                        <p style={{ fontSize: 14}}>
                            ayam goreng gozilla dah mantap
                        </p>
                        <div className="flex justify-between items-end h-16">
                            <div>
                                Rp.<span className="line-through">15.000</span>
                                <span className="text-green-700"> 7.000</span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <button onClick={()=>{
                                    addItem({
                                        id: 2,
                                        name: 'ayam goreng godzilla',
                                        price: 7000,
                                        qty: 1,
                                    })
                                }}>
                                    <MdAdd/>
                                </button>
                                <p className="bg-blue-500 p-1 text-white rounded">
                                    {item[2]? item[2].qty: '0'}
                                </p>
                                <button onClick={()=>{
                                    removeItem(2)
                                }}>
                                    <MdRemove />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ListMenu
