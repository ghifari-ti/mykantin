<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('authapp');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return Inertia::render('Dashboard/Index');
    }

    public function kantin()
    {
        return Inertia::render('Kantin/Index');
    }

    public function history()
    {
        $order = Order::where('user_id', Auth::id())->get();
        return Inertia::render('History/Index', [
            'order' => $order
        ]);
    }
}
