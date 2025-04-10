<section id="kelompok" style="width: 100vw; transition: min-height 0.3s ease; overflow: visible;" class="fixed-bottom">
    <div style="border-top: 2px solid #646cff;" class="offcanvas offcanvas-bottom" tabindex="-1" id="kelompok_offcanvas" aria-labelledby="kelompok_offcanvasLabel" data-bs-backdrop="static">
        <div class="offcanvas-body d-flex justify-content-evenly" style="overflow: hidden;">
            <!-- card -->
            @for ($i = 0; $i < $kelompok; $i++)
            <x-card.kelompok name="Kelompok {{ $i+1 }}" kabupaten="{{ $kabupaten }}">{{ $i+1 }}</x-card.kelompok>
            @endfor
        </div>
    </div>
    <button style="z-index: 1046;" class="rounded-pill pointer btn btn-secondary mb-1 position-relative start-50 top-0 translate-middle-x d-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#kelompok_offcanvas" aria-controls="offcanvasBottom">
        <span><i style="color: #646cff;" class="fa-solid fa-arrow-up"></i></span>
        <p class="mb-0">Kelompok</p>
    </button>
</section>

{{-- css --}}
<link rel="stylesheet" href="css/kelompok.css">

{{-- spasi to open offcanvas kelompok --}}
<script>
    $(document).ready(function() {
        let keyK = true;
        const kelompok_offcanvas = new bootstrap.Offcanvas(document.getElementById('kelompok_offcanvas'));
        // Tambahkan event listener untuk keyboard
        document.addEventListener('keydown', function(event) {
            // Buka/tutup dengan tombol "k" (huruf K)
            if (event.key.toLowerCase() === 'k' && keyK) {
                kelompok_offcanvas.toggle();
            }
        });


        const all_a_kelompok = document.querySelectorAll('#kelompok_offcanvas a');
        Array.from(all_a_kelompok).map(e => e.addEventListener('click', () => kelompok_offcanvas.hide()));

        $('input[name=nama_kelompok]').each(function(i,e) {
            const $el_label = $('#jawaban_kelompok option');
            $(e).on('input', function(){
                const $label = $(`label[for="${this.id}"]`);
                $label.text(this.value || $label.attr('default'));
                $el_label.each((index, el) => {
                    if(index === i) $(el).text($label.text());
                });
            }).focus(function() { 
                keyK = false;
            }).blur(function(){
                keyK = true;
            });
        })





    });
</script>