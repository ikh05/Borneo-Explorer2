<!DOCTYPE html>
<html lang="id" data-bs-theme="dark">
  <head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Borneo - Eksplorer</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/flipCard.css">
    <link rel="stylesheet" href="css/fa.css">
    <link rel="stylesheet" href="css/style.css?v=1.0.3">
    
    <script src="https://code.jquery.com/jquery-3.7.1.slim.js" integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc=" crossorigin="anonymous"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script src="js/konekServer.js"></script>


    <script>
      window.setting = {
        lokasi: '',
        materi: '',
        soal_text: '',
        soal_sound: '',
        game_id: @json(isset($data['game']) ? $data['game']->id : ''),
        jawaban: '',
      }
    </script>



  </head>
  <body style="overflow-x: hidden; height: 100vh;" class="overflow-y-hidden">
    <script src="js/function.js"></script>
    
    @empty($data['post'])  
      @include('layouts.logo');
    @endempty


     <!-- Kelompok -->
    @isset($data['post'])
      @include('layouts.kelompok', ['kabupaten' => $data['kabupaten']->keys()[0], 'kelompok' => isset($data['post']) ? $data['post']['kelompok'] : 4])  
    @endisset

    <!-- Soal -->
    <x-modal.soal 
      :kabupaten="$data['kabupaten']->keys()"
      :timeOtomatis="(isset($data['post']['time_otomatis']) ? true : false)"
      :durasi="(isset($data['post']) ? $data['post']['menit']*60 + $data['post']['detik'] : 120)"
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

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.min.js" integrity="sha384-VQqxDN0EQCkWoxt/0vsQvZswzTHUVOImccYmSyhJTp7kGtPed0Qcx8rK9h9YEgx+" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/16f1c0f365.js" crossorigin="anonymous"></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    
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
      }); 
    </script>
  </body>
</html>