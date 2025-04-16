window.Tabalong = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ 
        let text =  `
            <p class="m-0">Desa Wisata Riam Bidadari di Desa Lumbang, Muara Uya, Kabupaten Tabalong dikenal dengan keindahan lahan basah dan air terjunnya. Untuk mengetahui minat wisatawan terhadap kawasan ini, sekelompok siswa melakukan survei terhadap jumlah pengunjung dalam 10 hari berturut-turut. Berikut adalah data jumlah pengunjung per hari: <p>
            <p class="m-0">__daftar_nilai__ <p>
            <p class="m-0">Berdasarkan data di atas, tentukan rata-rata (mean) jumlah pengunjung per hari!<p>
        `;
        let sound = `
            Desa Wisata Riam Bidadari di Desa Lumbang, Muara Uya, Kabupaten Tabalong dikenal dengan keindahan lahan basah dan air terjunnya. Untuk mengetahui minat wisatawan terhadap kawasan ini, sekelompok siswa melakukan survei terhadap jumlah pengunjung dalam 10 hari berturut-turut. Berikut adalah data jumlah pengunjung per hari: 
            __daftar_nilai__.
            Berdasarkan data di atas, tentukan rata-rata (mean) jumlah pengunjung per hari!
        `;
        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let randomEntries = '';
        console.log(typeof (Tabalong.random_statistika));

        let data = [];
        do {
            data = Soal.randomArray(120, 150, 10, 10)
        } while (Tabalong.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        Tabalong.random_statistika.lastPush(randomEntries);

        window.setting.jawaban = data.mean();
        window.setting.text_sound = sound.replace('__daftar_nilai__', data.joinName());
        return text.replace('__daftar_nilai__', data.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `<p class="m-0"> Wisata alam Sungai Tebing Durian yang berlokasi di Desa Purui, Kecamatan Jaro, Kabupaten Tabalong, menawarkan wahana river tubing. Disediakan dua jenis paket river tubing: </p>
        <ul class="mb-0" style="list-style-type: '- ';">
            <li>Paket A: Durasi 30 menit, dengan harga Rp40.000,-</li>
            <li>Paket B: Durasi 1 jam, dengan harga Rp70.000,-</li>
        </ul>
        <p class="m-0"> Suatu hari, ada __b__ orang pengunjung yang membeli paket B. Jika total pendapatan dari penjualan paket hari itu adalah Rp__n__. Berapa orang yang membeli Paket A?</p>`;

        let sound = `Wisata alam Sungai Tebing Durian yang berlokasi di Desa Purui, Kecamatan Jaro, Kabupaten Tabalong, menawarkan wahana river tubing. Disediakan dua jenis paket river tubing:
            Paket A: Durasi 30 menit, dengan harga Rp40.000,-
            Paket B: Durasi 1 jam, dengan harga Rp70.000,-
        Suatu hari, ada __b__ orang pengunjung yang membeli paket B. Jika total pendapatan dari penjualan paket hari itu adalah Rp__n__. Berapa orang yang membeli Paket A?`;
        let a = 0;
        let b = 0;
        let n = 0;
        do {
            a = Soal.randomInterval(3, 5);
            b = Soal.randomInterval(7, 10);
            n = 40000*a + 70000*b;
        } while (Tabalong.random_persamaan_linear.array_in_array([a, b]));
        Tabalong.random_persamaan_linear.lastPush([a, b]);

        window.setting.soal_sound = sound.replace('__b__', b)
            .replace('__n__', n.toLocaleString('id-ID'))
        // jawaban
        window.setting.jawaban = a;
        return text
            .replace('__b__', b)
            .replace('__n__', n.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Kabupaten Tabalong memiliki 12.856 hektare lahan basah yang digunakan untuk pertanian padi. Seorang petani menanam padi di sawahnya dengan luas awal __a__ hektare, kemudian setiap musim tanam ia menambah luas tanamannya sebesar __b__ hektare. Berapa luas lahan yang akan ditanami pada musim tanam ke-__n__?"


        let a = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(2, 5);
            b = Soal.randomInterval(1, 3);
            n = Soal.randomInterval(8, 12);
            console.log('selesai random, akan di cek');
            
        } while (Tabalong.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        Tabalong.random_barisan_dan_deret.lastPush([a, b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = a+b*(n-1);
        window.setting.soal_sound = '';
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a)
            .replace('__b__', b)
            .replace('__n__', n);
    }
};