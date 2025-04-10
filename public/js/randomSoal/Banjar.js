window.Banjar = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = `
        Pada tahun 2016, produksi padi di Kabupaten Banjar sebagai berikit!
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Kecamatan</th>
                    <th scope="col">Produksi (Ton)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Sungai Tabuk</th>
                    <td>15</td>
                </tr>
                <tr>
                    <th scope="row">Karang Intan</th>
                    <td>799</td>
                </tr>
                <tr>
                    <th scope="row">Aranio</th>
                    <td>3933</td>
                </tr>
                <tr>
                    <th scope="row">Sungai Pinang</th>
                    <td>12150</td>
                </tr>
                <tr>
                    <th scope="row">Paramasan</th>
                    <td>2478</td>
                </tr>
                <tr>
                    <th scope="row">Pengaron</th>
                    <td>4046</td>
                </tr>
                <tr>
                    <th scope="row">Sumbung Makmur</th>
                    <td>2140</td>
                </tr>
                <tr>
                    <th scope="row">Mataraman</th>
                    <td>450</td>
                </tr>
                <tr>
                    <th scope="row">Simpang Empat</th>
                    <td>300</td>
                </tr>
            </tbody>
        </table>
        Berdasarkan data tersebut, berapakah rata-rata produksi pada pada kecamatan __daftar_kecamatan__?
        `;
        const data = {
            "Sungai Tabuk": 15,
            "Karang Intan": 799,
            "Aranio": 3933,
            "Sungai Pinang": 12150,
            "Paramasan": 2478,
            "Pengaron": 4046,
            "Sambung Makmur": 2140,
            "Mataraman": 450,
            "Simpang Empat": 300
          };
        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let randomEntries = '';
        console.log(typeof (Banjar.random_statistika));
        
        do {
            let banyak_kecamatan = Soal.randomInterval(3, 5);
            console.log('statistika iterasi_random');
            randomEntries = Object.entries(data)
            .shuffleArray()
            .slice(0, banyak_kecamatan);
            console.log('statistika sudah_di random');
        } while (Banjar.random_statistika.array_in_array(randomEntries));
        console.log(randomEntries);

        // simpan ke daftar 5 terakhir
        Banjar.random_statistika.lastPush(randomEntries);

        window.setting.jawaban = randomEntries.reduce((sum, item) => sum + item[1], 0) / randomEntries.length + ' ton';
        return text.replace('__daftar_kecamatan__', randomEntries.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{
        let = "Suatu perahu yang akan membawa ke Pasar Terapung Lok Baintan, maksimal membawa 60 penumpang dengan tarip Rp__x__,- untuk dewasa dan Rp__y__,- untuk anak-anak. Jika terdapat __a__ penumpang dewasa dan total pendapatan Rp__c__,-. Maka tentukan banyaknya penumpang anak-anak!";
        
        // Ketentuan Random:
        // bentuk umum : ax + by = c
        // x = 10.000 − 20.000 (kelipatan 1.000)
        // y = 8.000 − 15.000 (kelipatan 1.000 dan tidak lebih besar dari x)
        // a = 20 − 40
        // b = 20 − 30 (a + b tidak lebih dari 60)
        // c = ax + by
        // Jawaban: (c − ax)/y
        
        let a = 0;
        let x = 0;
        let b = 0;
        let y = 0;

        do {
            a = Soal.randomInterval(10000, 20000, 1000);
            do { b = Soal.randomInterval(8000, 15000, 1000);
            } while (b > a);
            x = Soal.randomInterval(20, 40);
            do { y = Soal.randomInterval(20, 30);
            } while (x+y > 60);
        } while (Banjar.random_persamaan_linear.array_in_array([a, x, b, y]));
        Banjar.random_persamaan_linear.lastPush([a, x, b, y]);

        // jawaban
        window.setting.jawaban = y;
        return text
            .replace('__a__', a)
            .replace('__x__', x.toLocaleString('id-ID'))
            .replace('__y__', y.toLocaleString('id-ID'))
            .replace('__c__', (a*x + b*y).toLocaleString('id-ID'))
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Pemerintah Kabupaten Banjar menjalankan sebuah kebijakan promosi pariwisata ke sosial media untuk meningkatkan jumlah wisatawan asing yang berkunjung ke Pasar Terapung Lok Baintan. Setiap tahun, jumlah wisatawan asing meningkat secara teratur. Dimana pada tahun ke-2 sebanyak __U2__ wisatawan per tahun, tahun ke-__m__ adalah __Um__ wisatawan pertahun, dan tahun ke-__o__ adalah __Uo__ wisatawan pertahun. Tentukan banyak wisatawan pada tahun pertama!";
        // Ketentuan Random:
        // a = 100 − 200 (kelipatan 10)
        // b = 50 − 70 (kelipatan 5)
        // m, o = 2 − 10 (kada boleh sama)
        // Un, Um, Uo, Ui → Un = a + (n − 1)b;

        let n = 2;
        // random
        let a = 0;
        let b = 0;
        let m = 0;
        let o = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(100, 200, 10);
            b = Soal.randomInterval(50, 70, 5);
            m = Soal.randomInterval(2, 10);
            do { o = Soal.randomInterval(2, 10);
            } while (m == o);
            console.log('selesai random, akan di cek');
            
        } while (Banjar.random_barisan_dan_deret.array_in_array([a, b, m, o]));
        console.log('masukkan ke array record');
        Banjar.random_barisan_dan_deret.lastPush([a, b, m, o]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = a;
        console.log('jawaban di dapatkan');
        return text
            .replace('__m__', m)
            .replace('__o__', o)
            .replace('__Un__', a+b*2)
            .replace('__Um__', a+b*(m-1))
            .replace('__Uo__', a+b*(o-1))
    }
};