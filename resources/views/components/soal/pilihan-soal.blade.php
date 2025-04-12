<div id="{{ Str::remove(' ', $name) }}" lokasi class="pilihan w-100 h-100 d-flex flex-reverse justify-content-between" style="padding-top: 4.5rem;">
        
    <!-- pilihan soal -->
    <div class="d-flex flex-wrap puzzle-grid flex-shrink-0 align-items-between justify-content-between flex-grow-1" style=" margin-right: 2rem;" >
     @for ($i = 0; $i < 9; $i++)
        <x-card.soal name="{{ $name }}" x="{{ $i%3 }}" y="{{ floor($i/3) }}">{{ $i+1 }}</x-card.soal>
     @endfor
    </div>

    <!-- informasi -->
    <x-soal.info-kabupaten :detail="$detail">{{ $name }}</x-soal.info-kabupaten>
  </div>

  