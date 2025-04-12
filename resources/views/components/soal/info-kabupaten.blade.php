<div class="info-kabupaten d-none d-md-block">
  <div class="bg-has end-0 rounded-start p-3 text-dark d-flex align-items-center" style="height: calc(100vh - 4rem); width: 23rem; position: static;">
      <div class="d-flex flex-column align-items-center">
        <h5 class="text-center mb-3">{{ $slot }}</h5>
        <div class="w-100 d-flex justify-content-center h-50 mb-2">
          <img src="img/logo/{{ $slot }}.png" alt="">
        </div>
        <p class="mb-0 text-center">Ibu Kota : {{ $detail['ibukota'] }}</p>
        <p class="mb-0 text-center">Luas : {{ number_format($detail['luas'], 0, ',', '.') }} \(km^2\)</p>
        <p class="mb-0 text-center">Kecamatan : {{ $detail['kecamatan'] }}</p>
        <p class="mb-0 text-center">Kelurahan/Desa : {{ $detail['kelurahan/desa'] }}</p>
      </div>
    </div>
</div>