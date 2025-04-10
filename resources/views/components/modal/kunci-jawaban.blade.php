<div class="modal fade" id="jawaban" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="jawabanLabel">Kunci Jawaban</h1>
          </div>
          <div class="modal-body text-center">
            <p id="kunci_jawaban" class="fs-3">5</p>
            <!-- <form action="" method="post"> -->
              <div class="d-flex flex-column mb-3">
                <label for="jawaban_kelompok">Kelompok yang menjawab</label>
                <select name="kelompok" id="jawaban_kelompok" class="form-select">
                  <option value="kelompok_1">Kelompok 1</option>
                  <option value="kelompok_2">Kelompok 2</option>
                  <option value="kelompok_3">Kelompok 3</option>
                  <option value="kelompok_4">Kelompok 4</option>
                </select>
              </div>
              <p class="mb-0">Apakah jawabannya benar?</p>
              <div class="mb-3 input-group justify-content-center">
                <button style="width: 5rem;" class="btn btn-success" type="button" name="banar" data-bs-dismiss="modal">Ya</button>
                <button style="width: 5rem;" class="btn btn-danger" type="button" name="salah" data-bs-dismiss="modal">Tidak</button>
              </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>