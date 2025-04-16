window.Kotabaru = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = `<p class="m-0"> Kabupaten Kotabaru dikenal dengan budidaya kepiting bakau yang dibina oleh Dinas Perikanan. Kepiting bakau ini menjadi salah satu komoditas unggulan yang banyak dikirim ke berbagai daerah. Para peternak kepiting mencatat berat kepiting yang mereka panen setiap minggu untuk memastikan kualitasnya tetap terjaga. Berikut adalah data berat kepiting (dalam kg) yang dipanen dalam satu minggu terakhir: </p> 
        <p class="m-0"> __daftar_data__ </p> 
        <p class="m-0"> Hitunglah rata-rata (mean) berat kepiting yang dipanen!</p>`;

        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let data = [];
        console.log(typeof (Kotabaru.random_statistika));
        
        do {
            data = Soal.randomArray(0.8, 1.5, 7, 7, 0.1, 1)
        } while (Kotabaru.random_statistika.array_in_array(data));
        console.log(data);

        // simpan ke daftar 5 terakhir
        Kotabaru.random_statistika.lastPush(data);
        window.setting.jawaban = data.reduce((a,b)=>a+b)/data.length;
        return text.replace('__daftar_data__', data.join(' - '));
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `Di Kabupaten Kotabaru terdapat beberapa pulau kecil yang hanya dapat diakses dengan perahu nelayan. Sebuah kelompok peneliti ingin melakukan penelitian ekosistem mangrove di salah satu pulau dan menyewa perahu untuk perjalanan. Biaya sewa perahu terdiri dari biaya tetap Rp__y__ dan biaya tambahan Rp50.000 per kilometer perjalanan. Jika kelompok peneliti memiliki anggaran maksimal Rp__x__, berapa kilometer maksimal perjalanan yang bisa mereka tempuh?`;
        // Ketentuan Random:
        // x = 500.000 − 800.000 (kelipatan 100.000)
        // y = 100.000 − 200.000 (kelipatan 50.000)
        // Jawaban: (x − y)/50000
        let x = 0;
        let y = 0;

        do {
            x = Soal.randomInterval(500000, 800000, 100000);
            y = Soal.randomInterval(100000, 200000, 50000);
        } while (Kotabaru.random_persamaan_linear.array_in_array([x, y]));
        Kotabaru.random_persamaan_linear.lastPush([x, y]);

        // jawaban
        window.setting.jawaban = ((x - y)/50000).toLocaleString('id-ID')+' km';
        return text
        .replace('__x__', x.toLocaleString('id-ID'))
        .replace('__y__', y.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Sebagian besar hutan mangrove di Kecamatan Pulau Laut Timur mengalami kerusakan akibat konversi lahan menjadi tambak. Untuk mengurangi dampak tersebut, warga sekolah SMAN 1 Pulau Laut Timur aktif melakukan rehabilitasi dengan menanam bibit mangrove. Pada bulan pertama, mereka menanam __a__ bibit. Setiap bulan berikutnya, jumlah bibit yang ditanam bertambah __b__ bibit dari bulan sebelumnya. Berapa banyak bibit yang akan ditanam pada bulan ke-__n__?"

        // a = 200 − 500, 
        // b = 50 − 100 (kelipatan 10) 
        // n = 7 − 10 
        // Jawaban: Un = a + (n − 1)b

        // random
        let a = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(200, 500);
            b = Soal.randomInterval(50, 100, 10);
            n = Soal.randomInterval(7, 10);
            console.log('selesai random, akan di cek');
            
        } while (Kotabaru.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        Kotabaru.random_barisan_dan_deret.lastPush([a, b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = (a+b*(n-1));
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a)
            .replace('__b__', b)
            .replace('__n__', n);
    }
};