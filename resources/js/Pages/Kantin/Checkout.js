import {Button} from "@material-tailwind/react";
import {Transition} from "@headlessui/react";
import {Link, useForm} from "@inertiajs/inertia-react";

const Checkout = ({checkout, setCheckOut, item})=>{
    const {data, setData, post} = useForm({data: item})
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    function createReqOrder(e)
    {
        e.preventDefault()
        setCheckOut(!checkout)
        post('/app/reqorder')
    }

    return (
        <>

                <div className="absolute bottom-0 top-0 w-full bg-blue-500">
                    <div className="flex justify-center items-center h-full">
                        <div className="w-96">
                            <p className="text-white font-medium text-2xl">Checkout</p>
                            <hr className="border-2 rounded"/>
                            {Object.keys(item).map((key)=>{
                                return(
                                    <div key={key} className="grid grid-cols-6 text-white border-2 border-white rounded my-2 p-1">
                                        <div className="col-span-4">
                                            <p className="text-xl">- {item[key].name}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p>x{item[key].qty}</p>
                                            <p>{formatter.format(item[key].qty*item[key].price)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="flex justify-start gap-2">
                                <form onSubmit={createReqOrder}>
                                    <Button buttonType="submit">
                                        Beli
                                    </Button>
                                </form>

                                <Button onClick={() => setCheckOut(!checkout)}>
                                    Tutup
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    )
}

export default Checkout
