import OrderLayout from "../../Layouts/OrderLayout";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {useEffect, useState} from "react";
import {MdStar} from "react-icons/md";
import {Button} from "@material-tailwind/react";
import {useForm} from "@inertiajs/inertia-react";
import axios from "axios";

const DeliverySuccess= ({propMiddleware})=>{
    const {post, data, setData} = useForm({'id_order': 0,
        'id_store': 0,
        'star': 0,
        'user_id': 0,})
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [item, setItem] = useState({})
    const [price, setPrice] = useState(0)

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    function onSelesai(e)
    {
         e.preventDefault()
         post('/app/finishorder')
    }

    function changeStar(value)
    {
        setRating(value)
        setData({...data, star: value})
        console.log(value)
    }

    useEffect(()=>{
        axios.post(propMiddleware.base_url + '/api/getorder', {
            'id_order': propMiddleware.id_order
        })
            .then((res) => {
                console.log(res)
                setPrice(res.data.total_price)
                var items = JSON.parse(res.data.items)
                setItem(items)
                setData({...data,
                    id_order: res.data.id,
                    user_id: res.data.user_id
                })
            })
    }, [])

    useEffect(()=>{

        if(rating == 1)
        {
            setComment('Kok bintangnya dikit kak? maaf ya pelayanan kami kurang maksimal :(')
        } else if(rating == 2)
        {
            setComment('Ada yang kurang ya kak? :(, feel free ya berikan review kamu ke kami ;)')
        }
        else if(rating == 3)
        {
            setComment('Makasih kak!, kami akan terus meningkatkan layanan ;)')
        }
        else if(rating == 4)
        {
            setComment('Hampir sempurna!, jangan segan kak beri masukan untuk kami :)')
        }
        else if(rating == 5){
            setComment('Sempurna!, terima kasih kak telah menggunakan layanan kami.')
        }
    }, [rating])

    return (
        <>
            <div className="flex justify-center items-center h-full">
                <div className="w-96">
                    <div className="text-center text-2xl text-white font-medium">
                        Pesanan Selesai!
                    </div>
                    <div className="bg-white rounded p-3">
                        {Object.keys(item).map((key)=>{
                            return(
                                <div key={key} className="grid grid-cols-9 my-1">
                                    <div className="col-span-2 bg-blue-500 mr-2">
                                        <img className="rounded" src="https://tastynesia.com/wp-content/uploads/2020/01/Resep-Ayam-Geprek-Crispy-1200x900.jpg"/>
                                    </div>
                                    <div className="col-span-6">
                                        <p className="font-medium">{item[key].name}</p>
                                        <p style={{fontSize: 12}}>{formatter.format(item[key].price)}</p>
                                    </div>
                                    <div className="col-span-1">
                                        x {item[key].qty}
                                    </div>
                                </div>
                            )
                        })}

                        <hr/>
                        <div className="text-right text-sm">
                            Total pesanan: {formatter.format(price)}
                        </div>
                    </div>
                    <div className="text-center text-white font-medium mt-5">
                        <p>Bagaimana pengalaman pesanmu?</p>
                        <div className="flex justify-center">
                            <ReactStars count={5}
                                        onChange={changeStar}
                                        size={45}
                                        isHalf={false}
                                        emptyIcon={<MdStar className="text-white"/>}
                                        filledIcon={<MdStar className="text-yellow-400"/> }
                            />
                        </div>
                    </div>
                    <div className="text-sm text-center my-1 text-white">
                        {comment}
                    </div>
                    <div className="mt-5">
                        <form onSubmit={onSelesai}>
                            <Button block={true} buttonType="submit" ripple="light">Selesai</Button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )

}

DeliverySuccess.layout = pages => <OrderLayout pages={pages}/>

export default DeliverySuccess
