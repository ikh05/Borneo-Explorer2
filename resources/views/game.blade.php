
{{-- @dd($data); --}}


@extends('layouts.app', ['data'=>$data])

@section('main')
<script>
    window.setting = {
      lokasi: '',
      materi: '',
      soal_text: '',
      soal_sound: '',
      game_id: @json(isset($data['game']) ? $data['game']->id : ''),
      jawaban: '',
      show_jawaban: @json(isset($data['post']['kunciJawaban']) ? true : false),
      card_click: '',
      pintas: false,
      tujuan: '',
    }
  </script>
  @empty($data['post'])  
    @include('layouts.logo');
  @endempty


   <!-- Kelompok -->
  @isset($data['post'])
    @include('layouts.kelompok', ['kabupaten' => $data['kabupaten']->keys()[0], 'kelompok' => isset($data['post']) ? $data['post']['kelompok'] : 4])  
  @endisset

  <!-- Soal -->
  <x-modal.soal 
    :banyakKelompok="(isste($data['post']) ? $data['post']['kelompok'] : [])"  
    :kabupaten="$data['kabupaten']->keys()"
    :timeOtomatis="(isset($data['post']['time_otomatis']) ? true : false)"
    :durasi="(isset($data['post']) ? $data['post']['menit']*60 + $data['post']['detik'] : 120)"
    :kunciJawaban="(isset($data['post']['kunciJawaban']) ? true : false)"
  ></x-modal.soal>


  {{-- @dd(isset($data['post']) ? $data['post'] : []) --}}
  <!-- Pilihan Soal -->
  @include('layouts.optional-soal', [
    'kabupaten' => $data['kabupaten'], 
    'materi' => (isset($data['post']) ? $data['post']['materi'] : []),
    'bonus' => 2,
    'hukuman' => 1,
    // 'bonus' => (isset($data['post']) ? $data['post']['bonus'] : 2),
    // 'hukuman' => (isset($data['post']) ? $data['post']['hukuman'] : 1)
  ])

 
  
  <!-- Pilihan Kabupaten -->
  @include('layouts.optional-kabupaten', [
    'kabupaten' => collect($data['kabupaten']), 
    'pintas' => (isset($data['pintas']) ? $data['pintas'] : []),
  ])
  
  <!-- Navbar -->
  @include('layouts.navbar',['data' => collect($data)])

  <!-- Notif -->
  {{-- <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="jawaban" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Notif</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
      </div>
    </div>
  </div> --}}

  {{-- popover doubleclick --}}
  {{-- <x-popover.double_click></x-popover.double_click> --}}

  
  <script>
    $(document).ready(function () {
      
      const $offcanvas = $('#kelompok_offcanvas');
      const $section = $('#kelompok');
      const $btnKelompok = $('#kelompok button');

      $offcanvas.on('show.bs.offcanvas', function () {
        $section.css('min-height', $offcanvas.outerHeight() + 'px');
        $btnKelompok.removeClass('translate-middle-x');
        $btnKelompok.addClass('translate-middle');
        $('#kelompok button span').addClass('rotate180');
        $('#pilihan_kabupaten').removeClass('z-1030');
      }).on('hide.bs.offcanvas', function() {
        $section.css('min-height', '0');
        $btnKelompok.removeClass('translate-middle');
        $btnKelompok.addClass('translate-middle-x');
        $('#kelompok button span').removeClass('rotate180');
      }).on('hidden.bs.offcanvas', function() {
        $('#pilihan_kabupaten').addClass('z-1030');
      });

      const $soal = $('#modal_soal .soal-container');
      document.addEventListener('keydown', function (e) {
        // soal
        if($('#modal_soal').hasClass('show') || true){
          const isCmdOrCtrl = e.ctrlKey || e.metaKey;
          if(isCmdOrCtrl){
            let fs = Number($soal.attr('fs'));
            if(e.key === '-' && fs < 6){
              $soal.attr('fs', fs+1);
              $soal.removeClass('fs-'+fs);
              $soal.addClass('fs-'+(fs+1));
            }
            else if((e.key === '=' || e.key === '+') && fs > 1){
              $soal.attr('fs', fs-1);
              $soal.removeClass('fs-'+fs);
              $soal.addClass('fs-'+(fs-1));
            }
            else if(e.key === '0'){
              $soal.attr('fs', 5);
              $soal.removeClass('fs-'+fs);
              $soal.addClass('fs-5');
            }
            e.preventDefault();
          }
        }
      });
    }); 
    </script>
@endsection