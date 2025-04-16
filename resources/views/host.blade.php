@extends('layouts.app', ['data'=>$data])


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
          const soal = postServer('/ajax/ambilSoalTerakhir', {
            key: @json($data['key']),
            created_at: last_created_at,
          }, {
            berhasil: res => {
              console.log(res);
              if(res.message == "Terdapat soal terbaru"){
                $('#soal').html(res.soal.soal_text);
                $('#jawaban').html(res.soal.jawaban);
                $('#banyakSoal').html(res.banyakSoal);
                $('#lokasi-materi').html(res.soal.lokasi+" - "+res.soal.materi);
                MathJax.typesetPromise($('#jawaban'));
              }
            },
          })
        }, 3000);
      });
    </script>
@endsection