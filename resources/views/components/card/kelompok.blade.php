<div class="card me-1">
    <div class="card-body">
      <img class="rounded-circle img-thumbnail position-absolute translate-middle" src="img/logo/kelompok {{ $slot }}.jpg" alt="">
      <div class="data text-end">
          <div class="nama_kelompok">
            <input name="nama_kelompok" id="input_kelompok_{{ $slot }}">
            <label class="h5 is-underlined text-warp m-0" for="input_kelompok_{{ $slot }}" default="Kelompok {{ $slot }}">{{ $name }}</label>
          </div>
          <a href="#{{ Str::remove(' ', $kabupaten) }}" id="pos_kelompok_{{ $slot }}" class="card-subtitle mb-2 text-body-secondary small p-0 link-underline link-underline-opacity-0">{{ $kabupaten }}</a>
          <div class="total">
            <p id="count-benar_kelompok_{{ $slot }}" count='0' class="card-text m-0">Benar 0</p>
            <p id="count-salah_kelompok_{{ $slot }}" count='0' class="card-text m-0">Salah 0</p>
          </div>
      </div>
    </div>
  </div>