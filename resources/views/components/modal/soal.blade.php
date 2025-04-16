<div class="modal fade" id="modal_soal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body loading">
          <x-loading></x-loading>
        </div>
        <div class="soal d-none">
          <!-- lokasi dan materi -->
          <div class="modal-header d-flex justify-content-between">
            <h5 id="soal_materi" class="modal-title">Materi</h5>
            <h6 id="soal_lokasi" class="small text-secondary mb-0">Lokasi</h6>
          </div>
          <!-- soal -->
          <div class="modal-body soal-container"></div>
          
          <!-- timer dan jawaban -->
          <div class="modal-footer">
            <div class="timer" durasi="{{ $durasi }}" now="">{{ sprintf("%02d : %02d", floor($durasi / 60), $durasi % 60)  }}</div>
            <button id="start_timer" class="btn btn-success
            @if($timeOtomatis)
                d-none
            @endif">Mulai</button>
            <button class="btn btn-primary" data-bs-target="#jawaban" data-bs-toggle="modal">Jawaban</button>
          </div>
        </div>
      </div>
    </div>
</div>

<!-- Konfirmasi Jawaban Pemain -->
<x-modal.kunci-jawaban :kunciJawaban=$kunciJawaban></x-modal.kunci-jawaban>




<script>
  $(document).ready(function() {
    const timer_start = @json($timeOtomatis);
    let bool_timer = false;
    $('#modal_soal').on('shown.bs.modal', async function () {
      try {
        $('#load-first').removeClass('d-none').html('Menyiapkan Soal ...');
        $('#load-second').addClass('d-none');
        const $card_click = $('#'+window.setting.lokasi+' .card[nomor='+window.setting.card_click+']'); 
        console.log($card_click.attr('soal'));
        window.setting.soal_sound = '';
        if($card_click.attr('soal') === ''){
          // buat soal
          await buatSoal();
          $card_click.attr('soal', window.setting.soal_text);
          $card_click.attr('jawaban', window.setting.jawaban);
          $card_click.attr('sound', (window.setting.soal_sound === '') ? window.setting.soal_text : window.setting.soal_sound);
        }else{
          window.setting.soal_sound = $card_click.attr('sound');
          window.setting.soal_text = $card_click.attr('soal');
          window.setting.jawaban = $card_click.attr('jawaban');
        }
        
        // update soal di database
        postServer('simpan-soal', {
          lokasi: window.setting.lokasi,
          materi: window.setting.materi,
          soal_text: window.setting.soal_text,
          soal_sound: window.setting.soal_sound,
          game_id: window.setting.game_id,
          jawaban: window.setting.jawaban,
        });
        
        // tempel soal
        document.getElementById('soal_lokasi').innerHTML = window.setting.lokasi.replace(/([A-Z])/g, ' $1').trim();
        document.getElementById('soal_materi').innerHTML = formatJudul(window.setting.materi);
        $('#modal_soal .soal-container').html(window.setting.soal_text);
        $('#kunci_jawaban').html(window.setting.jawaban);
        
        // menjalankan latex
        MathJax.typesetPromise($('#modal_soal .soal-container'));
        MathJax.typesetPromise($('#kunci_jawaban'));

        // memunculkan soal siap
        setTimeout(function() {
          $('#load-first').addClass('d-none');
          $('#load-second').removeClass('d-none');
        }, 1000);

      } catch(error){ // soal gagal
        $('#load-first').html('Gagal Membuat Soal!');
        $('#error_close').removeClass('d-none');
      }
    }).on('hidden.bs.modal', function() {
      // kembalikan soal
      $('#error_close').addClass('d-none');
      $('#load-first').removeClass('d-none').html('Menyiapkan Soal ...');
      $('#load-second').addClass('d-none');
      $('#modal_soal .loading').removeClass('d-none');
      $('#modal_soal .soal').addClass('d-none');
      $('.soal-container').empty().removeClass('d-none');
      bool_timer = false;
      setTimer();
    });
    
    
    $('#triggerJawaban').on('click', function() {
      MathJax.typesetPromise($('#modal_soal .soal-container')).then(() => {
        console.log('MathJax rendering complete for');
      });
      stopText();
      bootstrap.Toast.getOrCreateInstance($('#jawaban')).show();
    });

    // menampilkan soal dan mesetting waktu
    $('#load-second button').on('click', function() {
      setTimer();
      $('#modal_soal .loading').addClass('d-none');
      $('#modal_soal .soal').removeClass('d-none');

      setTimeout(() => {
        playTeks(window.setting.soal_sound === '' ? window.setting.soal_text : window.setting.soal_sound);
      }, 500);
    });

    // setting waktu
    function setTimer() {
      let now = document.querySelector('#modal_soal .timer');
      now.setAttribute('now', now.getAttribute('durasi'));
    }

    setInterval(() => {
      let now = document.querySelector('#modal_soal .timer');
      let detik = Number(now.getAttribute('now'))
      let text_detik = detik%60 < 10 ? '0'+detik%60 : detik%60;
      let text_menit = Math.floor(detik/60) < 10 ? '0'+Math.floor(detik/60) : Math.floor(detik/60);
      now.innerHTML = text_menit + " : "+text_detik;
      if((bool_timer || timer_start)){
        if(detik > 0){
          detik -= 1;
          now.setAttribute('now', detik);
        }
      }
    }, 1000);

    $('#start_timer').on('click', function() {
      bool_timer = true;
    });

    const formatJudul = (str) => str.replace(/_/g, ' ').replace(/\b\w/g, m => m.toUpperCase()).replace(/\bDan\b/g, 'dan');
    function buatSoal(setting = window.setting){
      window.setting.soal_text = window[setting.lokasi][setting.materi]();
      return 1;
    }
  });
</script>


@foreach ($kabupaten as $item)  
  <script src="js/randomSoal/{{ Str::remove(' ', $item) }}.js?v=ujicoba&l=hss&i=1"></script>
@endforeach