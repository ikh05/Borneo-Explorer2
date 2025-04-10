window.TanahBumbu = {
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
        console.log(typeof (TanahBumbu.random_statistika));
        
        do {
            console.log('statistika iterasi_random');
            randomEntries = Object.entries(data)
            .shuffleArray()
            .slice(0, 3)
            .sort((a, b) => a[0] - b[0]);
            console.log('statistika sudah_di random');
        } while (TanahBumbu.random_statistika.array_in_array(randomEntries));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        TanahBumbu.random_statistika.lastPush(randomEntries);

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
        } while (TanahBumbu.random_persamaan_linear.array_in_array([a, x]));
        TanahBumbu.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+(200000 - a*x).toLocaleString('id-ID')+'\\),-';
        return text
            .replace('__a__', a)
            .replace('__x__', x.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Di Desa Pulau Burung, Kecamatan Simpang Empat, masyarakat memanfaatkan mangrove sebagai pewarna alami untuk kain sasirangan. Proses ini lebih ramah lingkungan dibandingkan dengan pewarna sintetis dan semakin diminati oleh perajin kain tradisional.Seorang pengrajin kain membutuhkan __a__ kg daun mangrove pada hari pertama untuk menghasilkan pewarna alami. Setiap hari berikutnya, jumlah daun yang dibutuhkan bertambah __b__ kg dari hari sebelumnya. Berapa kg daun mangrove yang dibutuhkan pada hari ke-__n__?";
        
        // Ketentuan Random:
        // a = 2 − 5
        // b = 0, 5 − 1, 5 (kelipatan 0,5)
        // n = 7 − 10
        // Jawaban: Un = a + (n − 1)b

        // random
        let a = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(2,5);
            b = Soal.randomInterval(0.5, 1.5, 0.5);
            n = Soal.randomInterval(7, 10);
            console.log('selesai random, akan di cek');
            
        } while (TanahBumbu.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        TanahBumbu.random_barisan_dan_deret.lastPush([a, b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = a+b*(n-1)+" kg";
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a)
            .replace('__b__', b)
            .replace('__n__', n);
    }
};