<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('app')->group(function(){
    Route::get('/', [\App\Http\Controllers\BaseController::class, 'index']);
    Route::get('/register', [\App\Http\Controllers\BaseController::class, 'register']);
    Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::get('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);
    Route::get('/kantin', [App\Http\Controllers\HomeController::class, 'kantin']);
    Route::get('/history', [\App\Http\Controllers\HomeController::class, 'history']);
    Route::get('/otpcheck/{id}', [\App\Http\Controllers\AuthController::class, 'checkOtp']);
    Route::post('/otpcheck', [\App\Http\Controllers\AuthController::class, 'verifyOtp']);
    //Order process
    Route::post('/reqorder', [\App\Http\Controllers\OrderController::class, 'reqOrder']);
    Route::get('/reqorder', [\App\Http\Controllers\OrderController::class, 'testComponent']);
    Route::post('/finishorder', [\App\Http\Controllers\OrderController::class, 'finishOrder']);
    /*Route::get('/waitdelivery', [\App\Http\Controllers\OrderController::class, 'waitDelivery']);
    Route::get('/waitprocess', [\App\Http\Controllers\OrderController::class, 'waitProcess']);*/

});






Route::get('/test', function (){
    event(new \App\Events\RealTimeMessage('Hello!'));
});

/*Auth::routes();*/


