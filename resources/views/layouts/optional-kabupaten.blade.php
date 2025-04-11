<section id="pilihan_kabupaten" class="d-flex position-fixed start-0 top-0 align-items-center z-1030" style="margin-top: 4rem;">
    <div class="list-group" style="border-radius: 0; width: 100%;">
      @foreach ($kabupaten as $key => $item)
        <a href="#{{ Str::remove(' ', $key) }}"
          class="list-group-item list-group-item-action {{ $kabupaten->keys()->search($key) === 0 || $key == 'kota baru' ? 'active" aria-current="true' : '' }}">
          {{ $key }}
        </a>
      @endforeach
    </div>
</section>