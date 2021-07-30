<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BaseController extends Controller
{
    public function index()
    {
        if(Auth::check())
        {
            return redirect('/app/home');
        }
        return Inertia::render('Login/Index');
    }

    public function register()
    {
        return Inertia::render('Login/Register');
    }
}
