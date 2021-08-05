<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('authapp');
    }

    public function reqOrder(Request $request)
    {
        $order = new Order;
        $order->items = json_encode($request->data);
        $total_price = 0;
        foreach ($request->data as $item)
        {
            $total_price += $item['price']*$item['qty'];
        }
        $order->total_price = $total_price;
        $order->discount = 0;
        $order->voucher_id = 0;
        $order->user_id = Auth::id();
        $order->store_id = 0;
        /*
         * req = request ke penjual
         * failed = penjual menolak
         * process = penjual menyiapkan makanan
         * delivery = penjual mengirim makanan
         * success = pengantaran selesai
         */
        $order->status = 'req';
        $order->save();

        return Inertia::render('Order/WaitConfirm',[
            'id_order' => $order->id
        ]);
    }

    public function testComponent()
    {
        return Inertia::render('Order/WaitProcess');
    }

    public function waitDelivery()
    {
        return Inertia::render('Order/WaitDelivery');
    }

    public function waitProcess()
    {
        return Inertia::render('Order/WaitProcess');
    }

    public function finishOrder(Request $request)
    {
        $order = Order::find($request->id_order);
        $order->status = 'finish';
        $order->save();
        $rating = new Rating;
        $rating->id_item = $request->id_order;
        $rating->id_store = $request->id_store;
        $rating->star = $request->star;
        $rating->user_id = Auth::id();
        $rating->save();
        return redirect('/app');
    }
}
