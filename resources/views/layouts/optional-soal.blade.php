<link rel="stylesheet" href="css/cardSoal.css">

<section id="pilihan_soal" style="overflow: visible;" class="position-absolute end-0 text-bold"  >
  <div data-bs-spy="scroll" data-bs-target="#pilihan_kabupaten" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
    @foreach ($kabupaten as $key => $detail)
      <x-soal.pilihan-soal :detail=$detail name="{{ $key }}"></x-soal.pilihan-soal>  
    @endforeach
  </div>
</section>


{{-- random bintang dan materi --}}
<script>
  const bonus = 'Ikan Gabus';
  const hukuman = 'Ikan Buntal';
  let boolean_flipcard = true;

  const kabupaten = @json($kabupaten->keys()->map(function($k) {
      return Str::remove(' ', $k);
    }));
  const materi = @json($materi);
  kabupaten.forEach(element => {
    const kab = document.getElementById(element);
    generateMateriCard(kab);
  });
  
  function generateMateriCard(kab) {
    boolean_flipcard = false;
    const susunan = generateSimpleRandomArray(materi);
    console.log(susunan);
    Array.from(kab.querySelectorAll('.p-materi')).map((e,i) => {
      if(susunan[i] === bonus || susunan[i] === hukuman) e.classList.add('bonus');
      else e.classList.remove('bonus');
      $(e).text(susunan[i].split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    });
    Array.from(kab.querySelectorAll('.btn-materi')).map((e,i) => {
      if(susunan[i] === bonus || susunan[i] === hukuman) e.classList.add('d-none');
      else e.classList.remove('d-none');
      e.setAttribute('materi', susunan[i]);
    });
    Array.from(kab.querySelectorAll('.img-bns')).map((e,i)=>{
      $(e).removeClass('d-none');
      if(susunan[i] === bonus || susunan[i] === hukuman) $(e).attr('src', 'img/logo/'+susunan[i]+'.jpeg');
      else $(e).addClass('d-none');
    })
    boolean_flipcard = true;
  }


  function generateSimpleRandomArray(items) {
    // 1. Siapkan elemen khusus (2 bintang, 1 bom)
    const grid = [];
    for (let index = 0; index < @json($bonus); index++) { grid.push(bonus); }
    for (let index = 0; index < @json($hukuman); index++) { grid.push(hukuman); }

    // 2. Jika tidak ada items, isi dengan 'kosong'
    if (!items || items.length === 0) {
      return [...grid, ...Array(9 - @json($bonus - $hukuman)).fill('kosong')].sort(() => Math.random() - 0.5);
    }
    
    // 3. Hitung berapa kali masing-masing item harus muncul
    const totalItems = 9 - @json($bonus + $hukuman) ;
    const baseCount = Math.floor(totalItems / items.length);
    let remainder = totalItems % items.length;
    
    // 4. Sebarkan items secara merata
    const distributedItems = [];
    items.forEach(item => {
      const count = baseCount + (remainder-- > 0 ? 1 : 0);
      for (let i = 0; i < count; i++) {
        distributedItems.push(item);
      }
    });
    
    // 5. Gabungkan dan acak
    return [...grid, ...distributedItems].sort(() => Math.random() - 0.5);
  }
  $(document).ready(()=>{
    

    const all_buttonSoal = document.querySelectorAll('button[materi]');
    Array.from(all_buttonSoal).forEach( button => {
      button.addEventListener('click', function() {
        window.setting.materi = this.getAttribute('materi');
        window.setting.lokasi = this.getAttribute('lokasi');
      });
    });

    // card soal di buka

    // front
    $('.card').each(function(i,e) { 
      $(e).on('click', function() {
        // mengecek apakah bisa flipcard
        if(!boolean_flipcard) return 0;

        // set card_click
        window.setting.card_click = $(this).attr('nomor');

        // mengambil kartu
        let $flip = $(this).find('.card-flip');
        
        // mendapatkan bonus
        if($flip.find('.p-materi').text() === bonus && !$flip.hasClass('flip-active')){
          boolean_flipcard = false;
          // munculkan modal yang di edit
          const modal = new bootstrap.Modal(document.getElementById('jawaban'));
          $('#title_bonus').removeClass('d-none');
          $('#jawabanLabel').addClass('d-none');
          $('#jawaban button').each(function(i,e) { $(e).addClass('d-none') });
          $('#jawaban p').each(function(i,e) { $(e).addClass('d-none') });
          $('#jawaban button[name=bonus]').removeClass('d-none');
          setTimeout(() => {
            modal.show();
            playTeks('Selamat kamu lanjut ke kabupaten selanjutnya.');
            boolean_flipcard = true;
          }, 1000);
          
        }
        // mengambil nilai lokasi dan membalik kartu
        $flip.addClass('flip-active');
        window.setting.lokasi = $flip.find('.btn-materi').attr('lokasi');          

        // semua kartu sudah di buka
        console.log(window.setting.lokasi + ' sudah ' + $flip.closest('.card').parent().find('.flip-active').length + ' nomor teruka');
        if($flip.closest('.card').parent().find('.flip-active').length === 9){
          // buka mekanisme restart 
          console.log('aktifkan reset');
          $('#backFlip_'+window.setting.lokasi).removeClass('d-none');
        }

        // mendapatkan hukuman
        if($flip.find('.p-materi').text() === hukuman){
          playTeks('Sayang sekali kamu harus menunggu giliranmu berikutnya!');
        }
      });
    }); 
  });
</script>
