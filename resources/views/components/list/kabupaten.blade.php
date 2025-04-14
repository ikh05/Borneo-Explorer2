<a href="#{{ Str::remove(' ', $name) }}" class="list-group-item list-group-item-action position-relative d-flex @if($isActive) 'active' @endif">
    @isset($pintas[$name])
        <button lokasi="{{ Str::remove(' ', $name) }}" class="button button-outline triger-tooltip p-1 me-1" data-bs-toggle="tooltip" data-bs-html="true" id="pintas_{{ Str::remove(' ', $name) }}">
            <i class="fa-solid fa-road-circle-exclamation"></i>
        </button>
    @endisset
    <p class="m-0 d-inline-block">{{ $name }}</p>
    <span class="fa-hover">
        <i id="backFlip_{{ $name }}"  class="d-none fa-solid fa-rectangle-list fa-hover-flip position-absolute me-1 top-50 end-0 translate-middle"></i>
    </span>
</a>

@isset($pintas[$name])
    <div class="d-none" id="tooltip_pintas_{{ Str::remove(' ', $name) }}">
        <p class="mb-0" style="cursor: pointer;">{{ $name." - ".$pintas[$name] }}</p>
    </div>
@endisset