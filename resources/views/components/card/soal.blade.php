<div class="card">
    <div class="card-flip">
        <div class="card-front">
        <div style="--x:{{ $x }}; --y:{{ $y }}; background-image: url('img/bg/bg-{{ Str::remove(' ', Str::lower($name)) }}.jpg');" class="puzzle-piece d-flex align-items-center justify-content-center position-absolute w-100 h-100">
            <div class="p-1 bg-has opacity-75"></div>
            <p class="fs-1 text-center m-0 position-relative">{{ $slot }}</p>
        </div>
        </div>
        <div class="card-back">
            <div class="d-flex align-items-center justify-content-center position-absolute w-100 h-100">
                <div class="bg-has d-flex align-items-center justify-content-center flex-column">
                    <img class="d-none img-bns position-absolute">
                    <p class="mb-2 p-materi text-center position-relative">Materi</p>
                    <button lokasi="{{ Str::remove(' ', $name) }}" class="btn btn-success btn-materi" data-bs-toggle="modal" data-bs-target="#modal_soal">Buka Soal</button>
                </div>
            </div>
        </div>
    </div>
</div>