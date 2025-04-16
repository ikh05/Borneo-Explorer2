window.Balangan = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = 'Terletak di Desa Nungka Kecamatan Awayan, Bendungan Pitap dibangun pada tahun 2004 hingga 2011, sebagai penunjang ketahanan nasional, yang menjadi sumber aliran air dan irigasi bagi pertanian, luasannya ribuan hektare yang tersebar pada beberapa kecamatan. Bendungan Pitap dibangun Kementerian Pekerjaan Umum dan Perumahan Rakyat, Direktorat Jenderal Sumber Daya Air, Balai Wilayah Sungai Kalimantan II dengan menggunakan APBN sebagai berikut, pada tahun 2004, Rp11.000.000.000, pada tahun 2005, Rp15.000.000.000, kemudian tahun 2006 Rp22.000.000.000, dan tahun 2007 Rp19.000.000.000, dilanjutkan pada tahun 2011 Rp22.000.000.000. Tentukan rata-rata anggaran pada tahun __daftar_tahun__';
        const data = {
            2004: 11000000000,
            2005: 15000000000,
            2006: 22000000000,
            2007: 19000000000,
            2011: 22000000000,
        }
        console.log('statistika belum_random');
        
        // random ambil 2 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let randomEntries = [];
        
        do {
            console.log('statistika iterasi_random');
            randomEntries = Object.entries(data)
            .shuffleArray() 
            .slice(0, 2)
            .sort((a, b) => a[0] - b[0]);
            console.log('statistika sudah_di random');
        } while (Balangan.random_statistika.array_in_array(randomEntries));
        console.log('statistika selesai_random');
        // simpan ke daftar 5 terakhir
        Balangan.random_statistika.lastPush(randomEntries);
        
        let tahunSaja = randomEntries.map(e => e[0]);
        let uangSaja = randomEntries.map(e => e[1]);
        window.setting.jawaban = 'Rp\\('+(uangSaja.mean()).toLocaleString('id-ID')+'\\),-';
        window.setting.soal_sound = '';
        return text.replace('__daftar_tahun__', tahunSaja.joinName());
    },






    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = "Di Kabupaten Balangan terdapat Wisata Alam Sungai Maranting yang terletak di Desa Gunung Batu, Kecamatan Tebing Tinggi, Kabupaten Balangan, Kalimantan Selatan ramai pengunjung dari berbagai daerah saat berlibur maupun merayakan tahun baru. Sungai maranting berjarak 33 km dari pusat kota Balangan. Untuk menikmati keindahan Sungai Maranting, pengunjung hanya perlu membayar tiket masuk sebesar Rp__x__. Jika sebuah rombongan terdiri dari __a__ orang dan membayar tiket wisata dengan uang Rp200.000, berapa kembalian yang diterima rombongan tersebut?";

        let a = 0;
        let x = 0;

        do {
            a = Soal.randomInterval(6,9);
            x = Soal.randomInterval(20000, 22000, 1000);
        } while (Balangan.random_persamaan_linear.array_in_array([a, x]));
        Balangan.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+(200000 - a*x).toLocaleString('id-ID')+'\\),-';
        window.setting.soal_sound = '';
        return text
            .replace('__a__', a)
            .replace('__x__', x.toLocaleString('id-ID'));
    },



    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() { // 10*2*3 = 60
        let text = "Wisata Pasar Budaya Racah Mampulang terletak di Desa Balida Kecamatan Paringin Kabupaten Balangan merupakan wisata yang memadukan keindahan alam, kesenian dan kebudayaan. Wisata ini terletak 10 km dari pusat ibu kota Kabupaten Balangan. Wisata Pasar Budaya Racah Mampulang memiliki pesona sumber daya alam, seni dan budaya yang sangat menarik, terdapat keindahan alam berupa persawahan, binatang-binatang dalam kandang, jembatan pohon, jembatan bambu yang membentang diatas persawahan dan menarik lainnya. Dimana setiap bulannya direncanakan akan ada festival dan pertunjukkan seni di wisata tersebut. Di pasar tersebut juga dijajakan berbagai jajanan-jajanan khas desa tersebut. Jika seorang pengelola acara memperkirakan bahwa keuntungan yang diperoleh dari penjualan makanan pada hari pertama adalah Rp __a__, dan setiap hari keuntungan tersebut meningkat __r__ kali lipat selama seminggu ini. Hitunglah keuntungan pada hari ke-__n__?";
        // a=400.000-600.000 (kelipatan 20.000)
        // r=2-3 
        // n=4-6 
        // Jawaban: U_n=ar^(n-1)  

        // random
        let a = 0;
        let n = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(100000, 500000, 100000);
            n = Soal.randomInterval(3,6);
            console.log('selesai random, akan di cek');            
        } while (Balangan.random_barisan_dan_deret.array_in_array([a, n]));
        console.log('masukkan ke array record');
        Balangan.random_barisan_dan_deret.lastPush([a, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        let jawaban = a*Math.pow(2, n-1);
        window.setting.jawaban = 'Rp\\('+jawaban.toLocaleString('id-ID')+'\\),-';
        window.setting.soal_sound = '';
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a.toLocaleString('id-ID'))
            .replace('__r__', 2)
            .replace('__n__', n);
    }
}