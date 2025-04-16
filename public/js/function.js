$(document).ready(function () {



Array.prototype.joinName = function (index = 0, join=",") {
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
        const firstPart = data.slice(0, -1).join(join+' ');
        const lastPart = data[count - 1];
        return `${firstPart}${join} dan ${lastPart}`;
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
Array.prototype.mean = function (decimal = false) {
  let mean = this.reduce((a, b) => a + b, 0)/this.length;
  return decimal !== false ? Soal.roundDecimal(mean, decimal) : mean; 
}

Array.prototype.modus = function () {
  const frek = this.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
  const max = Math.max(...Object.values(frek));
  return Object.keys(frek).filter(k => frek[k] === max).map(Number);
}

window.Soal = {
  roundDecimal: function (value, decimal) {
    if (decimal === false) return value;
    const factor = Math.pow(10, decimal);
    return Math.round(value * factor) / factor;
  },

  randomInterval: function (min, max, kelipatan=1, decimal = false) {
    // random
    if(min > max){
      [max, min] = [min, max];
    }
    
    // Hitung banyaknya kelipatan
    const range = (max - min) / kelipatan;
    const randomMultiples = Math.floor(Math.random() * (range + 1));
    let result = min + (randomMultiples * kelipatan);

    return this.roundDecimal(result, decimal);
  },
  randomArray: function (min, max, length, kelipatan_total = 1, kelipatan = 1, decimal = false) {
    let data = [];
    let last = 0;
    do {
      data = [];

      // Isi data sebanyak length - 1
      for (let i = 0; i < length - 1; i++) {
        data.push(this.randomInterval(min, max, kelipatan, decimal));
      }

      // Nilai terakhir, dijamin supaya total kelipatan kelipatan_total
      last = this.randomInterval(min, max, kelipatan);
      let totalSementara = data.reduce((a, b) => a + b, 0);
      last = last - (totalSementara + last) % kelipatan_total;

      // Validasi last tetap dalam rentang
    } while (last < min || last > max);
    
    data[length - 1] = last;
    return data.map(e => this.roundDecimal(e, decimal));
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
