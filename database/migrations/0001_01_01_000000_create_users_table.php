<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Tabel games
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->timestamps();
        });

        // Tabel sessions (default Laravel session table)
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        // Tabel soals
        Schema::create('soals', function (Blueprint $table) {
            $table->id();
            $table->string('lokasi');
            $table->string('materi');
            $table->text('soal_text');
            $table->text('soal_sound')->nullable();
            $table->string('jawaban');
            $table->timestamps();

            // Relasi ke tabel games
            $table->foreignId('game_id')
                  ->on('games')
                  ->onDelete('cascade')     // Jika game dihapus, semua soal ikut terhapus
                  ->onUpdate('cascade');    // Jika id game berubah (jarang), soal akan ikut
        });

        // siswa
        Schema::create('kelompok', function (Blueprint $table) {
            $table->id(); // primary key auto increment
            $table->unsignedInteger('no_urut');
            $table->string('nama');
            $table->string('lokasi');
            $table->foreignId('game_id')->constrained('games')->onDelete('cascade');
            $table->unsignedInteger('salah')->default(0);
            $table->unsignedInteger('benar')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soals');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('games');
    }
};
