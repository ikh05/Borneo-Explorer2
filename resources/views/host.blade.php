{{-- @dd($data) --}}

<form id="formSoal" method="POST" action="/simpan-soal">
    @csrf
    <label>Lokasi:</label>
    <input type="text" name="lokasi" value="BaritoKuala"><br>
  
    <label>Materi:</label>
    <input type="text" name="materi" value="barisan_dan_deret"><br>
  
    <label>Soal Text:</label>
    <textarea name="soal_text">Contoh soal...</textarea><br>
  
    <label>Soal Sound:</label>
    <input type="text" name="soal_sound" value=""><br>
  
    <label>Game ID:</label>
    <input type="number" name="game_id" value="1"><br>
  
    <label>Jawaban:</label>
    <input type="text" name="jawaban" value="Rp\\(330.000\\),-"><br>
  
    <button type="submit">Kirim</button>
  </form>