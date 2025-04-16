window.Tapin = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = 'Pada tanggal 18 Februari 2021, Presiden Indonesia meresmikan salah satu aset negara yaitu Bendungan Tapin. Bendungan Tapin ini terletak di Desa Pipitak Jaya, Kecamatan Piani, Kabupaten Tapin, dan merupakan salah satu bendungan yang masuk dalam program pembangunan 65 bendungan besar di Indonesia. Bendungan ini diharapkan dapat memberikan manfaat untuk program pengairan lahan pertanian setempat seluas 5.472 hektar dan juga dapat mengendalikan banjir di Kabupaten Tapin. Jika dana pembangunan sekitar Rp__b__ triliun dialokasikan selama 5 tahun pembangunan (2015–2020), berapakah rata-rata dana yang dikeluarkan per tahun?';
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let b = 0;
        console.log(typeof (Tapin.random_statistika));
        
        do {
            b = Soal.randomInterval(900, 999)
        } while (Tapin.random_statistika.array_in_array(randomEntries));

        // simpan ke daftar 5 terakhir
        Tapin.random_statistika.lastPush(randomEntries);

        window.setting.jawaban = `Rp${b/5} triliun`;
        window.setting.soal_sound = ''
        return text
            .replace('__b__', b)
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = 'Pemerintah Kabupaten Tapin mencetak sawah rakyat seluas 564 hektare yang berpusat di Kecamatan Lokpaikat, guna memperkuat sektor pertanian. Kepala Dinas Pertanian Kabupaten Tapin, Mohammad Tri Asmoro, menuturkan setiap hektare lahan akan dikelola 15 petani milenial sebagai upaya untuk melibatkan anak muda pada sektor pertanian dan menjadikannya lebih menarik. Jika tersedia __x__ petani, maka berapa hektare lahan yang dapat dikelola?';
        let x = 0;

        do {
            x = Soal.randomInterval(5010, 7995, 15);
        } while (Tapin.random_persamaan_linear.array_in_array([a, x]));
        Tapin.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = (x/15) + ' hektar';
        window.setting.soal_sound = ''
        return text
            .replace('__x__', x.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = 'Daerah Rawa Muning merupakan daerah pengembangan lahan persawahan yang ditujukan untuk menunjang program transmigrasi. Namun, pengembangan Rawa Muning sebagai lahan persawahan menghadapi gangguan berupa genangan banjir pada areal usaha tani apabila musim hujan dan mengalami kondisi kekeringan pada saat musim kemarau. Permasalahan ini mengakibatkan berkurangnya jumlah transmigran. Jumlah penduduk transmigrasi awalnya 1180 kepala keluarga (kk) pada tahun 1998. Jika transmigran berkurang sebanyak __b__ kk setiap tahunnya, maka jumlah transmigran tersisa pada tahun __t__ adalah ... kk.';
        // random
        let t = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            t = Soal.randomInterval(2003, 2005);
            n = t - 1998;
            b = Soal.randomInterval(40, 80, 10);
            console.log('selesai random, akan di cek');
            
        } while (Tapin.random_barisan_dan_deret.array_in_array([t,n,b]));
        console.log('masukkan ke array record');
        Tapin.random_barisan_dan_deret.lastPush([t,n,b]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = 1180 - (b*n);
        window.setting.soal_sound = '';
        console.log('jawaban di dapatkan');
        return text
            .replace('__t__', t)
            .replace('__b__', b)
            .replace('__n__', n);
    }
}