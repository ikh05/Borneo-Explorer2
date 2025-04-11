<div id="logo_be" style="width: 100vw; height: 100vh; background-color: #121212; position: fixed; z-index: 5000000;">
    <div class="opacity-0">
        <img src="img/logo/logo_be.svg" alt="" style="max-height: 80vh; max-width: 80vw; padding: 5rem; background-color: #242424; border: 3px blueviolet solid" class="position-absolute top-50 start-50 translate-middle rounded-circle">
        <div style="width: 90%; height: .7rem; border: 1px blueviolet solid; border-radius: .1rem" class="position-absolute bottom-0 mb-4 start-50 translate-middle-x d-flex align-items-center">
            <span style="height: 100%; max-width: 100%; background-color: #99bdd2;"></span>
            <img id="loading_kapal" src="img/logo/start_loading.png" style="width: 4rem; top: -2rem;" alt="" class="position-absolute">
        </div>
    </div>
</div>

<script>
    $(document).ready(function () {
        $('#logo_be div.opacity-0').removeClass('opacity-0');
        setTimeout(() => {
            $('#logo_be').addClass('run');
            setTimeout(()=>{
                $('#logo_be').addClass('opacity-0');
                setTimeout(()=>{
                    $('#logo_be').addClass('d-none');
                }, 1000);
            }, 5500);
        }, 1000);
    });
</script>

<style>
    #logo_be span,
    #logo_be #loading_kapal{
        transition: all 5s;
        transition-timing-function:  cubic-bezier(0.7, 0.01, 0.3, 1);
    }
    #logo_be span{
        width: 3rem;
    }
    #logo_be #loading_kapal{
        margin-left: 0;
    }
    #logo_be.run span{
        width: 100%;
    }
    #logo_be.run #loading_kapal{
        margin-left: calc(100% - 3rem);
    }
</style>

