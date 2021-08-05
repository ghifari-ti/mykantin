<?php

namespace App\Http\Controllers;

use App\Models\Otpcode;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;
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

        $otp = new Otpcode;
        $otp->user_id = $user->id;
        $otp->code = rand(100000, 999999);
        $otp->is_used = false;
        $otp->expired = Carbon::now('Asia/Jakarta')->addMinutes(1);
        $otp->save();

        $pesan = "Kode OTP myKantin Kamu : \n\n".$otp->code."\n\nJangan beritahu ke siapapun.";
        $response = Http::asForm()->withHeaders([
            'authorization' => 'alghi1234'
        ])->post('https://bot.ghifar.dev/sendText', [
            'clientName' => 'nnHeKIRwDTAI5IJqAAAA',
            'pesan' => $pesan,
            'number' => $user->handphone,
        ]);

        return redirect('app/otpcheck/'.$otp->id);
    }

    public function checkOtp($id)
    {
        $otp = Otpcode::where('id', $id)->first();

        if(!$otp || $otp->is_used)
        {
            return redirect('/app');
        }
        $user = User::find($otp->user_id);
        return Inertia::render('Login/Otp', [
            'otp_id' => $id,
            'handphone'=> $user->handphone,
        ]);
    }

    public function verifyOtp(Request $request)
    {
        $otp = Otpcode::where('id', $request->otp_id)->first();
        if($otp->code !== $request->otp)
        {
            throw ValidationException::withMessages(['otp' => 'Kode OTP salah']);
        }
        if(Carbon::now('Asia/Jakarta')->greaterThan($otp->expired))
        {
            throw ValidationException::withMessages(['otp' => 'Kode OTP kedaluwarsa']);
        }
        $otp->is_used = true;
        $otp->save();
        $user = User::find($otp->user_id);
        Auth::login($user);

        return redirect('/app');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Inertia::render('Login/Index');
    }
}
