<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GameController;

Route::get('/', [GameController::class, 'first']);
Route::post('/', [GameController::class, 'start']);

Route::get('/host/{key}', [GameController::class, 'host']);
Route::post('/ajax/ambilSoalTerakhir', [GameController::class, 'ambilSoalTerakhir']);

Route::post('/simpan-soal', [GameController::class, 'simpanSoal']);
Route::post('/ajax/simapnSoal', [GameController::class, 'simpanSoal']);