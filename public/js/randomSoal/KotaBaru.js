window.KotaBaru = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        const data = {
            2004: 11189920000,
            2005: 14845000000,
            2006: 22179635000,
            2007: 19073670000,
            2011: 22475238000
        }
        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let randomEntries = '';
        console.log(typeof (KotaBaru.random_statistika));
        
        do {
            console.log('statistika iterasi_random');
            randomEntries = Object.entries(data)
            .shuffleArray()
            .slice(0, 3)
            .sort((a, b) => a[0] - b[0]);
            console.log('statistika sudah_di random');
        } while (KotaBaru.random_statistika.array_in_array(randomEntries));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        KotaBaru.random_statistika.lastPush(randomEntries);

        window.setting.jawaban = 'Rp\\('+((randomEntries[0][1] + randomEntries[1][1] + randomEntries[2][1])/3).toLocaleString('id-ID')+'\\),-'
        return text
            .replace('__tahunA__', randomEntries[0][0])
            .replace('__tahunB__', randomEntries[1][0])
            .replace('__tahunC__', randomEntries[2][0]);
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam

        let a = 0;
        let x = 0;

        do {
            a = Soal.randomInterval(6,9);
            x = Soal.randomInterval(20000, 22000, 1000);
        } while (KotaBaru.random_persamaan_linear.array_in_array([a, x]));
        KotaBaru.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+(200000 - a*x).toLocaleString('id-ID')+'\\),-';
        return text
            .replace('__a__', a)
            .replace('__x__', x.toLocaleString('id-ID'));
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
            
        } while (KotaBaru.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        KotaBaru.random_barisan_dan_deret.lastPush([a, b, n]);
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