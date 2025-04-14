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
        // hilangkan '.flip-active' untuk setiap card
        await $kab.find('.flip-active').each((i, ac) => $(ac).removeClass('flip-active'));
        // lalu untuk kabupaten itu jalankan random soal
        setTimeout(() => {
          generateMateriCard($kab.get(0));
        }, 1000);
        $(this).addClass('d-none');
      });
    });

    $('#pilihan_kabupaten .triger-tooltip').each(function (i, e) {
      const content = $('#tooltip_'+$(e).attr('id')).html();
      console.log(e);
      console.log(content);
      $(e).attr('title', content);
      new bootstrap.Tooltip(e);
    });
  });
</script>



