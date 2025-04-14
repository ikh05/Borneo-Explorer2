<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Soal extends Model
{
    use Notifiable;


    protected $fillable = [
        'lokasi',
        'materi',
        'soal_text',
        'soal_sound',
        'game_id',
        'jawaban'
    ];

    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }
}
