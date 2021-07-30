
const ListMenu = ()=>{
    return (
        <>
            <div>
                <div className="grid grid-cols-4">
                    <div className="mr-2">
                        <img
                            className="h-28 w-28 rounded"
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
                            <p>dd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListMenu
