<div class="modal fade" id="jawaban" tabindex="-1" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">

            <h1 class="modal-title fs-5" id="jawabanLabel">Jawaban</h1>
            <h1 class="modal-title fs-5 d-none" id="title_bonus">Selamat Anda Bisa Lanjut ke Kabupaten Selanjutnya</h1>
          </div>
          <div class="modal-body text-center">
            <p id="kunci_jawaban" class="fs-3">5</p>
            <!-- <form action="" method="post"> -->
              <div class="d-flex flex-column mb-3">
                <label for="jawaban_kelompok">Kelompok yang menjawab</label>
                <select name="kelompok" id="jawaban_kelompok" class="form-select">
                  <option class="d-none" value="kelompok_1">Kelompok 1</option>
                  <option class="d-none" value="kelompok_2">Kelompok 2</option>
                  <option class="d-none" value="kelompok_3">Kelompok 3</option>
                  <option class="d-none" value="kelompok_4">Kelompok 4</option>
                  <option class="d-none" value="">Tanpa Kelompok</option>
                </select>
              </div>
              <p class="mb-0">Apakah jawabannya benar?</p>
              <div class="mb-3 input-group justify-content-center">
                <button style="width: 5rem;" class="btn btn-success" type="button" name="benar" data-bs-dismiss="modal">Ya</button>
                <button style="width: 5rem;" class="btn btn-danger" type="button" name="salah" data-bs-dismiss="modal">Tidak</button>
                <button style="width: 5rem;" class="btn btn-info d-none" type="button" name="bonus" data-bs-dismiss="modal">Selamat</button>
              </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>



    <script>
      $(document).ready(function () {
        $('#jawaban').on('show.bs.modal', function(){
          // mengatur option kelompok
          const $option = $('#jawaban_kelompok option');
          let tanpa_kelompok = true;
          $option.each(function(i,e) {
            if($('#pos_'+$(e).val()).attr('href') == ('#'+window.setting.lokasi)){
              tanpa_kelompok = false;
              $(e).removeClass('d-none');
            }
          });
          if(tanpa_kelompok) $($option[$option.length - 1]).removeClass('d-none');
          $('#jawaban_kelompok option:not(.d-none)').first().prop('selected', true);
        }).on('hide.bs.modal', function() {
          $('#jawaban_kelompok option').each(function (index, element) {
            $(element).addClass('d-none');
          });
          
          // mengatur ulang agar bisa digunakan untuk kunci jawaban
          $('#title_bonus').addClass('d-none');
          $('#jawabanLabel').removeClass('d-none');
          $('#jawaban button').each(function(i,e) { $(e).removeClass('d-none') });
          $('#jawaban p').each(function(i,e) { $(e).removeClass('d-none') });
          $('#jawaban button[name=bonus]').addClass('d-none');
        });

        $('#jawaban button').each(function(index, element) {
          $(element).on('click', function() {
            const kelompok = $('#jawaban_kelompok').val();
            if(kelompok !== ''){
              const statusJawaban = $(this).attr('name');
              
              console.log('Kelompok yang menjawab:'+kelompok);
              console.log('Status jawaban (benar/salah):', statusJawaban);
      
              // jika benar
              if (statusJawaban === 'benar' || statusJawaban === 'bonus') {
                const $posKelompok = $('#pos_' + kelompok);
                const $pilihan_kabupaten = $('#pilihan_kabupaten a');
                // pos_kelompok_1
                console.log('Posisi sekarang:', $posKelompok.attr('href'));
      
                $pilihan_kabupaten.each(function(i, e) {
                  if ($(e).attr('href') === $posKelompok.attr('href')) {
                    console.log('Posisi ditemukan pada index:', i);
      
                    if (i === $pilihan_kabupaten.length - 1) {
                      console.log('Akhir list, kembali ke awal');
                      $posKelompok.attr('href', $pilihan_kabupaten[0].attr('href'));
                      $posKelompok.text($pilihan_kabupaten[0].text());
                    } else {
                      console.log('Lanjut ke posisi berikutnya');
                      $posKelompok.attr('href', $($pilihan_kabupaten[i + 1]).attr('href'));
                      $posKelompok.text($($pilihan_kabupaten[i + 1]).text());
                    }
                    if(statusJawaban === 'benar'){
                      const l = ($($pilihan_kabupaten[i+1]).text().includes('Kota ') ? '' : 'Kabupaten ');
                      playTeks('Jawaban benar, '+$('#jawaban_kelompok option:selected').text()+' sekarang berada di '+ l + $($pilihan_kabupaten[i+1]).text())
                    }
                    return false; // berhenti dari .each
                  }
                });
              }else{
                playTeks('Maaf jawaban '+$('#jawaban_kelompok option:selected').text()+' kerang tepat. ');
                console.log('status jawaban harusnya salah:'+statusJawaban);
              }
              
              // Update count
              if(statusJawaban !== 'bonus'){
                const $count = $('#count-' + statusJawaban + '_' + kelompok);
                const countLama = Number($count.attr('count'));
                const countBaru = countLama + 1;
                
                console.log()
                console.log('Count lama:', countLama);
                console.log('Count baru:', countBaru);
        
                $count.attr('count', countBaru);
                $count.text(kapitalHurufPertama(statusJawaban) + ' ' + countBaru);
              }
            }
          });
        });
    
        function kapitalHurufPertama(teks) {
          return teks.charAt(0).toUpperCase() + teks.slice(1).toLowerCase();
        }
      });
    </script>
    