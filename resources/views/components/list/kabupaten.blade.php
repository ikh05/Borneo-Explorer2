<a href="#{{ Str::remove(' ', $name) }}" class="list-group-item list-group-item-action position-relative d-flex @if($isActive) 'active' @endif">
    @isset($tujuan[$name])
        <button tujuan="{{ $tujuan[$name] }}" lokasi="{{ Str::remove(' ', $name) }}"  class="button button-outline triger-tooltip p-1 me-1" data-bs-toggle="tooltip" data-bs-html="true" id="pintas_{{ Str::remove(' ', $name) }}">
            <i class="fa-solid fa-road-circle-exclamation"></i>
        </button>
    @endisset
    <p class="m-0 d-inline-block">{{ $name }}</p>
    <span class="fa-hover">
        <i id="backFlip_{{ Str::remove(' ', $name) }}"  class="d-none fa-solid fa-rectangle-list fa-hover-flip position-absolute me-1 top-50 end-0 translate-middle"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Tutup lagi semua nomor di {{ $name }}"></i>
    </span>
</a>

@isset($tujuan[$name])
    <div class="d-none" id="tooltip_pintas_{{ Str::remove(' ', $name) }}">
        <p class="mb-0" style="cursor: pointer;">{{ $name." - ".$tujuan[$name] }}</p>
    </div>
@endisset