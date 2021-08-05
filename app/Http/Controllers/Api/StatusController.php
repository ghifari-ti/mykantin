<?php

namespace App\Http\Controllers\Api;

use App\Events\StatusUpdate;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function changeOrder(Request $request)
    {
        $order = Order::find($request->id_order);
        $order->status = $request->status;
        $order->save();

        broadcast(new StatusUpdate($request->status));
        return "OK";
    }

    public function getOrder(Request $request)
    {
        $order = Order::find($request->id_order);

        return response()->json($order, 200);
    }
}
