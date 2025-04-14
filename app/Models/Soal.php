<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Soal extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'soal_text',
        'soal_sound',
        'jawaban',
        'materi',
        'lokasi'
    ];

    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }
}
