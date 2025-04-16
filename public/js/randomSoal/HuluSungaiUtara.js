window.HuluSungaiUtara = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = `Desa Banyu Hirang di Hulu Sungai Utara dikenal sebagai sentra kerajinan eceng gondok, yang menghasilkan produk seperti tas dan tempat tisu. Selama lima hari kerja berturut-turut, kelompok pengrajin mencatat jumlah produk yang dihasilkan, yaitu __data__. Rata-rata dari banyak produk kerajinan tersebut adalah ....`;
        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let data = [];
        
        do {
            data = Soal.randomArray(20, 50, 5, 1, 5);
        } while (HuluSungaiUtara.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        HuluSungaiUtara.random_statistika.lastPush(data);

        window.setting.jawaban = data.mean();
        window.setting.soal_sound = '';
        data.map(e => e+" unit");
        return text
            .replace('__data__', data.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = 'Wisata rumah terapung terletak di Desa Banyu Hirang, Kecamatan Amuntai Selatan, Kab. HSU. Kawasan ini ramai dikunjungi wisatawan, terutama saat akhir pekan. Di area wisata tersedia parkiran roda dua dengan tarif Rp__a__,00 (a) per kendaraan. Pada hari libur, seorang petugas parkir mendapatkan uang sebesar Rp__b__,00 (b). Jika x menyatakan jumlah kendaraan yang parkir, maka model persamaan linier satu variabel berdasarkan informasi di atas adalah?'
        let a = 0;
        let x = 0;
        let b = 0;
        do {
            a = Soal.randomInterval(300, 5000, 1000);
            x = Soal.randomInterval(95, 100);
        } while (HuluSungaiUtara.random_persamaan_linear.array_in_array([a, x]));
        HuluSungaiUtara.random_persamaan_linear.lastPush([a, x]);

        b = x*a;

        // jawaban
        window.setting.jawaban = a+"x = "+b;
        window.setting.soal_sound = '';

        return text
            .replace('__a__', a.toLocaleString('id-ID'))
            .replace('__b__', b.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = 'Itik Alabio merupakan unggas penghasil telur yang banyak dibudidayakan di lahan rawa Hulu Sungai Utara. Di sebuah peternakan, produksi telur meningkat secara tetap setiap bulannya: bulan pertama __1__ butir, kedua __2__ butir, ketiga __3__ butir, dan seterusnya. Berdasarkan data tersebut, barisan apakah yang terbentuk dari pola produksi telur itik setiap bulannya?';
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
            .replace('__3__', (barisan ? a*r*r : a+b+b));
    }
};