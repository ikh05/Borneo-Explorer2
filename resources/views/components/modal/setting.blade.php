<!-- Pengaturan -->
<div class="modal fade " id="pengaturan_permainan" @if(!isset($data['post'])) data-bs-backdrop="static" @endif data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered ">
      <form id="form_pengaturan" class="modal-content needs-validation" method="post" action=""  novalidate>
        @csrf
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="pengaturan_permainanLabel"><i class="fa-solid fa-gear fa-spin"></i> Pengaturan</h1>
          @if(isset($data['post']))
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          @endif
        </div>
        <div class="modal-body">
          <!-- banyak kelompok -->
          <div class="mb-3 ">
            <label class="form-label" for="pengaturan_banyak_kelompok">Banyak Kelompok</label>
            <input type="number" class="form-control" id="pengaturan_banyak_kelompok" max="4" min="2" name="kelompok" value="{{ isset($data['post']) ? $data['post']['kelompok'] : 4 }}" required>
            <div class="invalid-feedback">
              Isi dengan 2-4!
            </div>
          </div>
          {{-- tampilkan Jawaban --}}
          {{-- <div class="mb-3">
            <p class="mb-0">Kode Baru : <a href="/host/{{ $data['newKey'] }}" target="_blank">{{ $data['newKey'] }}</a></p>
            <p class="mb-0 small text-secondary">Kode ini adalah identitas unik untuk permainanmu.</p>
            <input type="hidden" name="key" value="{{ $data['newKey'] }}">
          </div> --}}
{{--           
          <!-- lokasi -->
          <div class="mb-3">
            <label for="pengaturan_lokasi" class="form-label">Kota Memulai Permainan</label>
            <select id="pengaturan_lokasi" class="form-select" aria-label="Small select example" name="lokasi" >
              @foreach ($data['kabupaten'] as $name => $item)
                <option value="{{ Str::remove(' ', $name) }}">{{ $name }}</option>
              @endforeach
            </select>
            <div class="invalid-feedback">
              Tolong pilih salah satu kabupaten sebagai titik awal!
            </div>
          </div> --}}
          <input type="hidden" name="lokasi" value="{{ $data['kabupaten']->keys()->first() }}">

          
          <!-- materi -->
          <div class="mb-3">
            <p class="mb-0">Materi</p>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="materi_baris_deret" name="materi[]" value="barisan_dan_deret" @checked(!isset($data['post']) || in_array('barisan_dan_deret', $data['post']['materi']))>
              <label class="form-check-label" for="materi_baris_deret">
                Barisan dan Deret
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="materi_statistika" name="materi[]" value="statistika" @checked(!isset($data['post']) || in_array('statistika', $data['post']['materi'])) >
              <label class="form-check-label" for="materi_statistika">
                Statistika: Mean, Median, dan Modus
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="materi_persamaan_linear" name="materi[]" value="persamaan_linear" @checked(!isset($data['post']) || in_array('persamaan_linear', $data['post']['materi']))>
              <label class="form-check-label" for="materi_persamaan_linear">
                Persamaan Linear
              </label>
              <div class="invalid-feedback">
                Tolong pilih paling tidak 1 materi yang akan di gunakan!
              </div>
            </div>
          </div>

          {{-- banyaknya tanpa pertanyaan --}}
          {{-- <div class="row">
            <div class="col-6">
              <label for="Ikan_Gabusn">Banyak Kartu Ikan Gabus</label>
              <div class="input-group mb-3">
                <input readonly class="form-control" type="number" name="bonus" id="Ikan_Gabus" min="0" max="9" value="{{ isset($data['post']) ? $data['post']['bonus'] : 2 }}">
              </div>
            </div>
            <div class="col-6">
              <label for="Eceng_Gondok">Banyak Kartu Eceng Gondok</label>
              <div class="input-group mb-3">
                <input readonly class="form-control" type="number" name="hukuman" id="Eceng Gondok" min="0" max="9" value="{{ isset($data['post']) ? $data['post']['hukuman'] : 1 }}">
              </div>
            </div>
          </div> --}}

          <!-- waktu Pengerjaan -->
          <p class="mb-0">Waktu Pengerjaan Soal</p>
          <div class="input-group mb-3 has-validation">
            <input id="setting_menit" name="menit" type="number" class="form-control" min="0" max="59" value="{{ isset($data['post']) ? $data['post']['menit'] : 3 }}">
            <span class="input-group-text">menit</span>
            <input id="setting_detik" name="detik" type="number" class="form-control" min="0" max="59" value="{{ isset($data['post']) ? $data['post']['detik'] : 0 }}">
            <span class="input-group-text">detik</span>
            <div class="invalid-feedback">
              Tolong isi dengan benar waktu yang diberikan untuk peserta berhitung.
            </div>
            <div class="form-check">
              <input name="time_otomatis" class="form-check-input" type="checkbox" value="time_otomatis" id="time_otomatis" @checked(isset($data['post']['time_otomatis'])) >
              <label class="form-check-label" for="time_otomatis">Mulai hitung mundur saat soal di munculkan</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-info hover-up"><i class="fa-solid fa-star"></i> Mulai Baru</button>
        </div>
      </form>
    </div>
  </div>


  {{-- untuk menjaga waktu --}}

  <script>
    $(document).ready(function() {
      const form_pengaturan = document.getElementById('form_pengaturan')
      form_pengaturan.addEventListener('submit', event => {
        
        validasi_pengaturan_materi();
        validasi_pengaturan_durasi();

        if (!form_pengaturan.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form_pengaturan.classList.add('was-validated')
      }, false);
    });
    form_pengaturan.addEventListener('input', ()=>{
      validasi_pengaturan_materi();
      validasi_pengaturan_durasi();
    });
    function validasi_pengaturan_durasi() {
      const menit = document.getElementById('setting_menit');
      const detik = document.getElementById('setting_detik');
      // validasi menit dan detik
        // harus ada durasinya
      menit.setCustomValidity('');
      detik.setCustomValidity('');
      if (!parseInt(menit.value + detik.value)) {
        const errorMsg = 'Harap isi dengan benar!';
        menit.setCustomValidity(errorMsg);
        detik.setCustomValidity(errorMsg);
      }
    }
    function validasi_pengaturan_materi() {
      const materi_baris_deret = document.getElementById('materi_baris_deret');
      const materi_statistika = document.getElementById('materi_statistika');
      const materi_persamaan_linear = document.getElementById('materi_persamaan_linear');
      
      // validasi materi
        // minimal salah satu
      materi_baris_deret.setCustomValidity('');
      materi_statistika.setCustomValidity('');
      materi_persamaan_linear.setCustomValidity('');
      if(!(materi_baris_deret.checked || materi_statistika.checked || materi_persamaan_linear.checked)){
        const errorMsg = 'Harap isi pilih paling tidak salah satu materi!';
        materi_baris_deret.setCustomValidity(errorMsg);
        materi_statistika.setCustomValidity(errorMsg);
        materi_persamaan_linear.setCustomValidity(errorMsg);
      }
    }
  </script>