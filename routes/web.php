<?php

use App\Http\Controllers\GameController;
use App\Models\Api;
use Illuminate\Support\Facades\Route;


Route::get('/', [GameController::class, 'first']);
Route::post('/', [GameController::class, 'start']);