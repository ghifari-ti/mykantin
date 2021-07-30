<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'handphone' => 'required|unique:users',
            'password' => 'required|confirmed',
        ]);

        $user = new User;
        $user->name = $request->name;
        $handphone = $request->handphone;
        if(substr($handphone,0, 1) == '+')
        {
            $handphone = substr($handphone, 1);
        }

        if(substr($handphone,0, 1) == '0')
        {
            $handphone = "62".substr($handphone, 1);
        }
        $user->handphone = $handphone;
        $user->password = Hash::make($request->password);
        $user->save();
        Inertia::share('reg_status', 'sukses');
        return redirect()->back();
    }

    public function login(Request $request)
    {
        $handphone = $request->handphone;
        if(substr($handphone,0, 1) == '+')
        {
            $handphone = substr($handphone, 1);
        }

        if(substr($handphone,0, 1) == '0')
        {
            $handphone = "62".substr($handphone, 1);
        }

        $user = User::where('handphone', $handphone)->first();
        if($user == null)
        {
            return redirect('/app')->with(['reg_status' => 'gagal']);
        }

        Auth::login($user);
        return redirect('/app/home');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Inertia::render('Login/Index');
    }
}
