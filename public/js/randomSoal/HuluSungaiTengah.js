window.HuluSungaiTengah = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
       let text = `Hulu Sungai Tengah dikenal sebagai salah satu penghasil padi utama di Kalimantan Selatan. Seorang petani padi mencatat hasil panen dalam kuintal selama 6 bulan berturut-turut sebagai berikut: __data__. Hitunglah rata-rata hasil panen per bulan.`;
        
        let data = [];
        
        do {
            data = Soal.randomArray(10, 20, 6, 6);
        } while (HuluSungaiTengah.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        HuluSungaiTengah.random_statistika.lastPush(data);

        window.setting.jawaban = data.mean();
        window.setting.soal_sound = '';
        return text
            .replace('__data__', data.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text =  `Sifu, salah satu masyarakat Dusun Awang, adalah seorang peternak kerbau rawa. Ia ingin membagi kerbau tersebut ke dalam dua kelompok berdasarkan jenis kelaminnya. Sifu memiliki kerbau sebanyak __a__ ekor. Jika jumlah kerbau betina sebanyak __x__ ekor, berapa jumlah kerbau rawa berjenis kelamin jantan?`;
        let a = 0;
        let x = 0;

        do {
            a = Soal.randomInterval(150, 200);
            x = Soal.randomInterval(30, 50);
        } while (HuluSungaiTengah.random_persamaan_linear.array_in_array([a, x]));
        HuluSungaiTengah.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = a-x;
        window.setting.soal_sound = '';
        return text
            .replace('__a__', a)
            .replace('__x__', x);
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = `Seorang pengelola wisata mencatat jumlah pengunjung ke Riam Bajandik selama 3 hari berturut-turut adalah sebagai berikut: __1__, __2__, dan __3__. Berdasarkan data tersebut, barisan apakah yang terbentuk dari pola banyak pengunjung?`;
        // random
        let a = 0;
        let b = 0;
        let r = 0;
        let barisan = 0;
        
        do {
            a = Soal.randomInterval(100, 200, 10);
            b = Soal.randomInterval(30, 50, 5);
            r = Soal.randomInterval(2,3);
            barisan = Soal.randomInterval(0, 1);
        } while (HuluSungaiTengah.random_barisan_dan_deret.array_in_array([a, b, r, barisan]));
        console.log('masukkan ke array record');
        HuluSungaiTengah.random_barisan_dan_deret.lastPush([a, b, r, barisan]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = 'Barisan ' + (barisan ? 'Geometri' : 'Aritmatika');
        window.setting.soal_sound = '';
        return text
            .replace('__1__', a)
            .replace('__2__', (barisan ? a*r : a+b))
            .replace('__3__', (barisan ? a*r*r : a+b+b))
    }
};