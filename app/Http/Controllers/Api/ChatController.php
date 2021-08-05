<?php

namespace App\Http\Controllers\Api;

use App\Events\SendChat;
use App\Models\Chat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChatController extends Controller
{
    public function test(Request $request)
    {
        $chat = new Chat;
        $chat->order_id = $request->order_id;
        $chat->user_id = '0';
        $chat->chat = $request->chat;
        $chat->save();
        broadcast(new SendChat($request->chat, $request->order_id));

        return response()->json("Success", 200);
    }
}
