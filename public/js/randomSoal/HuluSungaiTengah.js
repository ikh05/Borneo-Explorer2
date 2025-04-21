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
    },


    
    random_pintas: ['', '', '', '', ''],
    pintas: function(){
        let text =`
        <p class="mb-0">Sumber data lahan rawa di Kabupaten Hulu Sungai Tengah meliputi 3 (tiga) wilayah kecamatan yaitu Kecamatan Labuan Amas Utara, Kecamatan Labuhan Amas Selatas, dan Kecamatan Pandawan dengan luas total 21.300 hektare. Terjadi penyusutan luas hutan rawa akibat alih fungsi lahan menjadi perumahan. Berikut data total luas lahan 2018-2022 sebagai berikut:<p>
        <ul>
            <li>Tahun 2018: 21.300 hektare</li>
            <li>Tahun 2019: 21.000 hektare</li>
            <li>Tahun 2020: __a__ hektare</li>
            <li>Tahun 2021: __b__ hektare</li>
            <li>Tahun 2022: __c__ hektare</li>
        </ul>
        <p class="mb-0"> Hitunglah rata-rata penyusutan luas hutan rawa per tahun dalam hektare!<p>
        `;
        
        let a = 0;
        let b = 0;
        let c = 0;
        do {
            a = Soal.randomInterval(400, 600, 100);
            b = Soal.randomInterval(700, 900, 100);
            c = Soal.randomInterval(400, 600, 100);
        } while (HuluSungaiSelatan.random_pintas.array_in_array([a, b,c]));
        console.log('masukkan ke array record');
        HuluSungaiSelatan.random_pintas.lastPush([a, b, c]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = ((300 + a + b + c)/4).toLocaleString('id-ID')+" hektare";
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', (21000-a).toLocaleString('id-ID'))
            .replace('__b__', (21000-a-b).toLocaleString('id-ID'))
            .replace('__c__', (21000-a-b-c).toLocaleString('id-ID'));
    }
};