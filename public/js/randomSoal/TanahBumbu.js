window.TanahBumbu = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = `Desa Kersik Putih di Kecamatan Batulicin memiliki kawasan wisata mangrove yang menarik banyak pengunjung. Wisata ini tidak hanya menawarkan pemandangan yang indah tetapi juga edukasi mengenai pentingnya ekosistem mangrove dalam menjaga keseimbangan lingkungan. Setiap harinya, pengelola wisata mencatat jumlah pengunjung untuk memantau perkembangan pariwisata. Dalam 7 hari terakhir, jumlah pengunjung yang datang ke wisata mangrove ini adalah __daftar_data__ orang. Hitunglah rata-rata (mean) jumlah pengunjung per hari!`;

        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let data = [];
        console.log(typeof (TanahBumbu.random_statistika));
        
        do {
            for (let index = 0; index < 6; index++) {
                data.push(Soal.randomInterval(120, 170));
            }
            data.push(Soal.randomInterval(120, 170));
            data[6] = data[6] - (data.reduce((a,b)=>a+b) % 7);
        } while (TanahBumbu.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        TanahBumbu.random_statistika.lastPush(data);
        window.setting.jawaban = data.reduce((a,b)=>a+b)/data.length;
        return text.replace('__daftar_data__', data.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `Pesta Pantai Pagatan, atau dikenal sebagai Mappanre Ri Tasi’e, adalah tradisi masyarakat Bugis di Kalimantan Selatan yang diadakan setiap tahun di Pantai Pagatan. Festival ini menarik banyak pengunjung dari berbagai daerah untuk menikmati berbagai pertun jukan budaya, kuliner khas, dan perlombaan tradisional. Seorang pedagang es kelapa ingin berjualan di acara tersebut. Harga tiket masuk ke festival adalah Rp__y__. Ia menjual es kelapa seharga Rp5.000 per gelas dan menargetkan keuntungan sebesar Rp__x__ setelah membayar tiket masuk. Berapa gelas es kelapa yang harus ia jual untuk mencapai target keuntungan tersebut?`;
        
        
        let x = 0;
        let y = 0;

        do {
            y = Soal.randomInterval(10000, 30000, 10000);
            x = Soal.randomInterval(200000, 400000, 100000);
        } while (TanahBumbu.random_persamaan_linear.array_in_array([y, x]));
        TanahBumbu.random_persamaan_linear.lastPush([y, x]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+((x - y)*5000).toLocaleString('id-ID')+'\\),-';
        return text
            .replace('__y__', y.toLocaleString('id-ID'))
            .replace('__x__', x.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Di Desa Pulau Burung, Kecamatan Simpang Empat, masyarakat memanfaatkan mangrove sebagai pewarna alami untuk kain sasirangan. Proses ini lebih ramah lingkungan dibandingkan dpengan pewarna sintetis dan semakin diminati oleh perajin kain tradisional.Seorang pengrajin kain membutuhkan __a__ kg daun mangrove pada hari pertama untuk menghasilkan pewarna alami. Setiap hari berikutnya, jumlah daun yang dibutuhkan bertambah __b__ kg dari hari sebelumnya. Berapa kg daun mangrove yang dibutuhkan pada hari ke-__n__?";
        
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