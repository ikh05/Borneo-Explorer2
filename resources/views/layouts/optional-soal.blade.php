<link rel="stylesheet" href="css/cardSoal.css">

<section id="pilihan_soal" style="width: calc(100vw - 15rem); overflow: visible;" class="position-absolute end-0 text-bold"  >
  <div data-bs-spy="scroll" data-bs-target="#pilihan_kabupaten" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
    @foreach ($kabupaten as $key => $detail)
      <x-soal.pilihan-soal :detail=$detail name="{{ $key }}"></x-soal.pilihan-soal>  
    @endforeach
  </div>
</section>


{{-- random bintang dan materi --}}
<script>
  $(document).ready(()=>{
    const kabupaten = @json($kabupaten->keys()->map(function($k) {
        return Str::remove(' ', $k);
      }));
    const materi = @json($materi);
    kabupaten.forEach(element => {
      const kab = document.getElementById(element);
      generateMateriCard(kab);
    });
    
    function generateMateriCard(kab) {
      const susunan = generateSimpleRandomArray(materi);
      console.log(susunan);
      Array.from(kab.querySelectorAll('.p-materi')).map((e,i) => {
        if(susunan[i] === 'Ikan Gabus' || susunan[i] === 'Eceng Gondok') e.classList.add('bonus');
        else e.classList.remove('bonus');
        e.innerHTML = susunan[i].split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      });
      Array.from(kab.querySelectorAll('.btn-materi')).map((e,i) => {
        if(susunan[i] === 'Ikan Gabus' || susunan[i] === 'Eceng Gondok') e.classList.add('d-none');
        else e.classList.remove('d-none');
        e.setAttribute('materi', susunan[i]);
      });
      Array.from(kab.querySelectorAll('.img-bns')).map((e,i)=>{
        $(e).removeClass('d-none');
        if(susunan[i] === 'Ikan Gabus' || susunan[i] === 'Eceng Gondok') $(e).attr('src', 'img/logo/'+susunan[i]+'.jpeg');
        else $(e).addClass('d-none');
      })
    }

    function generateSimpleRandomArray(items) {
      // 1. Siapkan elemen khusus (2 bintang, 1 bom)

      const grid = [];
      for (let index = 0; index < @json($bonus); index++) { grid.push('Ikan Gabus'); }
      for (let index = 0; index < @json($hukuman); index++) { grid.push('Eceng Gondok'); }

      // 2. Jika tidak ada items, isi dengan 'kosong'
      if (!items || items.length === 0) {
        return [...grid, ...Array(6).fill('kosong')].sort(() => Math.random() - 0.5);
      }
      
      // 3. Hitung berapa kali masing-masing item harus muncul
      const totalItems = 6;
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

    const all_buttonSoal = document.querySelectorAll('button[materi]');
    Array.from(all_buttonSoal).forEach( button => {
      button.addEventListener('click', function() {
        window.setting.materi = this.getAttribute('materi');
        window.setting.lokasi = this.getAttribute('lokasi');
      });
    });

    $('.card-front').each(function(i,e) { 
          $(e).on('click', function() {
            $(this).closest('.card-flip').addClass('flip-active');
          });
        }); 
  });
</script>
