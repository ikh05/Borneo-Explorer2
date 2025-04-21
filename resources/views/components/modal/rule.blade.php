<!-- Aturan Permainan -->
<div class="modal fade " id="aturan_permainan" @if(!isset($data['post'])) data-bs-backdrop="static" @endif data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="aturan_permainanLabel">@if (isset($data['post']))
              Aturan Permainan
          @else
              Selamat Datang ~ Aturan Permainan
          @endif</h1>
          @if (isset($data['post']))
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          @endif
        </div>
        <div class="modal-body">
          <ul style="list-style-type: decimal;">
              <li><strong>Giliran Pemain:</strong>
                  <ul style="list-style: circle">
                      <li>Kelompok bermain secara bergiliran.</li>
                      <li>Setiap kelompok memilih nomor soal (1–9) saat giliran mereka.</li>
                  </ul>
              </li>
              
              <li><strong>Jenis Nomor Soal:</strong>
                  <ul style="list-style: circle">
                      <li>Kabupaten dengan tanda <i class="fa-solid fa-road-circle-exclamation"></i> memiliki jalan pintas. Dengan soal yang sulit sebagai tantangannya</li>
                      <li><strong>Soal Biasa (6 nomor):</strong>
                          <ul>
                              <li>Jawab benar → maju ke kabupaten berikutnya.</li>
                              <li>Jawab salah/waktu mengerjakan habis → tetap di tempat, ganti pemain.</li>
                          </ul>
                      </li>
                      <li><strong>🐟 Ikan Gabus (2 nomor):</strong> Langsung melompat ke kabupaten berikutnya (tanpa jawab soal).</li>
                      <li><strong>🐡 Ikan Buntal (1 nomor):</strong> Terjebak di kabupaten saat ini (tidak ganti pemain).</li>
                  </ul>
              </li>
              
              <li><strong>Waktu & Diskusi:</strong>
                  <ul style="list-style: circle">
                      <li>Waktu yang diberikan untuk mengerjakan soal adalah <strong>3 menit </strong> <span class="text-danger">(bisa diubah)</span>.</li>
                      <li>Tidak boleh diskusi dengan kelompok—hanya pemain yang sedang giliran yang menjawab.</li>
                  </ul>
              </li>
              
              <li><strong>Penentuan Pemenang:</strong>
                  <ul style="list-style: circle">
                      <li>Kelompok pertama yang sampai di kabupaten terakhir menang.</li>
                      <li>Jika waktu habis, kelompok yang paling jauh menang.</li>
                  </ul>
              </li>
              
              <li><strong>Peraturan Penting:</strong>
                  <ul style="list-style: circle">
                      <li>Keputusan guru/fasilitator adalah final jika ada perselisihan.</li>
                      <li>Semua peserta harus sportif dan aktif.</li>
                  </ul>
              </li>

              <li><strong>Peraturan Tambahan:</strong>
                <ul style="list-style: circle">
                    <li>Permainan dapat disesuaikan dengan kondisi yang ada</li>
                </ul>
              </li>

              <a class="mt-1" href="http://drive.google.com/drive/folders/1w09_zyAjTjmq2gcXIcITsi8Q3KwWacRe"><i class="fa-solid fa-file-arrow-down"></i> Download Papan Permainan</a>
          </ul>
        </div>
        @if (!isset($data['post']))
            <div class="modal-footer d-flex justify-content-end">
              <button class="btn btn-outline-warning hover-up" data-bs-toggle="modal" data-bs-target="#pengaturan_permainan"><i class="fa-solid fa-flag-checkered"></i> Buat Permainan</button>
            </div>
        @endif
      </div>
    </div>
  </div>