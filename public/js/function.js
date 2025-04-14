$(document).ready(function () {



Array.prototype.joinName = function (index = 0) {
  const count = this.length;
  
  if (count === 0) {
      return "";
  } else{
    let data = this;
    if(Array.isArray(data[0])){
      data = data.map(e => e[index]);
    }
    if (count === 1) {
        return data[0];
    } else if (count === 2) {
        return `${data[0]} dan ${data[1]}`;
    } else {
        const firstPart = data.slice(0, -1).join(', ');
        const lastPart = data[count - 1];
        return `${firstPart}, dan ${lastPart}`;
    }
  }
}
Array.prototype.shuffleArray = function() {
  // Salin array menggunakan slice() (untuk menghindari modifikasi array asli)
  let newArray = this.slice();
  
  // Algoritma Fisher-Yates shuffle
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  console.log("random urutan");
    
  return newArray;
}

Array.prototype.array_in_array = function(arr) {
  console.log('cek array');
    
  // Fungsi untuk membandingkan dua array secara rekursif (deep comparison)
  const arraysEqual = (a, b) => {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length !== b.length) return false;
      
      for (let i = 0; i < a.length; i++) {
          if (Array.isArray(a[i]) && Array.isArray(b[i])) {
              if (!arraysEqual(a[i], b[i])) return false;
          } else if (a[i] !== b[i]) {
              return false;
          }
      }
      return true;
  };
  
  // Cek setiap elemen dalam array ini terhadap array target
  for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && Array.isArray(arr)) {
          if (arraysEqual(this[i], arr)) {
              return true;
          }
      } else if (this[i] === arr) {
          return true;
      }
  }
  
  return false;
}

Array.prototype.lastPush = function(item, maxLength = 5) {
    // Jika array mencapai maxLength, hapus elemen pertama
    if (this.length >= maxLength) {
      this.shift(); // Hapus elemen pertama
    }
    this.push(item); // Tambahkan elemen baru
    return this; // Return array untuk chaining
};

window.Soal = {
  randomInterval: function (min, max, kelipatan=1) {
    // random
    if(min > max){
      let buff = min; min = max; max = buff;
    }
    
    // Hitung range dalam kelipatan
    const range = (max - min) / kelipatan;
    
    // Generate random number dalam range kelipatan
    const randomMultiples = Math.floor(Math.random() * (range + 1));
    
    // Hitung hasil akhir
    const result = min + (randomMultiples * kelipatan);
    
    return result;
  }
  
}

});


function playTeks(teks) {
  const msg = new SpeechSynthesisUtterance(teks);
  msg.lang = 'id-ID'; // Bahasa Indonesia
  msg.rate = 1;
  window.speechSynthesis.speak(msg);
}
function stopTeks() {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
}


function addSoalDataBase() {
  const data = {
    soal_text: window.setting.soal,
    lokasi: window.setting.lokasi,
    materi: window.setting.materi,
    jawaban: window.setting.jawaban,
    game_id: window.setting.game,
    // soal_sound: document.getElementById('soal_sound').value // jika nanti digunakan
  };
  
  // Kirim data ke server menggunakan fetch
  fetch('/simpan-soal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => { throw err; });
    }
    return response.json();
  })
  .then(result => {
    console.log('Berhasil disimpan:', result);
    alert(result.message);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
    alert('Gagal menyimpan soal!');
  });
  
}
