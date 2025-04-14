<?php

use App\Models\Game;
use App\Models\Soal;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\GameController;


Route::get('/', [GameController::class, 'first']);
Route::post('/', [GameController::class, 'start']);

Route::get('/clear', function () {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return 'Cache cleared';
});

Route::get('/host/{key}', [GameController::class, 'host'])->where('key', '^GAME-[A-Z0-9]{4}-[A-Z0-9]{4}$');

Route::post('/simpan-soal', [GameController::class, 'postSoal']);

Route::get('/host', function(){
    $data = [];
    $data['soal'] = Soal::all();
    $data['game'] = Game::all();

    return view('host', ['data' => $data]);
});