Soal.Tabalong = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text =  `
            <p class="m-0">Desa Wisata Riam Bidadari di Desa Lumbang, Muara Uya, Kabupaten Tabalong dikenal dengan keindahan lahan basah dan air terjunnya. Untuk mengetahui minat wisatawan terhadap kawasan ini, sekelompok siswa melakukan survei terhadap jumlah pengunjung dalam 10 hari berturut-turut. Berikut adalah data jumlah pengunjung per hari: <p>
            <p class="m-0">__daftar_nilai__ <p>
            <p class="m-0">Berdasarkan data di atas, tentukan rata-rata (mean) jumlah pengunjung per hari.<p>
        `;
        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let randomEntries = '';
        console.log(typeof (Tabalong.random_statistika));
        
        let data = [];
        let length = 10;
        do {
            for (let index = 0; index < length-2; index++) {
                data.push(Soal.randomInterval(120, 150));
            }
            data.push(Soal.randomInterval(130, 150));
            data[length-1] = data[length-1] - (data.reduce((a,b)=>a+b) % length);
        } while (Tabalong.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        Tabalong.random_statistika.lastPush(randomEntries);

        window.setting.jawaban = data.reduce((a,b)=>a+b)/length;
        return text.replace('__daftar_nilai__', data.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `<p class="m-0"> Wisata alam Sungai Tebing Durian yang berlokasi di Desa Purui, Kecamatan Jaro, Kabupaten Tabalong, menawarkan wahana river tubing. Disediakan dua jenis paket river tubing: </p>
        <ul class="mb-0" style="list-style-type: '- ';">
            <li>Paket A: Durasi 30 menit, dengan harga Rp40.000</li>
            <li>Paket B: Durasi 1 jam, dengan harga Rp70.000</li>
        </ul>
        <p class="m-0"> Suatu hari, ada __m__ orang yang membeli paket river tubing (gabungan Paket A dan Paket B). Total pendapatan dari penjualan paket hari itu adalah Rp__n__. Berapa orang yang membeli Paket A dan berapa orang yang membeli Paket B?</p>`;
        let m = 0;
        let x = 0;

        do {
            m = Soal.randomInterval(8, 12);
            x = Soal.randomInterval(1, 8);
        } while (Tabalong.random_persamaan_linear.array_in_array([a, x]));
        Tabalong.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = x + ' dan ' + (m-y);
        return text
            .replace('__m__', m)
            .replace('__n__', (40000*x + 70000*(m-x)).toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Kabupaten Tabalong memiliki 12.856 hektare lahan basah yang digunakan untuk pertanian padi. Seorang petani menanam padi di sawahnya dengan luas awal __a__ hektare, kemudian setiap musim tanam ia menambah luas tanamannya sebesar __b__ hektare. Berapa luas lahan yang akan ditanami pada musim tanam ke-__n__?"


        //Ketentuan Random:
        // a = 2 − 5
        // b = 0, 5 − 1, 5 (kelipatan 0,5)
        // n = 8 − 12
        // Jawaban: Un = a + (n − 1)b
        // random
        let a = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(2, 5);
            b = Soal.randomInterval(0.5, 1.5, 0.5);
            n = Soal.randomInterval(8, 12);
            console.log('selesai random, akan di cek');
            
        } while (Tabalong.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        Tabalong.random_barisan_dan_deret.lastPush([a, b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = a+b*(n-1);
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a)
            .replace('__b__', b)
            .replace('__n__', n);
    }
};