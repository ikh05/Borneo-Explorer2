<section id="pilihan_kabupaten" class="d-none d-md-flex position-fixed start-0 top-0 align-items-center z-1030" style="margin-top: 4rem;">
    <div class="list-group" style="border-radius: 0; width: 100%;">
            
      <x-list.kabupaten
       name="{{ $kabupaten->keys()->first() }}"
       :tujuan="$pintas"
       :isActive="true">
      </x-list.kabupaten>

      @foreach ($kabupaten->skip(1) as $name => $item)
        <x-list.kabupaten 
         name="{{ $name }}"
         :tujuan="$pintas"
         :isActive=false>
        </x-list.kabupaten>
      @endforeach
    </div>
</section>



<script>
  $(document).ready(function () {

    $('#pilihan_kabupaten span i').each(function (i, e) {
      $(e).on('click', async function() {

        // ambil pilihan soal yang sesuai dengan ini, 
        const $kab = $('#'+$(this).attr('id').split("_")[1]);

        // hilangkan '.flip-active' untuk setiap card serta hilangkan soal dan jawaban
        await $kab.find('.flip-active').each((i, ac) => {
          $(ac).removeClass('flip-active')
          $(ac).closest('.card').attr('soal', '');
          $(ac).closest('.card').attr('jawaban', '');
        });

        // lalu untuk kabupaten itu jsalankan random materi
        setTimeout(() => {
          generateMateriCard($kab.get(0));
        }, 1000);
        $(this).addClass('d-none');
      });
    });

    $('#pilihan_kabupaten .triger-tooltip').each(function (i, e) {
      const content = $('#tooltip_'+$(e).attr('id')).html();
      $(e).attr('title', content);
      new bootstrap.Tooltip(e);

      // click
      $(e).on('click', function() {
        console.log(e);
        window.setting.lokasi = $(e).attr('lokasi');
        window.setting.materi = 'pintas';
        window.setting.pintas = true;
        
        // buka modal soal
        const modalEl = document.getElementById('modal_soal'); 
        const soalModal = new bootstrap.Modal(modalEl);
        soalModal.show(e)
      })
    });

    // $('#pilihan_kabupaten button.pintas').each(function (i, e) {
    //   $(e).on('click', function() {
        
    //   });
    // });
  });
</script>



