<section id="pilihan_kabupaten" class="d-none d-md-flex position-fixed start-0 top-0 align-items-center z-1030" style="margin-top: 4rem;">
    <div class="list-group" style="border-radius: 0; width: 100%;">
      <a href="#{{ Str::remove(' ', $kabupaten->keys()->first()) }}"
          class="list-group-item list-group-item-action position-relative active" aria-current="true">
          <p class="m-0">{{ $kabupaten->keys()->first() }}</p>
          <span class="fa-hover">
            <i id="backFlip_{{ Str::remove(' ', $kabupaten->keys()->first()) }}"  class="d-none fa-solid fa-rectangle-list fa-ishover-flip position-absolute me-1 top-50 end-0 translate-middle"></i>
          </span>
        </a>
      @foreach ($kabupaten->skip(1) as $name => $item)
        <a href="#{{ Str::remove(' ', $name) }}"
          class="list-group-item list-group-item-action position-relative">
          <p class="m-0">{{ $name }}</p>
          <span class="fa-hover">
            <i id="backFlip_{{ $name }}"  class="d-none fa-solid fa-rectangle-list fa-hover-flip position-absolute me-1 top-50 end-0 translate-middle"></i>
          </span>
        </a>
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
  });
</script>



