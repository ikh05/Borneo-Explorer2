<div style="padding-top: 4.5rem;" class="d-flex flex-column" >
   <p class="d-blok d-md-none text-center">{{ $name }}</p>
   <div id="{{ Str::remove(' ', $name) }}" lokasi class="pilihan w-100 h-100 d-flex flex-reverse justify-content-between">
      <!-- pilihan soal -->
      <div class="d-flex flex-wrap puzzle-grid flex-shrink-0 align-items-between justify-content-between flex-grow-1 mx-3 " style=" margin-right: 2rem;" >
         @for ($i = 0; $i < 9; $i++)
         <x-card.soal name="{{ $name }}" x="{{ $i%3 }}" y="{{ floor($i/3) }}">{{ $i+1 }}</x-card.soal>
         @endfor
      </div>

      <!-- informasi -->
      <x-soal.info-kabupaten :detail="$detail">{{ $name }}</x-soal.info-kabupaten>
   </div>
  </div>

  