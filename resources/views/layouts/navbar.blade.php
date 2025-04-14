<style>
  .navbar #pembuat li:hover p{
    padding-left: .5rem;
  }
  .navbar #pembuat li img{
    border-radius: .3rem;
    height: 3rem;
    padding-left: .25rem;
  }
  .navbar #pembuat li:hover img{
    padding-left: .5rem;
  }
  .navbar #pembuat li .sosial-media{
    display: none;
  }
  .navbar #pembuat li:hover .sosial-media{
    display: flex;
  }
  .navbar #pembuat li .sosial-media a:hover i{
    color: coral;
  }

  button.hover-i-spin:hover i{
    transform: rotate(360deg);
  }

  #fullscreen-btn:hover i.fullscreen,
  #fullscreen-btn:hover i.minimize{
    animation: small_fontSize 2s infinite;
  }
  #fullscreen-btn i::before{
  }
  @keyframes small_fontSize {
    0% { font-size: 100%}
    50% { font-size: 50%}
    100% { font-size: 100%}
  }
  span.fa-stack{

  }
</style>


<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top nav-underline">
    <div class="container">
      <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
        Borneo Explorer
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item me-1">
            <a class="nav-link active" aria-current="page" href="#">Permainan</a>
          </li>
          <li class="nav-item me-1">
            <button id="triger_aturan_permainan" class="nav-link" data-bs-toggle="modal" data-bs-target="#aturan_permainan">Aturan Permainan</button>
          </li>
          <li class="nav-item dropdown me-2">
            <button id="pembuat-btn" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pembuat
            </button>
            <ul id="pembuat" class="dropdown-menu py-1" style="width: 23rem;">
              @isset($data['post'])
                @foreach ($data['creator'] as $name => $sosialMedia)
                  <li class="d-flex py-1 border-bottom">
                    <img src="https://robohash.org/{{ Str::camel($name) }}?set=set4" alt="" style="">
                    <div class="ms-3 d-flex flex-column justify-content-center">
                      <p class="mb-0">{{ $name }}</p>
                      <div class="sosial-media">
                        {{-- sosial media LOOP --}}
                        @foreach ($sosialMedia as $sm => $link)  
                          <a class="me-1" href="{{ $link }}" target="_blank"><i class="{{ $data['class_sosialMedia'][$sm] }}"></i></a>
                        @endforeach
                      </div>
                    </div>
                  </li>
                @endforeach
              @endisset
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Tutorial</a>
          </li>
        </ul>
        @isset($data['game'])
          <a href="host/{{ $data['game']['key'] }}" target="_blank" class="small link-secondary mx-1 mb-md-0 link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{{ $data['game']['key'] }}</a>  
        @endisset
        <div class="d-flex">
          <button class="btn btn-outline-primary hover-i-spin me-1" data-bs-toggle="modal" data-bs-target="#pengaturan_permainan"><i class="fa-gear fa-solid"></i></button>
          <button id="fullscreen-btn" class="btn btn-outline-info me-1">
            <span class="fa-stack d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-expand fa-stack-2x"></i>
              <i class="fullscreen fa-solid fa-up-right-and-down-left-from-center"></i>
              <i class="d-none minimize fa-solid fa-down-left-and-up-right-to-center"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <x-modal.rule :data="$data"></x-modal.rule>
  <x-modal.setting :data="$data"></x-modal.setting>


<script>
  $(document).ready(function() {
    let dropDown = false;
    @if (!isset($data['post']))
      const myModal = new bootstrap.Modal('#aturan_permainan', {
        keyboard: false
      })
      myModal.show($('#triger_aturan_permainan'))
    @endif
    $('#fullscreen-btn').click(function() {
      $('.fullscreen').toggleClass('d-none');
      $('.minimize').toggleClass('d-none');
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    // $('#pembuat-btn').hover(function () {
    //   const drop_pembuat = new bootstrap.Dropdown($('#pembuat'))
    //   drop_pembuat.show();
    // });
  });
</script>
