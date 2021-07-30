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

Route::get('/app', [\App\Http\Controllers\BaseController::class, 'index']);
Route::get('/app/register', [\App\Http\Controllers\BaseController::class, 'register']);
Route::post('/app/register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('/app/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::get('/app/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
Route::get('/app/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/app/kantin', [App\Http\Controllers\HomeController::class, 'kantin'])->name('kantin');


Route::get('/test', function (){
    event(new \App\Events\RealTimeMessage('Hello!'));
});

/*Auth::routes();*/


