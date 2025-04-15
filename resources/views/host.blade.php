@extends('layouts.app', ['data'=>$data])

@dd(url('/'))

@section('main')
    <div class="controller m-3  text-center">
      <div class="mb-2">
        <p class="h1"><strong>Kode Game</strong></p>
        <p class="h2">{{ $data['key'] }}</p>
      </div>
      <hr class="m-1">
      <hr class="mx-1 mb-1 mt-0">
      <div>
        <p class="mb-1 fs-5" id="lokasi-materi"></p>
        <hr class="mx-3 my-1">
        <p class="mb-0">Banyak Soal yang Sudah Dibuat</p>
        <p id="banyakSoal">-</p>
        <hr class="mx-3 my-1">
        <p class="mb-0">Soal</p>
        <p id="soal">-</p>
        <hr class="mx-3 my-1">
        <p class="mb-0">Jawaban</p>
        <p id="jawaban">-</p>
      </div>
    </div>

    <script>
      $(document).ready(function () {
        let last_created_at = '-';
        setInterval(() => {
          const soal = getServer('/ajax/ambilSoalTerakhir', {
            key: @json($data['key']),
            created_at: last_created_at,
          }, function (response) {
            if(response.message == "Terdapat soal terbaru"){
              $('#soal').html(response.soal.soal_text);
              $('#jawaban').html(response.soal.jawaban);
              $('#banyakSoal').html(response.banyakSoal);
              $('#lokasi-materi').html(response.soal.lokasi+" - "+response.soal.materi);
              MathJax.typesetPromise($('#jawaban'));
            }
          })
        }, 3000);
      });
    </script>
@endsection